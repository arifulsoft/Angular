import { TestBed } from '@angular/core/testing';

import { LogingserviceService } from './logingservice.service';

describe('LogingserviceService', () => {
  let service: LogingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
