import { Component } from '@angular/core';
import { User } from "../user/user";
import { UserItem } from "../user-item/user-item";

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

  removeUser(id: number){
     console.log(id);
     this.users = this.users.filter(item => item.id !== id)
  }
}
