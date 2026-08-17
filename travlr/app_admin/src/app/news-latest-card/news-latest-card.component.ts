import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewsLatest } from '../models/newsLatest';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-news-latest-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-latest-card.component.html',
  styleUrl: './news-latest-card.component.css'
})
export class NewsLatestCardComponent implements OnInit {
  @Input('newsLatest') newsLatest: any;

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
  }

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  public editNewsLatest(newsLatest: NewsLatest) {
    localStorage.removeItem('newsCode');
    localStorage.setItem('newsCode', newsLatest.code);
    this.router.navigate(['edit-news-latest']);
  }

}
