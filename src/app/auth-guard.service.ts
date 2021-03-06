import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router : Router, private authservice : AuthService) { }

  canActivate(){
    if (this.authservice.isLoggedIn()) return true;

    this.router.navigate['/login'];
    return false

  }

}
