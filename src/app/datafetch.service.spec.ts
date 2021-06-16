import { TestBed, inject } from '@angular/core/testing';

import { DatafetchService } from './datafetch.service';

describe('DatafetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatafetchService]
    });
  });

  it('should be created', inject([DatafetchService], (service: DatafetchService) => {
    expect(service).toBeTruthy();
  }));
});
