import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsLatestComponent } from './edit-news-latest.component';

describe('EditNewsLatestComponent', () => {
  let component: EditNewsLatestComponent;
  let fixture: ComponentFixture<EditNewsLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditNewsLatestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditNewsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
