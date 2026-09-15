import { Injectable } from '@angular/core';
import { ProductType } from '../types/products';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private url = 'http://localhost:3000/peppers'

   products: ProductType[] = []

   constructor(private http:HttpClient){}

   getProducts():Observable<ProductType[]>{
    return this.http.get<ProductType[]>(this.url).pipe(
      catchError(err => {
        console.log(`Ошибка при загрузке данных с ${this.url}`, err);

        return []
      })
    )
   }

    getOneProducts(id:string):Observable<ProductType>{
      return this.http.get<ProductType>(`${this.url}/${id}`).pipe(
      catchError(err => {
        console.log(`Ошибка при загрузке одного продукта с ${this.url}`, err);

        return []
      })
    )
   }

   setProducts(data:ProductType[]){
    this.products = data
   }
}
