import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsTipsDataService } from '../services/news-tips-data.service';

@Component({
  selector: 'app-add-news-tips',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-news-tips.component.html',
  styleUrl: './add-news-tips.component.css'
})
export class AddNewsTipsComponent implements OnInit {
  addForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private newsTipsService: NewsTipsDataService
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
      this.newsTipsService.addNewsTips(this.addForm.value)
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
