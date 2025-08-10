import { TestBed } from '@angular/core/testing';

import { Personas } from './personas';

describe('Personas', () => {
  let service: Personas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Personas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
