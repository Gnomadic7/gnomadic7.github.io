import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccommodationsComponent } from './edit-accommodations.component';

describe('EditAccommodationsComponent', () => {
  let component: EditAccommodationsComponent;
  let fixture: ComponentFixture<EditAccommodationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAccommodationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAccommodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
