import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Food } from '../models/food';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css'
})
export class FoodCardComponent implements OnInit {
  @Input('food') food: any;

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
  }

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  public editFood(food: Food) {
    localStorage.removeItem('mealCode');
    localStorage.setItem('mealCode', food.code);
    this.router.navigate(['edit-food']);
  }

}
