import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newsTips } from '../data/newsTips';
import { NewsTipsCardComponent } from '../news-tips-card/news-tips-card.component';
import { NewsTipsDataService } from '../services/news-tips-data.service';
import { NewsTips } from '../models/newsTips';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-tips-listing',
  standalone: true,
  imports: [CommonModule, NewsTipsCardComponent],
  templateUrl: './news-tips-listing.component.html',
  styleUrl: './news-tips-listing.component.css',
  providers: [NewsTipsDataService]
})

export class NewsTipsListingComponent implements OnInit {

  newsTips!: NewsTips[];
  message: string = '';

  constructor(
    private newsTipsDataService: NewsTipsDataService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    console.log('news-tips-listing constructor');
  }

  public addNewsTip(): void {
    console.log('addNewsTip');
    this.router.navigate(['add-news-tips']);
  }

  private getStuff(): void {
    this.newsTipsDataService.getNewsTips()
      .subscribe({
        next: (value: any) => {
          this.newsTips = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' news tips available.';
          }
          else{
            this.message = 'There were no news tips retrieved from the database';
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
