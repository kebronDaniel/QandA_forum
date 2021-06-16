import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private url = "http://localhost:5000/login";
  private addUser = "http://localhost:5000/addUser";

  constructor(private http : Http) { }

  login(credentials){
    return this.http.post(this.url, credentials)
      .map(response => {
        let result = response.json();
        if (result && result.token){
          localStorage.setItem('token', result.token)
          return true
        } 
        return false
      });

  }

  newUser(value){
    return this.http.post(this.addUser,value)
    .map(
      response => response.json()
      // This would map the object from the server or Api to Js iterable object.
    )
    ;
  }

  logout(){
    return localStorage.removeItem('token')
  }

}
