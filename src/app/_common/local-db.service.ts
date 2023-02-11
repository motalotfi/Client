import { Injectable } from '@angular/core';


export const RoleMap = new Map([

])

@Injectable({
  providedIn: 'root'
})
export class LocalDBService {


  constructor(
  ) { }

  checkUserType() {
    // let secret = localStorage.getItem('secret');
    // return RoleMap.get(secret) || -1;
  }

  checkUserLogin() {
    // let secret = localStorage.getItem('secret');
    let token = localStorage.getItem('token');
    // if (secret && token) {
    if (token) {
      return true;
    }
    return false
  }


}
