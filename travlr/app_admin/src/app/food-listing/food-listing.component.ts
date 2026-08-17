import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { food } from '../data/food';
import { FoodCardComponent } from '../food-card/food-card.component';
import { FoodDataService } from '../services/food-data.service';
import { Food } from '../models/food';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-listing',
  standalone: true,
  imports: [CommonModule, FoodCardComponent],
  templateUrl: './food-listing.component.html',
  styleUrl: './food-listing.component.css',
  providers: [FoodDataService]
})

export class FoodListingComponent implements OnInit {
  
  food!: Food[];
  message: string = '';

  constructor(
    private foodDataService: FoodDataService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
    console.log('food-listing constructor');
  }

  public addFood(): void {
    console.log('addFood');
    this.router.navigate(['add-food']);
  }

  private getStuff(): void {
    this.foodDataService.getFoods()
      .subscribe({
        next: (value: any) => {
          this.food = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' food items available.';
          }
          else{
            this.message = 'There were no food items retrieved from the database';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
    }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

}
