import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { SecurityService } from 'src/app/bit';
import { LocalDBService } from '../local-db.service';
import { CommonService } from '../common.service';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userModel: any = {};
  notifier;
  isRegister;
  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private localDbService: LocalDBService,
    notifier: NotifierService,
    private coreService: CommonService
  ) { this.notifier = notifier }

  ngOnInit() {
    // this.checkLogin();
  }
  async SingUp() {

    if (this.userModel['gender'] == 0) {
      this.userModel['gender'] = BoomrangEnum.Gender.Female
    }
    else {
      this.userModel['gender'] = BoomrangEnum.Gender.Male
    }



    let reg = new RegExp('^[0-9]+$');
    if (!this.userModel.phoneNo || this.userModel.phoneNo.length != 11 || !reg.test(this.userModel.phoneNo)) {
      this.notifier.notify('error', "لطفا شماره تلفن همراه خود را به درستی وارد نمایید");
      return
    }

    if (!this.userModel.userName) {
      this.notifier.notify('error', 'لطفا نام کاربری خود را وارد نمایید')
    }
    if (!this.userModel.password) {
      this.notifier.notify('error', 'لطفا رمز ورود خود را وارد نمایید')
    } else {
      this.userModel['hashedPassword'] = this.userModel.password

    }
    if (this.userModel.password != this.userModel.repeatPassword) {
      this.notifier.notify('error', "رمز عبور و تکرار رمز عبور برابر نمی باشد")
      return
    };
    try {
      console.log(this.userModel.userName, this.userModel['hashedPassword'], this.userModel.phoneNo, this.userModel.firstName, this.userModel.lastName,
        this.userModel.gender, BoomrangEnum.RoleType.Operator);
      await this.coreService.signupUser(this.userModel.userName, this.userModel['hashedPassword'], this.userModel.phoneNo, this.userModel.firstName, this.userModel.lastName,
        this.userModel.gender, BoomrangEnum.RoleType.Operator);
      this.notifier.notify('success', 'اطلاعات با موفقیت ذخیره شد');
      this.userModel = []
      this.isRegister = true


    } catch (error: any) {
      this.notifier.notify('error', error.message)

      this.isRegister = false

    }
    if (this.isRegister) {
      this.login(this.userModel.userName, this.userModel['hashedPassword'])

    }
  }

  checkLogin() {
    if (this.localDbService.checkUserLogin()) {
      const url = this.activeRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
      this.router.navigate([url]);
    }
  }

  async login(UserName: any, hashedPassword: any) {
    const model = {
      UserName: UserName,
      Password: hashedPassword,
      client_id: 'BoomrangWebClient',
      client_secret: 'secret'
    };
    try {

      const loginResult = await SecurityService.loginWithCredentials(model.UserName, model.Password, model.client_id, model.client_secret);
      const customProps = this.decodeLoginRes(loginResult);
      this.afterLogin(customProps, loginResult);
    } catch (error) {

    }
  }

  decodeLoginRes(loginResult: any) {
    let base64Url = loginResult.access_token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  afterLogin(customProps: any, loginResult: any) {
    // localStorage.setItem('secret', customProps.AuthTypeSecret);

    localStorage.setItem('token', loginResult.access_token);
    localStorage.setItem('RoleType', customProps.RoleType)


    // const myurl = this.activeRoute.snapshot.queryParams['returnUrl'] || '';

    // if (myurl === '') {
    //   this.router.navigate(['dashboard']);
    // }
    // else {
    //   this.router.navigate([myurl]);

    // }
  }
}
