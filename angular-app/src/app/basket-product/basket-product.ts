import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasketProductType } from '../types/products';

@Component({
  selector: 'app-basket-product',
  imports: [],
  templateUrl: './basket-product.html',
  styleUrl: './basket-product.scss',
})
export class BasketProduct {
  @Input() product:BasketProductType| null = null

  @Output() minus = new EventEmitter<string>()
  @Output() plus = new EventEmitter<string>()
  @Output() remove = new EventEmitter<string>()

  plusProduct(){
    this.plus.emit(this.product?.id)
  }

  minusProduct(){
    this.minus.emit(this.product?.id)
  }

  removeProduct(){
    this.remove.emit(this.product?.id)
  }

}
