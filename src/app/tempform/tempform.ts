import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  address:string;
}

@Component({
  selector: 'app-tempform',
  imports: [FormsModule, JsonPipe],
  templateUrl: './tempform.html',
  styleUrl: './tempform.css',
})


export class Tempform {

  userobj: User = {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    address:''
  }

  OnSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }

  }

}
