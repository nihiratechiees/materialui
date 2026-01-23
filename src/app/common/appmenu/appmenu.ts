import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appmenu',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule,
    MatSidenavModule,RouterOutlet,MatListModule,RouterLink
  ],
  templateUrl: './appmenu.html',
  styleUrl: './appmenu.css',
})
export class Appmenu {
  constructor(private router: Router) {

  }
  logout() {
    localStorage.removeItem('username');
    alert('You have been logged out.');
    this.router.navigate(['/login']);
  }

}
