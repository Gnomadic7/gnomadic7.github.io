import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Accommodations } from '../models/accommodations';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-accommodations-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accommodations-card.component.html',
  styleUrl: './accommodations-card.component.css'
})
export class AccommodationsCardComponent implements OnInit {
  
  @Input('accommodation') accommodation: any;

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
  }

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  public editAccommodation(accommodation: Accommodations) {
    localStorage.removeItem('roomCode');
    localStorage.setItem('roomCode', accommodation.code);
    this.router.navigate(['edit-accommodations']);
  }

}
