import { Component, input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-error-block',
  imports: [],
  templateUrl: './error-block.html',
  styleUrl: './error-block.scss',
})
export class ErrorBlock {
    inputNode = input<NgModel | null>(null); 
    inputName = input<string>(''); 
}
