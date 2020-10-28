import { TestBed } from '@angular/core/testing';

import { PosterTemplatesService } from './poster-templates.service';

describe('PosterTemplatesService', () => {
  let service: PosterTemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosterTemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
