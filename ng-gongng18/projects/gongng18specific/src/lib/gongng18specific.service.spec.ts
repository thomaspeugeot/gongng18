import { TestBed } from '@angular/core/testing';

import { Gongng18specificService } from './gongng18specific.service';

describe('Gongng18specificService', () => {
  let service: Gongng18specificService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gongng18specificService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
