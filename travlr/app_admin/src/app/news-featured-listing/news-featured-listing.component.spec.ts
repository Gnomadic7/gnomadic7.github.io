import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeaturedListingComponent } from './news-featured-listing.component';

describe('NewsFeaturedListingComponent', () => {
  let component: NewsFeaturedListingComponent;
  let fixture: ComponentFixture<NewsFeaturedListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsFeaturedListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsFeaturedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
