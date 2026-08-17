import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewsTips } from '../models/newsTips';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-news-tips-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-tips-card.component.html',
  styleUrl: './news-tips-card.component.css'
})
export class NewsTipsCardComponent implements OnInit {

  @Input('newsTip') newsTip: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
  }

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  public editNewsTips(newsTips: NewsTips) {
    localStorage.removeItem('newsCode');
    localStorage.setItem('newsCode', newsTips.code);
    this.router.navigate(['edit-news-tips']);
  }

}
