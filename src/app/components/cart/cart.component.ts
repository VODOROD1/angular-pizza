import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CartEmptyComponent } from './cart-empty/cart-empty.component';
import { Observable } from 'rxjs';
import { CartState, IState } from '../../ngrx/interfaces';
import { CartItemComponent } from './cart-item/cart-item.component';
import { selectCart } from '../../ngrx/reducers/cart.selectors';
import { CartClearItemsAction } from '../../ngrx/reducers/cart.actions';
import { CartItem } from '../../ngrx/cart/types';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartEmptyComponent,CartItemComponent,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent implements OnInit {
  constructor(private store$: Store<IState>) {
  }

  localState: {
    totalPrice: number,
    totalCount: number,
    items: CartItem[]
  } = {
    totalPrice: 0,
    totalCount: 0,
    items: []
  }
  
  public cartState$: Observable<CartState> = this.store$.pipe(select(selectCart));
  // public count$: Observable<number> = this.store$.pipe(select(selectCount));

  ngOnInit(): void {
    if(this.cartState$) {
      this.cartState$.subscribe(cartState => {
        debugger
        this.localState.totalCount = cartState.items.reduce((sum: number, item: any) => sum + item.count, 0);
        this.localState.totalPrice = cartState.totalPrice;
        this.localState.items.length = 0;
        this.localState.items.push(...cartState.items);
        debugger;
        // this.items = cartState.items;
      })
    }
  }

  onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      this.store$.dispatch(new CartClearItemsAction());
    }
  };
}
