import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeaturedCardComponent } from './news-featured-card.component';

describe('NewsFeaturedCardComponent', () => {
  let component: NewsFeaturedCardComponent;
  let fixture: ComponentFixture<NewsFeaturedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsFeaturedCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsFeaturedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
