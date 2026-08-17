import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodDataService } from '../services/food-data.service';
import { Food } from '../models/food';

@Component({
  selector: 'app-edit-food',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-food.component.html',
  styleUrl: './edit-food.component.css'
})
export class EditFoodComponent implements OnInit{

  public editForm!: FormGroup;
  food!: Food;
  submitted = false;
  message : string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private foodDataService: FoodDataService
  ) {}

  ngOnInit() : void{

    //Retrieve stashed food ID
    let mealCode = localStorage.getItem("mealCode");
    if (!mealCode) {
      alert("Something wrong, couldn't find mealCode stash");
      this.router.navigate(['']);
      return;
    }

    console.log('EditFoodComponent::ngOnINit');
    console.log('mealCode:' + mealCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      title: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.foodDataService.getFood(mealCode)
      .subscribe({
        next: (value: any) => {
          this.food = value;
          //Populate our record into the form
          this.editForm.patchValue(value[0]);
          if(!value)
          {
            this.message = 'No Meal Retrieved'
          }
          else {
            this.message = 'Food: ' + mealCode + ' retrieved';
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
      this.foodDataService.updateFood(this.editForm.value)
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
