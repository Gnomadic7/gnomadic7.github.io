import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { newsFeatured } from '../data/newsFeatured';
import { NewsFeaturedCardComponent } from '../news-featured-card/news-featured-card.component';
import { NewsFeaturedDataService } from '../services/news-featured-data.service';
import { NewsFeatured } from '../models/newsFeatured';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-featured-listing',
  standalone: true,
  imports: [CommonModule, NewsFeaturedCardComponent],
  templateUrl: './news-featured-listing.component.html',
  styleUrl: './news-featured-listing.component.css',
  providers: [NewsFeaturedDataService]
})
export class NewsFeaturedListingComponent implements OnInit {
  
  newsFeatured!: NewsFeatured[];
  message: string = '';

  constructor(
    private newsFeaturedDataService: NewsFeaturedDataService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
    console.log('news-featured-listing constructor');
  }

  /*public addNewsFeatured(): void {
    console.log('addNewsFeatured');
    this.router.navigate(['add-news-featured']);
  }*/

  private getStuff(): void {
    this.newsFeaturedDataService.getNewsFeatureds()
      .subscribe({
        next: (value: any) => {
          this.newsFeatured = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' featured news items available.';
          }
          else{
            this.message = 'There were no featured news items retrieved from the database';
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
