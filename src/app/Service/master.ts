import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {

  IsloggedIn(): boolean {
    const username = localStorage.getItem('username');
    return !!username;
  }
  userrole='user';
  
}
