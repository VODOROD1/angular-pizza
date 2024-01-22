import { Component } from '@angular/core';
import { selectCart } from '../../ngrx/cart/selectors';
import { Store, select } from '@ngrx/store';
import { CartEmptyComponent } from './cart-empty/cart-empty.component';
import { Observable } from 'rxjs';
import { CartState, CountState } from '../../ngrx/interfaces';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartEmptyComponent,CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(private store$: Store<CountState>) {
    this.cartState$
    .subscribe(cartState => {
      this.totalCount = cartState.items.reduce((sum: number, item: any) => sum + item.count, 0);
      this.totalPrice = cartState.totalPrice;
    })
  }

  totalPrice: number = 0;
  totalCount: number = 0;
  // const dispatch = useDispatch();
  public cartState$: Observable<CartState> = this.store$.pipe(select(selectCart))

  onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      let clearAction = {type: 'CLEAR_ITEMS'}
      this.store$.dispatch(clearAction);
    }
  };

  // @ts-ignore
  // if (this.cartState.totalPrice) {

  // }
  // if (!this.cartState.totalPrice) {
  //   return <CartEmpty />;
  // }
}
