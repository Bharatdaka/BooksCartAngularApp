import { UserdataService } from './../../../services/userdata.service';
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

  
  newUser: User;
  constructor(private userService: UserdataService,
    private http: Http,
    private router: Router) { }

  ngOnInit() {
    this.newUser= new User(null, null, null);
  }


  signUpButton(){
    console.log("bhaatat");
    return this.userService.signUp(this.newUser).subscribe(
      data => { this.showLoginbt = true; this.responceMessage = "Signup Success, please Login to continue";},
      error => this.responceMessage = error.json().message
    );
  }

  signinButton(){
    console.log("bbharat navigate");
    this.router.navigate(['/user/signin']);
  }
}
