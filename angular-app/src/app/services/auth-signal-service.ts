import { Injectable, signal } from '@angular/core';
import { iUser } from '../types/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthSignalService {
    isAuth = signal(false)
    userData = signal<iUser | null>(null)
  
    logIn(){
      this.isAuth.set(true)
    }
  
    logOut(){
       this.isAuth.set(true)
      this.userData.set(null)
    }
  
    setUserData(data:iUser){
      this.userData.set(data)
    }
}
