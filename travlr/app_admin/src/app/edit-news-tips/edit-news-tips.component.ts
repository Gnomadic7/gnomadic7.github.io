import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsTipsDataService } from '../services/news-tips-data.service';
import { NewsTips } from '../models/newsTips';

@Component({
  selector: 'app-edit-news-tips',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-news-tips.component.html',
  styleUrl: './edit-news-tips.component.css'
})
export class EditNewsTipsComponent implements OnInit{

  public editForm!: FormGroup;
    newsTips!: NewsTips;
    submitted = false;
    message : string = '';
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private newsTipsDataService: NewsTipsDataService
    ) {}
  
    ngOnInit() : void {
  
      //Retrieve stashed Latest News ID
      let newsCode = localStorage.getItem('newsCode');
      if (!newsCode) {
        alert("Something wrong, couldn't find newsCode stash");
        this.router.navigate(['']);
        return;
      }
  
      console.log('EditNewsTipsComponent::ngOnInit');
      console.log('newsCode:' + newsCode);
  
      this.editForm = this.formBuilder.group({
        _id: [],
        code: ['', Validators.required],
        title: ['', Validators.required]
      })
  
      this.newsTipsDataService.getNewsTip(newsCode)
        .subscribe({
          next: (value: any) => {
            this.newsTips = value;
            //Populate our record into the form
            this.editForm.patchValue(value[0]);
            if(!value)
            {
              this.message = 'No Vacation Tip Retrieved';
            }
            else {
              this.message = 'Vacation Tip: ' + newsCode + ' retrieved';
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
        this.newsTipsDataService.updateNewsTip(this.editForm.value)
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
