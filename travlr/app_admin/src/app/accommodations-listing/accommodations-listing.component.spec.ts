import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationsListingComponent } from './accommodations-listing.component';

describe('AccommodationsListingComponent', () => {
  let component: AccommodationsListingComponent;
  let fixture: ComponentFixture<AccommodationsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccommodationsListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccommodationsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
