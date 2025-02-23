import { TestBed } from '@angular/core/testing';

import { Gongng18Service } from './gongng18.service';

describe('Gongng18Service', () => {
  let service: Gongng18Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gongng18Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
