import { Component, inject } from '@angular/core';
import { UserAuth } from '../services/user-auth';
import { iUser } from '../types/auth';
import { AuthSignalService } from '../services/auth-signal-service';

@Component({
  selector: 'app-user-data',
  imports: [],
  templateUrl: './user-data.html',
  styleUrl: './user-data.scss',
})
export class UserData {
  authService = inject(UserAuth)

  constructor(public authSignalService:AuthSignalService){}

}
