import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecyclex',
  imports: [],
  templateUrl: './lifecyclex.html',
  styleUrl: './lifecyclex.css',
})
export class Lifecyclex{

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
  

}
