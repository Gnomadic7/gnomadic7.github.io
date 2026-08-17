import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsTipsComponent } from './edit-news-tips.component';

describe('EditNewsTipsComponent', () => {
  let component: EditNewsTipsComponent;
  let fixture: ComponentFixture<EditNewsTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditNewsTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditNewsTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
