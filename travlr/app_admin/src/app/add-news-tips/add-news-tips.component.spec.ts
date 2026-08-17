import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsTipsComponent } from './add-news-tips.component';

describe('AddNewsTipsComponent', () => {
  let component: AddNewsTipsComponent;
  let fixture: ComponentFixture<AddNewsTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewsTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewsTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
