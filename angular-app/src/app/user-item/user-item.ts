import { Component, EventEmitter, input, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.scss',
})
export class UserItem {
    // user = input<{ name: string, id: number } | null>(null); 
    @Input() user: { name: string; id: number; } | undefined;
    @Output() userDeleted = new EventEmitter<number>();

    timerId = 0

    ngOnInit() {
        // 2. ngOnInit: компонент готов к работе.
        // Идеальное место для запроса данных или сложной инициализации.
        this.timerId = setInterval(() => console.log('Таймер работает...'), 1000);
    }

    ngOnDestroy() {
        // 3. ngOnDestroy: компонент будет удален.
        // Обязательно очищаем все "долгоживущие" процессы.
        clearInterval(this.timerId);
    }

    onDelete() {
       // При клике "испускаем" событие и передаем в него id пользователя
      this.userDeleted.emit(this.user?.id);
  }
}
