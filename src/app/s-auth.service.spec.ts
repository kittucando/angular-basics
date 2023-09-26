import { TestBed } from '@angular/core/testing';

import { SAuthService } from './s-auth.service';

describe('SAuthService', () => {
  let service: SAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
