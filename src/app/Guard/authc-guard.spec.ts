import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { authcGuard } from './authc-guard';

describe('authcGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authcGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
