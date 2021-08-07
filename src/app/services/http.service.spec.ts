import { inject, TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retrieves game list', inject([HttpService], (httpService) => {
    httpService.getGameList().subscribe(result => expect(result.length).toBeGreaterThan(0));
  }))
});
