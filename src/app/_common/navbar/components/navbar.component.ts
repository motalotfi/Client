import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAdmin;
  isLogin;
  UserName;
  constructor(private router: Router) { }

  ngOnInit() {
    this.UserName = localStorage.getItem('UserName');
    this.isAdmin = localStorage.getItem('RoleType') == "Operator" ? false : true;
    if (localStorage.getItem('RoleType')) {
      this.isLogin = true;
    }
    else { this.isLogin = false }
    if (!this.isLogin) {
      this.router.navigate(['/'])
    }

  }
  logout() {
    localStorage.clear();
    location.reload()
    this.router.navigate(['/'])

  }
}
