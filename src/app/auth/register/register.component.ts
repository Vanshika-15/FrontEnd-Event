import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  constructor() { }
  register:any;
  regisData(data:NgForm){
this.register=data;
console.log(data);
  }

  ngOnInit() {}

}
