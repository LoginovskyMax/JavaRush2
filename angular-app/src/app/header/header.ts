import { Component } from '@angular/core';
import { UserAuth } from '../services/user-auth';
import { UserData } from '../user-data/user-data';
import { AuthSignalService } from '../services/auth-signal-service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [UserData, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
