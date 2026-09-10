import { Component } from '@angular/core';
import { User } from '../user/user';
import { UsersList } from '../users-list/users-list';
import { BookingForm } from '../booking-form/booking-form';

@Component({
  selector: 'app-home-page',
  imports: [
    User,
    UsersList,
    BookingForm,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
