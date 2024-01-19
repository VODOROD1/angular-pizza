import { Injectable } from '@angular/core';
import { CartItem } from '../ngrx/cart/types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PizzaBlockService {
  #activeType: number;
  activeTypeSub$: Subject<number> = new Subject<number>();
  #activeSize: number;
  activeSizeSub$: Subject<number> = new Subject<number>();
  cartItems: CartItem[] = [];
  #addedCount: number = this.cartItems.length;
  constructor() {
    this.#addedCount = this.cartItems.length;
  }

  getActiveTypeSub(): Subject<number> {
    return this.activeTypeSub$;
  }

  getActiveSizeSub(): Subject<number> {
    return this.activeSizeSub$;
  }

  set activeType(num: number) {
    debugger
    this.#activeType = num;
    this.activeTypeSub$.next(num);
  }

  get activeType() {
    debugger
    return this.#activeType;
  }

  set activeSize(num: number) {
    this.#activeSize = num;
    this.activeSizeSub$.next(num);
  }

  get activeSize() {
    debugger
    return this.#activeSize;
  }

  set addedCount(num: number) {
    // debugger
    this.#addedCount = num;
    debugger
  }

  get addedCount(): number {
    // debugger
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
