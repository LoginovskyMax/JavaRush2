import { Component, inject } from '@angular/core';
import { Basket } from '../services/basket';
import { BasketProductType, ProductType } from '../types/products';
import { BasketProduct } from '../basket-product/basket-product';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-basket-page',
  imports: [BasketProduct, AsyncPipe],
  templateUrl: './basket-page.html',
  styleUrl: './basket-page.scss',
})
export class BasketPage {
   baskerService = inject(Basket)

   plusProduct(id:string){
    this.baskerService.plusProduct(id)
   }

   minusProduct(id:string){
      this.baskerService.minusProduct(id)
   }

   removeProduct(id:string){
      this.baskerService.removeProduct(id)
   }
}
