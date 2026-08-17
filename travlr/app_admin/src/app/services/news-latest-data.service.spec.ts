import { TestBed } from '@angular/core/testing';

import { NewsLatestDataService } from './news-latest-data.service';

describe('NewsLatestDataService', () => {
  let service: NewsLatestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsLatestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
