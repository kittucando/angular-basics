import { TestBed } from '@angular/core/testing';

import { GAuthGuard } from './g-auth.guard';

describe('GAuthGuard', () => {
  let guard: GAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
