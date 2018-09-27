import { TestBed, inject } from '@angular/core/testing';

import { GiphyapiService } from './giphyapi.service';

describe('GiphyapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiphyapiService]
    });
  });

  it('should be created', inject([GiphyapiService], (service: GiphyapiService) => {
    expect(service).toBeTruthy();
  }));
});
