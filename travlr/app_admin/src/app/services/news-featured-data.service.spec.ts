import { TestBed } from '@angular/core/testing';

import { NewsFeaturedDataService } from './news-featured-data.service';

describe('NewsFeaturedDataService', () => {
  let service: NewsFeaturedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsFeaturedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
