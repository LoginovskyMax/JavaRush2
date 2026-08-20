import { Component } from '@angular/core';
import { User } from "../user/user";
import { UserItem } from "../user-item/user-item";
import { UserAuth } from '../services/user-auth';
import { iUser } from '../types/auth';

interface IUser {
   id: number;
   name: string
}

@Component({
  selector: 'app-users-list',
  imports: [UserItem],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
    users:IUser[] = [
    { id: 1, name: 'Дмитрий' },
    { id: 2, name: 'Алиса' },
    { id: 3, name: 'Иван' },
  ];

  currentUser:iUser | null = null

  isAuth = false

  constructor(private authService:UserAuth){}

  getUser(){
     this.currentUser = this.authService.getUserData()
     console.log(this.currentUser);
  }

  removeUser(id: number){
     console.log(id);
     this.users = this.users.filter(item => item.id !== id)
  }
}
