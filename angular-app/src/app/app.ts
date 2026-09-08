import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Header } from "./header/header";
import { UsersList } from './users-list/users-list';
import { BookingForm } from "./booking-form/booking-form";
import { RickPage } from './rick-page/rick-page';
import { RickPipe } from './rick-pipe/rick-pipe';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    User,
    Header,
    UsersList,
    BookingForm,
    RickPage,
    RickPipe
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
