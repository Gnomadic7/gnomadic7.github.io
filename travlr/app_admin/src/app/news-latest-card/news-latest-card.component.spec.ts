import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLatestCardComponent } from './news-latest-card.component';

describe('NewsLatestCardComponent', () => {
  let component: NewsLatestCardComponent;
  let fixture: ComponentFixture<NewsLatestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsLatestCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsLatestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
