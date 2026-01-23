import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { authmGuard } from './authm-guard';

describe('authmGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authmGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
