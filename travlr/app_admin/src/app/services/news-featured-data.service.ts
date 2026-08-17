import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsFeatured } from '../models/newsFeatured';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})

export class NewsFeaturedDataService {

  constructor(
    private http: HttpClient, 
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  baseUrl = 'http://localhost:3000/api';
  url = 'http://localhost:3000/api/newsFeatured';

  getNewsFeatureds(): Observable<NewsFeatured[]> {
    return this.http.get<NewsFeatured[]>(this.url);
  }

  getNewsFeatured(newsCode: string) : Observable<NewsFeatured[]> {
    // console.log('Inside NewsFeaturedDataService::getNewsFeatureds');
    return this.http.get<NewsFeatured[]>(this.url + '/' + newsCode);
  }

  updateNewsFeatured(formData: NewsFeatured) : Observable<NewsFeatured> {
    //console.log('Inside NewsFeaturedDataService::);
    return this.http.put<NewsFeatured>(this.url + '/' + formData.code, formData);
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
