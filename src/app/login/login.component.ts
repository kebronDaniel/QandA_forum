import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    'username': new FormControl('', Validators.required),
    'password' : new FormControl('', Validators.required)
  })

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  login(){
    let value =  this.form.value;
    console.log(value)
  }
}
