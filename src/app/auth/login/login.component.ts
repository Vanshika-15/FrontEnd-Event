import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {

  constructor() { }
  login:any;
  loginData(data:NgForm){
    this.login=data.form.value;
    // alert("hello");
    console.log(data.form.value);
  }

}
