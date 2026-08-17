import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

import { Accommodations } from '../models/accommodations';


@Injectable({
  providedIn: 'root'
})

export class AccommodationsDataService {

  constructor(
    private http: HttpClient, 
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  baseUrl = 'http://localhost:3000/api';
  url = 'http://localhost:3000/api/accommodations';

  getAccommodations() : Observable<Accommodations[]> {
    return this.http.get<Accommodations[]>(this.url);
  }

  addAccommodations(formData: Accommodations): Observable<Accommodations> {
    return this.http.post<Accommodations>(this.url, formData);
  }

  getAccommodation(roomCode: string) : Observable<Accommodations[]> {
    // console.log('Inside AccommodationsDataService::getAccommodations');
    return this.http.get<Accommodations[]>(this.url + '/' + roomCode);
  }

  updateAccommodations(formData: Accommodations) : Observable<Accommodations> {
    // console.log('Inside AccommodationsDataService::addAccommodations');
    return this.http.put<Accommodations>(this.url + '/' + formData.code, formData);
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
