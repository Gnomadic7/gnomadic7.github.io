import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newsLatest } from '../data/newsLatest';
import { NewsLatestCardComponent } from '../news-latest-card/news-latest-card.component';
import { NewsLatestDataService } from '../services/news-latest-data.service';
import { NewsLatest } from '../models/newsLatest';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-latest-listing',
  standalone: true,
  imports: [CommonModule, NewsLatestCardComponent],
  templateUrl: './news-latest-listing.component.html',
  styleUrl: './news-latest-listing.component.css',
  providers: [NewsLatestDataService]
})

export class NewsLatestListingComponent implements OnInit {
  
  newsLatest!: NewsLatest[];
  message: string = '';

  constructor(
    private newsLatestDataService: NewsLatestDataService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
    console.log('news-latest-listing constructor');
  }

  public addNewsLatest(): void {
    console.log('addNewsLatest');
    this.router.navigate(['add-news-latest']);
  }

  private getStuff(): void {
    this.newsLatestDataService.getNewsLatests()
      .subscribe({
        next: (value: any) => {
          this.newsLatest = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' latest news items available.';
          }
          else{
            this.message = 'There were no latest news items retrieved from the database';
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
