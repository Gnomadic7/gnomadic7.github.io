import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
//import { TripListingComponent } from './trip-listing/trip-listing.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
//import { FoodListingComponent } from './food-listing/food-listing.component';
import { AddFoodComponent } from './add-food/add-food.component';

//import {AccommodationsListingComponent} from './accommodations-listing/accommodations-listing.component';
import { AddAccommodationsComponent } from './add-accommodations/add-accommodations.component';
import { EditAccommodationsComponent } from './edit-accommodations/edit-accommodations.component';

//import { NewsLatestListingComponent } from './news-latest-listing/news-latest-listing.component';
import { AddNewsLatestComponent } from './add-news-latest/add-news-latest.component';
import { EditNewsLatestComponent } from './edit-news-latest/edit-news-latest.component';

//import { NewsFeaturedListingComponent } from './news-featured-listing/news-featured-listing.component';
import { EditNewsFeaturedComponent } from './edit-news-featured/edit-news-featured.component';

//import { NewsTipsListingComponent } from './news-tips-listing/news-tips-listing.component';
import { AddNewsTipsComponent } from './add-news-tips/add-news-tips.component';
import { EditNewsTipsComponent } from './edit-news-tips/edit-news-tips.component';

import { LoginComponent } from './login/login.component';
import { EditFoodComponent } from './edit-food/edit-food.component';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add-food', component: AddFoodComponent },
    { path: 'edit-food', component: EditFoodComponent},
    { path: 'add-accommodations', component: AddAccommodationsComponent },
    { path: 'edit-accommodations', component: EditAccommodationsComponent},
    { path: 'add-news-latest', component: AddNewsLatestComponent },
    { path: 'edit-news-latest', component: EditNewsLatestComponent},
    { path: 'add-news-tips', component: AddNewsTipsComponent },
    { path: 'edit-news-tips', component: EditNewsTipsComponent},
    { path: 'edit-news-featured', component: EditNewsFeaturedComponent},
    //{ path: '', component: TripListingComponent, pathMatch: 'full'},
    //{ path: '', component: FoodListingComponent, pathMatch: 'full'},
    //{ path: '', component: AccommodationsListingComponent, pathMatch: 'full'},
    //{ path: '', component: NewsLatestListingComponent, pathMatch: 'full'},
    //{ path: '', component: NewsFeaturedListingComponent, pathMatch: 'full'},
    //{ path: '', component: NewsTipsListingComponent, pathMatch: 'full'}
];
