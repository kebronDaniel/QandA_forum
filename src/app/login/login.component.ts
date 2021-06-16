import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:boolean;

  constructor(private router: Router, private authservice : AuthService) { }

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
    let credentials =  this.form.value;
    console.log(credentials)
    this.authservice.login(credentials)
      .subscribe( result => {
        if (result){
          this.router.navigate(['/'])
        }
        else 
          this.invalidLogin = true;
      });
  }

}
