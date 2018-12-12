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

  private url = "http://localhost:3000/signin";
  user: User;
  constructor(private http: Http,
    private router: Router) { }

  ngOnInit() {
    this.user= new User(null, null, null);
  }

  signInButton(){
    console.log(this.url);
    console.log("bhaatat");
    return this.http.post(this.url, this.user).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
