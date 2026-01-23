import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Master } from '../Service/master';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(Master);
  const router = inject(Router);
  if (service.IsloggedIn()) {
    return true;
  } else {
    alert('Please login to access this page.');
    router.navigate(['/login']);
  }
  //
  return false;
};
