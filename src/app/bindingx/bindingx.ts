import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindingx',
  imports: [FormsModule],
  templateUrl: './bindingx.html',
  styleUrl: './bindingx.css',
})
export class Bindingx {

  channelname='Nihira Techiees';
  ischecked=false;
  imagepath='https://logo.svgcdn.com/devicon/angular-original.png';
  coursename='Angular';

  Click(){
    this.ischecked=!this.ischecked;
  }
  keyup(){
   // alert('Key up event triggered');
  }
  change(){
    alert('Change event triggered');
  }

}
