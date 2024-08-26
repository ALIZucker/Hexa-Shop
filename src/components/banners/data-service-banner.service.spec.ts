import { TestBed } from '@angular/core/testing';

import { DataServiceBannerService } from './data-service-banner.service';

describe('DataServiceBannerService', () => {
  let service: DataServiceBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
