import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { NewsFeatured } from '../models/newsFeatured';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-news-featured-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-featured-card.component.html',
  styleUrl: './news-featured-card.component.css'
})
export class NewsFeaturedCardComponent implements OnInit {
  @Input('newsFeatured') newsFeatured: any;

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
  }

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  public editNewsFeatured(newsFeatured: NewsFeatured) {
    localStorage.removeItem('newsCode');
    localStorage.setItem('newsCode', newsFeatured.code);
    this.router.navigate(['edit-news-featured']);
  }

}
