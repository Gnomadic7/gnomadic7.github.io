import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTipsListingComponent } from './news-tips-listing.component';

describe('NewsTipsListingComponent', () => {
  let component: NewsTipsListingComponent;
  let fixture: ComponentFixture<NewsTipsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsTipsListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsTipsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
