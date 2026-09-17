import { Injectable } from '@angular/core';
import { BasketProductType, ProductType } from '../types/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Basket {
  basket = new BehaviorSubject<BasketProductType[]>([])

  plusProduct(id:string) {
      const index = this.basket.getValue().findIndex(item => item.id === id)

      let newArr = this.basket.getValue()
      newArr[index].amount++

      const totalPrice = newArr[index].amount * Number(newArr[index].price)

      newArr[index].totalPrice = totalPrice

      this.basket.next(newArr)
  }

  addToBasket(product:ProductType){
    const index = this.basket.getValue().findIndex(item => item.id === product.id)

    if(index !== -1){
      this.plusProduct(this.basket.getValue()[index].id)
    } else {
      const basketProduct:BasketProductType = {
        ...product,
        amount: 1,
        totalPrice: Number(product.price)
      }

      const newArr = this.basket.getValue()
      newArr.push(basketProduct)
      
      this.basket.next(newArr)
    }
  }

  removeProduct(id:string) {
      let newArr = this.basket.getValue()

      newArr = newArr.filter(item => id !== item.id)

      this.basket.next(newArr)
  }

  minusProduct(id:string) {
    const index = this.basket.getValue().findIndex(item => item.id === id)
    
    if (this.basket.getValue()[index].amount === 1) {
       this.removeProduct(this.basket.getValue()[index].id)
    } else {
      let newArr = this.basket.getValue()
      newArr[index].amount--

      const totalPrice = newArr[index].amount * Number(newArr[index].price)

      newArr[index].totalPrice = totalPrice

      this.basket.next(newArr)
    }
  }
}
