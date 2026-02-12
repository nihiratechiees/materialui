import { Component, computed, input, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  height = input.required<number>({ alias: 'H' })
  width = input<number>(0, { alias: 'W' })
  chName = output<string>({ alias: 'CN' })

  area = computed(() => this.height() * this.width())

  sendData(channelName: string) {
    //
    this.chName.emit(channelName);
  }

  // ngOnChanges(change:SimpleChanges) {
  //   console.log('ngOnChanges called');
  //   if(change['height']) {
  //     console.log('Current value is : '+change['height'].currentValue);
  //   console.log('Previous value is : '+change['height'].previousValue);
  //   console.log('First change is : '+change['height'].firstChange);
  //   }
   
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck called');
  // }

}
