import { CanMatchFn } from '@angular/router';
import { Master } from '../Service/master';
import { inject } from '@angular/core';

export const authmGuard: CanMatchFn = (route, segments) => {
  const service = inject(Master);
  if(service.userrole==='admin'){
    return true;
  }else{
    alert('Access denied. Admins only.');
    return false;
  }
};
