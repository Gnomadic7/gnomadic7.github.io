import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccommodationsComponent } from './add-accommodations.component';

describe('AddAccommodationsComponent', () => {
  let component: AddAccommodationsComponent;
  let fixture: ComponentFixture<AddAccommodationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAccommodationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAccommodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
