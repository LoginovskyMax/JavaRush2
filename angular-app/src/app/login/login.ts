import { Component } from '@angular/core';
import { UserAuth } from '../services/user-auth';
import { AuthSignalService } from '../services/auth-signal-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
    isAuth = false

  constructor(private authService:UserAuth, private signalUserSevice:AuthSignalService){
    this.isAuth = this.authService.isAuth
  }

  authFunc(){
    console.log('Зарегистрировался');
    this.authService.logIn()
    this.authService.setUserData({
      id: 1,
      name: 'Alice',
      email: 'some@mail.com'
    })
    this.isAuth = this.authService.isAuth

    this.signalUserSevice.setUserData(
      {
      id: 1,
      name: 'Alice',
      email: 'some@mail.com'
    }
    )
  }
}
