import { TestBed } from '@angular/core/testing';

import { AppGaurdGuard } from './app-gaurd.guard';

describe('AppGaurdGuard', () => {
  let guard: AppGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
