import { Injectable } from '@angular/core';
import { CartItem } from '../ngrx/cart/types';

@Injectable({
  providedIn: 'root'
})

export class PizzaBlockService {
  cartItems: CartItem[] = [];
  #addedCount: number = this.cartItems.length;
  constructor() {
    this.#addedCount = this.cartItems.length;
  }

  set addedCount(num: number) {
    debugger
    this.#addedCount = num;
    debugger
  }

  get addedCount(): number {
    debugger
    return this.#addedCount;
  }

  addItem(item: CartItem) {
    debugger
    this.cartItems.push(item);
    debugger
  }

  getAddedCount(): number {
    debugger
    return this.addedCount;
  }
}
