import { Routes } from '@angular/router';
import { RickPage } from './rick-page/rick-page';
import { HomePage } from './home-page/home-page';
import { CharacterPage } from './character-page/character-page';
import { User } from './user/user';
import { authGuard } from './services/auth.guard';
import { ProductPage } from './product-page/product-page';


export const routes: Routes = [
  // Если URL пустой, показать HomeComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  // Если URL - /about, показать AboutComponent
  { path: 'rick', component: RickPage },
  {path: 'product/:id', loadComponent: () => import('./product-page/product-page').then(bundle => bundle.ProductPage)}, 
  {path: 'login', loadComponent: () => import('./login/login').then(bundle => bundle.Login)},
  {path: 'character/:id', component: CharacterPage , canActivate: [authGuard]},
  {path: '**', component: User}
];
