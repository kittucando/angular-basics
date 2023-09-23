import { TestBed } from '@angular/core/testing';

import { CheckHowthingsworkService } from './check-howthingswork.service';

describe('CheckHowthingsworkService', () => {
  let service: CheckHowthingsworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckHowthingsworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
