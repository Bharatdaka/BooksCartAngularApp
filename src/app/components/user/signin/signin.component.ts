import { UserdataService } from './../../../services/userdata.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userdata';
import { Http } from '@angular/http';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // private url = "http://localhost:3000/signin";
  user: User;
  responceMessage = '';
  errorLogin = false;
  constructor(private userService: UserdataService,
    // private http: Http,
    private router: Router) { }

  ngOnInit() {
    console.log("sognincomponent init");
    this.user= new User(null, null, null);
  }

  signInButton(){
    // console.log(this.url);
    // console.log("bhaatat");
    return this.userService.signIn(this.user).subscribe(
      data => { console.log(data); 
                this.userService.setUserLoggedIn();
                localStorage.setItem('token', data.json());
                this.router.navigate(['/home/']); 
              },
      error => {this.responceMessage = error.json().message;
                this.errorLogin = true;}
    );
  }


}
