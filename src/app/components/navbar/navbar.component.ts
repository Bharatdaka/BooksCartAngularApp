import { UserdataService } from './../../services/userdata.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authenticated = false;
  constructor(private userService: UserdataService,
              private router:Router) { }

  ngOnInit() {
    this.authenticated = this.userService.getUserLoggedIn();
    // console.log("bharatsda");
    if (localStorage.getItem('token')) {
        this.userService.setUserLoggedIn();
        this.authenticated = true;
    }
  }

  logoutButton(){
    localStorage.removeItem('token');
    this.userService.setUserLoggedOut();
    this.router.navigate(['/user/signin']);
  }

}
