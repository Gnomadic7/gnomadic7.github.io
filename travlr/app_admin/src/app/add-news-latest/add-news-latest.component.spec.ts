import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsLatestComponent } from './add-news-latest.component';

describe('AddNewsLatestComponent', () => {
  let component: AddNewsLatestComponent;
  let fixture: ComponentFixture<AddNewsLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewsLatestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
