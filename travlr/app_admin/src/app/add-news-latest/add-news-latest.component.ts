import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsLatestDataService } from '../services/news-latest-data.service';

@Component({
  selector: 'app-add-news-latest',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-news-latest.component.html',
  styleUrl: './add-news-latest.component.css'
})
export class AddNewsLatestComponent implements OnInit {
  addForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private newsLatestService: NewsLatestDataService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      title: ['', Validators.required]
    })
  }

  public onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.newsLatestService.addNewsLatest(this.addForm.value)
      .subscribe( {
        next: (data: any) => {
          console.log(data);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }});
      }
    }
    // get the form short name to access the form controls
    get f() { return this.addForm.controls; }
}
