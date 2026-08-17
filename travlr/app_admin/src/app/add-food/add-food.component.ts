import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodDataService } from '../services/food-data.service';

@Component({
  selector: 'app-add-food',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.css'
})
export class AddFoodComponent implements OnInit{
  addForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private foodService: FoodDataService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      title: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  public onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.foodService.addFood(this.addForm.value)
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
