import { User } from './../../../models/userdata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser: User;
  constructor() { }

  ngOnInit() {
    this.newUser= new User(null, null, null);
  }

  signUpButton(){
    console.log(this.newUser);
  }
}
