import { Component, Input } from '@angular/core';
import { CartItem } from '../../../ngrx/cart/types';
import { Store } from '@ngrx/store';
import { IState } from '../../../ngrx/interfaces';
import { CartAddIncreaseItemAction, CartDecreaseItemAction, CartRemoveItemAction } from '../../../ngrx/reducers/cart.actions';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  constructor(private store$: Store<IState>) {}

  @Input() data: CartItem;

  onClickPlus()  {
    this.store$.dispatch(new CartAddIncreaseItemAction({
      ...this.data
    } as CartItem));
  };

  onClickMinus() {
    this.store$.dispatch(new CartDecreaseItemAction({
      id: this.data.id
    }));
  };

  onClickRemove() {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
      this.store$.dispatch(new CartRemoveItemAction({
        id: this.data.id
      }));
    }
  };
}
