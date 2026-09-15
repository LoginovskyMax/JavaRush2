import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from '../types/products';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() product: ProductType | null = null

  private router = inject(Router)

  goToProductPage() {
    this.router.navigate(['/product', this.product?.id])
  }
}
