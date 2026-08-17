import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { accommodations } from '../data/accommodations';
import { AccommodationsCardComponent } from '../accommodations-card/accommodations-card.component';
import { Accommodations } from '../models/accommodations';
import { AccommodationsDataService } from '../services/accommodations-data.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accommodations-listing',
  standalone: true,
  imports: [CommonModule, AccommodationsCardComponent],
  templateUrl: './accommodations-listing.component.html',
  styleUrl: './accommodations-listing.component.css',
  providers: [AccommodationsDataService]
})

export class AccommodationsListingComponent implements OnInit {
  
  accommodations!: Accommodations[];
  message: string = '';

  constructor(
    private accommodationsDataService: AccommodationsDataService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
    console.log('accommodations-listing constructor');
  }

  public addAccommodations(): void {
    console.log('addAccommodations');
    this.router.navigate(['add-accommodations']);
  }

  private getStuff(): void {
    this.accommodationsDataService.getAccommodations()
      .subscribe({
        next: (value: any) => {
          this.accommodations = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' accommodations available.';
          }
          else{
            this.message = 'There were no accommodations retrieved from the database';
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
