import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTipsCardComponent } from './news-tips-card.component';

describe('NewsTipsCardComponent', () => {
  let component: NewsTipsCardComponent;
  let fixture: ComponentFixture<NewsTipsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsTipsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsTipsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
