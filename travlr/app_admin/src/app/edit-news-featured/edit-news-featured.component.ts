import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsFeaturedDataService } from '../services/news-featured-data.service';
import { NewsFeatured } from '../models/newsFeatured';

@Component({
  selector: 'app-edit-news-featured',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-news-featured.component.html',
  styleUrl: './edit-news-featured.component.css'
})
export class EditNewsFeaturedComponent implements OnInit {

  public editForm!: FormGroup;
    newsFeatured!: NewsFeatured;
    submitted = false;
    message : string = '';
  
    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private newsFeaturedDataService: NewsFeaturedDataService
    ) {}
  
    ngOnInit() : void {
  
      //Retrieve stashed Latest News ID
      let newsCode = localStorage.getItem('newsCode');
      if (!newsCode) {
        alert("Something wrong, couldn't find newsCode stash");
        this.router.navigate(['']);
        return;
      }
  
      console.log('EditNewsFeaturedComponent::ngOnInit');
      console.log('newsCode:' + newsCode);
  
      this.editForm = this.formBuilder.group({
        _id: [],
        code: ['', Validators.required],
        title: ['', Validators.required],
        author: ['', Validators.required],
        pubDate: ['', Validators.required],
        description: ['', Validators.required],
        image: ['', Validators.required]
      })
  
      this.newsFeaturedDataService.getNewsFeatured(newsCode)
        .subscribe({
          next: (value: any) => {
            this.newsFeatured = value;
            //Populate our record into the form
            this.editForm.patchValue(value[0]);
            if(!value)
            {
              this.message = 'No Featured News Retrieved';
            }
            else {
              this.message = 'Featured News: ' + newsCode + ' retrieved';
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
        this.newsFeaturedDataService.updateNewsFeatured(this.editForm.value)
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
