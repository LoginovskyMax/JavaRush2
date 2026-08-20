import { Injectable } from '@angular/core';
import { iUser } from '../types/auth';

@Injectable({
  providedIn: 'root',
})
export class UserAuth {
  isAuth = false
  private userData:iUser | null = null

  logIn(){
    this.isAuth = true
  }

  logOut(){
    this.isAuth = false
    this.userData = null
  }

  setUserData(data:iUser){
    this.userData = data
  }

  getUserData(){
    return this.userData
  }
}
