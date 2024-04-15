import { TestBed } from '@angular/core/testing';

import { blocService } from './bloc.service';

describe('ChaambreService', () => {
  let service: blocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(blocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
