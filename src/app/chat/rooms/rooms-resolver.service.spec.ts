import { TestBed, inject } from '@angular/core/testing';

import { RoomsResolverService } from './rooms-resolver.service';

describe('RoomsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomsResolverService]
    });
  });

  it('should be created', inject([RoomsResolverService], (service: RoomsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
