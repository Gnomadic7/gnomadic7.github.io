import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

import { NewsTips } from '../models/newsTips';


@Injectable({
  providedIn: 'root'
})

export class NewsTipsDataService {

  constructor(
    private http: HttpClient, 
    @Inject(BROWSER_STORAGE) private storage: Storage) { }
  
  baseUrl = 'http://localhost:3000/api';
  url = 'http://localhost:3000/api/newsTips';

  getNewsTips(): Observable<NewsTips[]> {
    return this.http.get<NewsTips[]>(this.url);
  }

  addNewsTips(formData: NewsTips): Observable<NewsTips> {
    return this.http.post<NewsTips>(this.url, formData);
  }

  getNewsTip(newsCode: string) : Observable<NewsTips[]> {
    return this.http.get<NewsTips[]>(this.url + '/' + newsCode);
  }

  updateNewsTip(formData: NewsTips) : Observable<NewsTips> {
    return this.http.put<NewsTips>(this.url + '/' + formData.code, formData);
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
