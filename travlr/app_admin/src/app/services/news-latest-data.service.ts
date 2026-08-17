import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

import { NewsLatest } from '../models/newsLatest';


@Injectable({
  providedIn: 'root'
})

export class NewsLatestDataService {

  constructor(
    private http: HttpClient, 
    @Inject(BROWSER_STORAGE) private storage: Storage) { }
  
  baseUrl = 'http://localhost:3000/api';
  url = 'http://localhost:3000/api/newsLatest';

  getNewsLatests(): Observable<NewsLatest[]> {
    return this.http.get<NewsLatest[]>(this.url);
  }

  addNewsLatest(formData: NewsLatest): Observable<NewsLatest> {
    return this.http.post<NewsLatest>(this.url, formData);
  }

  getNewsLatest(newsCode: string) : Observable<NewsLatest[]> {
    //console.log('Inside NewsLatestDataService::getNewsLatests');
    return this.http.get<NewsLatest[]>(this.url + '/' + newsCode);
  }

  updateNewsLatest(formData: NewsLatest) : Observable<NewsLatest> {
    //console.log('Inside NewsLatestDataService::addNewsLatests');
    return this.http.put<NewsLatest>(this.url + '/' + formData.code, formData);
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
