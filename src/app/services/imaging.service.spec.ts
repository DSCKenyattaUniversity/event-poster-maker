import { TestBed } from '@angular/core/testing';

import { ImagingService } from './imaging.service';

describe('ImagingService', () => {
  let service: ImagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
