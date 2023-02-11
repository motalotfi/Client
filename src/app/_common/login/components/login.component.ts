import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { SecurityService } from '../../../bit';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { LocalDBService } from '../../local-db.service';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  notifier;

  constructor(
    private service: CommonService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    notifier: NotifierService, private localDBService: LocalDBService) {
    this.notifier = notifier
  }

  ngOnInit() {
    this.checkLogin()

  }



  checkLogin() {
    if (this.localDBService.checkUserLogin()) {
      const url = this.activeRoute.snapshot.queryParams['returnUrl'] || '/add-data';
      this.router.navigate([url]);
    }

  }
  checkBeforeLogin() {


    if (!this.userName) {
      this.notifier.notify('error', 'لطفا  نام کاربری را وارد نمایید');
      return;
    }
    if (!this.password) {
      this.notifier.notify('error', 'لطفا   رمز عبور را وارد نمایید');
      return;
    }


  }

  async login() {
    const model = {
      UserName: this.userName,
      Password: this.password,
      client_id: 'BoomrangWebClient',
      client_secret: 'secret'
    };
    try {

      const loginResult = await SecurityService.loginWithCredentials(model.UserName, model.Password, model.client_id, model.client_secret);
      const customProps = this.decodeLoginRes(loginResult);
      this.afterLogin(customProps, loginResult);
      // this.router.navigate['/add-data'];

    } catch (error: any) {
      this.notifier.notify('error', error.message)
    }
    if (this.localDBService.checkUserLogin()) {
      const url = this.activeRoute.snapshot.queryParams['returnUrl'] || '/add-data';
      this.router.navigate([url]);
    }
  }

  private decodeLoginRes(loginRes: any) {
    let base64Url = loginRes.access_token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  private afterLogin(customProps: any, loginResult: any) {
    // localStorage.setItem('secret', customProps.AuthTypeSecret);
    localStorage.setItem('token', loginResult.access_token);
    localStorage.setItem('UserName', this.userName);
    localStorage.setItem('RoleType', customProps.RoleType)

  }
}
