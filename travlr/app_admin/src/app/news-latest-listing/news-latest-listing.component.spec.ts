import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLatestListingComponent } from './news-latest-listing.component';

describe('NewsLatestListingComponent', () => {
  let component: NewsLatestListingComponent;
  let fixture: ComponentFixture<NewsLatestListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsLatestListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsLatestListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
