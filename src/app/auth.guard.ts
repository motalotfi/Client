import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
// import { UtilService } from '@shared/services/util.service';
import { LocalDBService } from '@shared/services/local-db.service';

export function checkRequierd() {
  // let secret = localStorage.getItem('secret');
  let token = localStorage.getItem('token');
  return token
  // return secret && token
}


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private utilService: LocalDBService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!checkRequierd()) {
      this._router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      localStorage.clear();
      return false;
    }
    // if (this.utilService.checkUserType() === -1) {
    //   this._router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    //   localStorage.clear();
    //   return false;
    // }
    return true;
  }
}
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private _router: Router, private utilService: LocalDBService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let Role = localStorage.getItem('RoleType');
    if (!checkRequierd() || Role != "Admin") {
      this._router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      // localStorage.clear();
      return false;
    }

    // if (this.utilService.checkUserType() === -1) {
    //   this._router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    //   localStorage.clear();
    //   return false;
    // }
    return true;
  }

}
@Injectable({
  providedIn: 'root'
})
export class CompanyAuthGuard implements CanActivate {
  constructor(private _router: Router, private utilService: LocalDBService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let Role = localStorage.getItem('RoleType');
    if (!checkRequierd() || Role != "Company") {
      this._router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      // localStorage.clear();
      return false;
    }

    // if (this.utilService.checkUserType() === -1) {
    //   this._router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    //   localStorage.clear();
    //   return false;
    // }
    return true;
  }

}
@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private _router: Router, private utilService: LocalDBService) { }
  checkUserType() {
    let Role = localStorage.getItem('RoleType');
    if (Role != "Technician" && Role != "Internship") {
      return false
    }
    return true
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!checkRequierd() || !this.checkUserType()) {
      this._router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      // localStorage.clear();
      return false;
    }

    // if (this.utilService.checkUserType() === -1) {
    //   this._router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    //   localStorage.clear();
    //   return false;
    // }
    return true;
  }
}
