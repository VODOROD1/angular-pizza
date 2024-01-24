import { Component, Input, OnInit } from '@angular/core';
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

export class CartItemComponent implements OnInit {

  constructor(private store$: Store<IState>) {
  }

  ngOnInit(): void {
    let temp = this.props;
    debugger;
  }

  @Input() props: CartItem;

  onClickPlus()  {
    this.store$.dispatch(new CartAddIncreaseItemAction({
      ...this.props
    } as CartItem));
  };

  onClickMinus() {
    this.store$.dispatch(new CartDecreaseItemAction({
      id: this.props.id
    }));
  };

  onClickRemove() {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
      this.store$.dispatch(new CartRemoveItemAction({
        id: this.props.id
      }));
    }
  };
}
