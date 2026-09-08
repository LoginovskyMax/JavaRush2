import { Component, inject } from '@angular/core';
import { RickApi } from '../services/rick-api';
import { Subscription } from 'rxjs';
import { IRickApi } from '../types/auth';

@Component({
  selector: 'app-rick-page',
  imports: [],
  templateUrl: './rick-page.html',
  styleUrl: './rick-page.scss',
})
export class RickPage {
  rickService = inject(RickApi)
  data: IRickApi | null = null;
  isLoading = true;
  error: string | null = null;
  private usersSub: Subscription | null = null;

  ngOnInit(){
    this.usersSub = this.rickService.fetchRickApi().subscribe({
      next: (data) => {
        this.data = data;
        this.isLoading = false;
        console.log('Получены пользователи');
      },
      error: (err) => {
        this.error = 'Не удалось загрузить данные';
        this.isLoading = false;
        console.error('Произошла ошибка:', err);
      },
      complete: () => {
        console.log('Загрузка данных завершена.');
      }
    })
  }
  ngOnDestroy() {
    // Отписка крайне важна для избежания утечек памяти
    if (this.usersSub) {
      this.usersSub.unsubscribe();
    }
  }
}
