import { CanDeactivateFn } from '@angular/router';
import { Login } from '../login/login';

export const authdGuard: CanDeactivateFn<Login> = (component, currentRoute, currentState, nextState) => {
  return component.Cannavigate();
};
