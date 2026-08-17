import { TestBed } from '@angular/core/testing';

import { NewsTipsDataService } from './news-tips-data.service';

describe('NewsTipsDataService', () => {
  let service: NewsTipsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsTipsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
