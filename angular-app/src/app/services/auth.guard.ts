import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { UserAuth } from './user-auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserAuth); // Используем DI через inject()
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // Пользователь авторизован, разрешаем доступ
  } else {
    // Пользователь не авторизован, перенаправляем на страницу входа
    return router.createUrlTree(['/login']);
  }
};