import { Component } from '@angular/core';
import { UserAuth } from '../services/user-auth';
import { UserData } from '../user-data/user-data';
import { AuthSignalService } from '../services/auth-signal-service';

@Component({
  selector: 'app-header',
  imports: [UserData],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
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
