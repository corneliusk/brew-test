import { TestBed } from '@angular/core/testing';

import { BrewApiService } from './brew-api.service';

describe('BrewApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrewApiService = TestBed.get(BrewApiService);
    expect(service).toBeTruthy();
  });
});
