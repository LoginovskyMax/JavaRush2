import { Component } from '@angular/core';
import { UserData } from '../user-data/user-data';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [UserData, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 links = [
  {
    name: 'Products',
    path: '/'
  },
    {
    name: 'Pain Guides',
    path: '/guides'
  },
      {
    name: 'Community',
    path: '/community'
  },
        {
    name: 'Resources',
    path: '/resources'
  },
          {
    name: 'Basket',
    path: '/basket'
  }
]
}
