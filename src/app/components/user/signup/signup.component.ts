import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { User } from './../../../models/userdata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  responceMessage :String;
  showLoginbt = false;

  private url = "http://localhost:3000/signup";
  newUser: User;
  constructor(private http: Http,
    private router: Router) { }

  ngOnInit() {
    this.newUser= new User(null, null, null);
  }

  signUpButton(){
    
    console.log(this.url);
    console.log("bhaatat");
    return this.http.post(this.url, this.newUser).subscribe(
      // res => this.router.navigate(['/user/signin'])
      data => { this.showLoginbt = true; this.responceMessage = "Signup Success, please Login to continue";},
      error => this.responceMessage = error.json().message
      // data => console.log("data"),
      // err => console.log(err)

    );
  }

  signinButton(){
    console.log("bbharat navigate");
    this.router.navigate(['/user/signin']);
  }
}
