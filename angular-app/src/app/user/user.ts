import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  userName = 'Alice'
  otherName = 'Nick'
  age = 18
  carSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Y0m1fKsUMyMtYTLHA2DjhdXfM2biKgzzTe0iy4cHEw&s'
  status = 'active'
  isImportant = true
  fontSize = 20

  getTitle(){
    return `Ho from user component my name is ${this.userName}`
  }

  clickHandler() {
   console.log('click');
  }

  onInput(event: Event) {
    // Получаем новое значение из input и обновляем свойство компонента
    this.userName = (event.target as HTMLInputElement).value;
  }
}
