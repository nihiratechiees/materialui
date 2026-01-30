import { Component, computed, input, output } from '@angular/core';

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

}
