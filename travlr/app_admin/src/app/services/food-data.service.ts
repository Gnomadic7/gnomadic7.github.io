import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

import { Food } from '../models/food';


@Injectable({
  providedIn: 'root'
})

export class FoodDataService {

  constructor(
    private http: HttpClient, 
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  baseUrl = 'http://localhost:3000/api';
  url = 'http://localhost:3000/api/food';

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.url);
  }

  addFood(formData: Food): Observable<Food> {
    return this.http.post<Food>(this.url, formData);
  }

  getFood(mealCode: string) : Observable<Food[]> {
    // console.log('Inside FoodDataService::getFood');
    return this.http.get<Food[]>(this.url + '/' + mealCode);
  }

  updateFood(formData: Food) : Observable<Food> {
    // console.log('Inside FoodDataService::addFoods');
    return this.http.put<Food>(this.url + '/' + formData.code, formData);
  }

  // Call to our /login endpoint, returns JWT
  login(user: User, passwd: string) : Observable<AuthResponse> {
    // console.log('Inside TripDataService::login');
    return this.handleAuthAPICall('login', user, passwd);
  }

  // Call to our /register endpoint, creates user and returns JWT
  register(user: User, passwd: string) : Observable<AuthResponse> {
    // console.log("Inside TripDataService::register");
    return this.handleAuthAPICall('register', user, passwd);
  }

  // helper method to process both login and register methods
  handleAuthAPICall(endpoint: string, user: User, passwd: string) : Observable<AuthResponse> {
    // console.log('Inside TripDataService::handleAuthAPICall');
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };

    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, formData);
  }
}
