import { TestBed } from '@angular/core/testing';

import { FireFeedService } from './fire-feed.service';

describe('FireFeedService', () => {
  let service: FireFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
