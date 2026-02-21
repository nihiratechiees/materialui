import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { usermodel } from '../Model/usermodel';

@Component({
  selector: 'app-register-tdf',
  imports: [MatCardModule,FormsModule,MatFormFieldModule,MatInputModule,
    MatCheckboxModule,MatButtonModule
  ],
  templateUrl: './register-tdf.html',
  styleUrl: './register-tdf.css',
})
export class RegisterTDF {
  title='User Registration Form'
  userform: usermodel={
    firstname:'',
    lastname:'',  
    email:'',
    password:'',
    isconfirm:false
  }

  Login(){

  }

  save(form:NgForm) {
    // if (this._form.valid) {
    //   let _data: associateModel = {
    //     id: this._form.value.id as number,
    //     name: this._form.value.name as string,
    //     address: this._form.value.address as string,
    //     creditlimit: this._form.value.cl as number,
    //     status: this._form.value.status as boolean
    //   }
    //   if (this.isadd) {
    //     this.service.Create(_data).subscribe(item => {
    //       alert('Saved.')
    //       this.close();
    //     })
    //   } else {
    //     _data.id=this._form.getRawValue().id;
    //     this.service.Update(_data).subscribe(item => {
    //       alert('Upated.')
    //       this.close();
    //     })
    //   }

    // }
  }



}
