import { Component } from '@angular/core';

import { TripListingComponent } from '../trip-listing/trip-listing.component';
import { FoodListingComponent } from '../food-listing/food-listing.component';
import { AccommodationsListingComponent } from '../accommodations-listing/accommodations-listing.component';
import { NewsTipsListingComponent } from '../news-tips-listing/news-tips-listing.component';
import { NewsLatestListingComponent } from '../news-latest-listing/news-latest-listing.component';
import { NewsFeaturedListingComponent } from '../news-featured-listing/news-featured-listing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TripListingComponent,
    AccommodationsListingComponent,
    FoodListingComponent,
    NewsTipsListingComponent,
    NewsLatestListingComponent,
    NewsFeaturedListingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
