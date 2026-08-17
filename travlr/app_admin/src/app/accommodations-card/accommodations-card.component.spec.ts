import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationsCardComponent } from './accommodations-card.component';

describe('AccommodationsCardComponent', () => {
  let component: AccommodationsCardComponent;
  let fixture: ComponentFixture<AccommodationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccommodationsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccommodationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
