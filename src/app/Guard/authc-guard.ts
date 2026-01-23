import { CanActivateChildFn } from '@angular/router';

export const authcGuard: CanActivateChildFn = (childRoute, state) => {
  //
  return false;
};
