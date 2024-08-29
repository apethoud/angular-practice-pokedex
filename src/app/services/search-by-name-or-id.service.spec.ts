import { TestBed } from '@angular/core/testing';

import { SearchByNameOrIdService } from './search-by-name-or-id.service';

describe('SearchByNameOrIdService', () => {
  let service: SearchByNameOrIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchByNameOrIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
