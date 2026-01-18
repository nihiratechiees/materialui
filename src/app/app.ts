import { Component, signal } from '@angular/core';
import { Appmenu } from "./common/appmenu/appmenu";

@Component({
  selector: 'app-root',
  imports: [Appmenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstapp');
}
