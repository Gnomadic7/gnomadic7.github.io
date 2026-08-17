import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsFeaturedComponent } from './edit-news-featured.component';

describe('EditNewsFeaturedComponent', () => {
  let component: EditNewsFeaturedComponent;
  let fixture: ComponentFixture<EditNewsFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditNewsFeaturedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditNewsFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
