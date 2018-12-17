import { Observable } from 'rxjs';
import { User } from 'src/app/models/userdata';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private url = "http://localhost:3000";
  public isUserLoggedIn : boolean;

  constructor(private http: Http) { 
    console.log("userdAtaService");
    this.isUserLoggedIn = false;
  }
 

  signUp(user: User) : Observable <Response> {
    return this.http.post(this.url+'/signup', user);
  }

  signIn(user: User) : Observable <Response> {
    return this.http.post(this.url+'/signin', user);
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn() : boolean {
    return this.isUserLoggedIn;
  }
  setUserLoggedOut() {
    this.isUserLoggedIn = false;
  }

}
