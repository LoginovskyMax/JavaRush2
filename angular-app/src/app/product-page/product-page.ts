import { Component, inject } from '@angular/core';
import { Product } from '../services/product';
import { ProductType } from '../types/products';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Basket } from '../services/basket';

@Component({
  selector: 'app-product-page',
  imports: [AsyncPipe],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss',
})
export class ProductPage {
  productService = inject(Product)
  baskerService = inject(Basket)
  product$: Observable<ProductType> | null = null;
  private route = inject(ActivatedRoute);   
  id:string | null = null

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')

    this.product$ = this.productService.getOneProducts(this.id || '')
  }
}
