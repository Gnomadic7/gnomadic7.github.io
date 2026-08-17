import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsLatestDataService } from '../services/news-latest-data.service';
import { NewsLatest } from '../models/newsLatest';

@Component({
  selector: 'app-edit-news-latest',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-news-latest.component.html',
  styleUrl: './edit-news-latest.component.css'
})
export class EditNewsLatestComponent implements OnInit {

  public editForm!: FormGroup;
  newsLatest!: NewsLatest;
  submitted = false;
  message : string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private newsLatestDataService: NewsLatestDataService
  ) {}

  ngOnInit() : void {

    //Retrieve stashed Latest News ID
    let newsCode = localStorage.getItem('newsCode');
    if (!newsCode) {
      alert("Something wrong, couldn't find newsCode stash");
      this.router.navigate(['']);
      return;
    }

    console.log('EditNewsLatestComponent::ngOnInit');
    console.log('newsCode:' + newsCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      title: ['', Validators.required]
    })

    this.newsLatestDataService.getNewsLatest(newsCode)
      .subscribe({
        next: (value: any) => {
          this.newsLatest = value;
          //Populate our record into the form
          this.editForm.patchValue(value[0]);
          if(!value)
          {
            this.message = 'No Latest News Retrieved';
          }
          else {
            this.message = 'Latest News: ' + newsCode + ' retrieved';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  public onSubmit() {
    this.submitted = true;

    if(this.editForm.valid)
    {
      this.newsLatestDataService.updateNewsLatest(this.editForm.value)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
    }
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }


}
