import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketProduct } from './basket-product';

describe('BasketProduct', () => {
  let component: BasketProduct;
  let fixture: ComponentFixture<BasketProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(BasketProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
