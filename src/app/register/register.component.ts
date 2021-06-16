import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  newUser:any[];

  constructor(private service : AuthService, private router:Router) { }

  ngOnInit() {
  }

  form = new FormGroup({
    'username': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'password' : new FormControl('', Validators.required)
  })

  get username(){
    return this.form.get('username');
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }


  register(){
    let value = this.form.value;
    console.log(value);
    this.service.newUser(value)
      .subscribe(
        User => {
        this.newUser = User
      }, error => {
        alert('Un expected Error Occured');
        console.log(error);
      }
      );
      this.router.navigate(['login']);
    // To do: being able to redirect to the home page.
  }

}
