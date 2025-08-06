import { TestBed } from '@angular/core/testing';

import { Nombres } from './nombres';

describe('Nombres', () => {
  let service: Nombres;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nombres);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
