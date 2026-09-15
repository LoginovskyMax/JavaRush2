import { Component, inject } from '@angular/core';
import { Product } from '../services/product';
import { ProductType } from '../types/products';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-home-page',
  imports: [
    AsyncPipe,
    ProductCard
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  productService = inject(Product)
  products$: Observable<ProductType[]> | null = null;

  ngOnInit(){
    this.products$ = this.productService.getProducts()
  }
}
