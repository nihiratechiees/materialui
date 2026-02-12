import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';

@Component({
  selector: 'app-datatransfer',
  imports: [FormsModule, Child],
  templateUrl: './datatransfer.html',
  styleUrl: './datatransfer.css',
})
export class Datatransfer {

  inputheight = 0;
  inputwidth = 0;

  receivedname = '';

  receiveChannelName(channelName: string) {
    this.receivedname = channelName;
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }


}
