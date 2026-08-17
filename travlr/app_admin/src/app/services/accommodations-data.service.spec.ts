import { TestBed } from '@angular/core/testing';

import { AccommodationsDataService } from './accommodations-data.service';

describe('AccommodationsDataService', () => {
  let service: AccommodationsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccommodationsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
