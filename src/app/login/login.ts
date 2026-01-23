import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../Service/master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router, private service: Master) { }

  username: string = '';
  login() {
    localStorage.setItem('username', this.username);
    this.router.navigate(['/']);
    // Implement login logic here
  }

  Cannavigate() {
    if (!this.service.IsloggedIn()) {
      if (this.username !== '') {
        if (confirm('Are you sure navigate away?')) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
    return true;

  }

}
