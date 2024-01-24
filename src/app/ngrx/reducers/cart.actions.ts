import { Action } from '@ngrx/store';
import { CartItem } from '../cart/types';

export enum cartActionsType {
  addIncrease = '[CART] add and increase',
  decrease = '[CART] decrease',
  removeItem = '[CART] remove item',
  clearItems = '[CART] clear items',
  updatedAt = '[CART] updated at',
}

export class CartAddIncreaseItemAction implements Action {
  readonly type = cartActionsType.addIncrease;

  constructor(public payload: CartItem) {}
}

export class CartDecreaseItemAction implements Action {
  readonly type = cartActionsType.decrease;

  constructor(public payload: {
    id: number;
  }) {}
}

export class CartRemoveItemAction implements Action {
  readonly type = cartActionsType.removeItem;

  constructor(public payload: {
    id: number;
  }) {}
}

export class CartClearItemsAction implements Action {
    readonly type = cartActionsType.clearItems;
}

export class CartUpdatedAtAction implements Action {
  readonly type = cartActionsType.updatedAt;

  constructor(public payload: {
    updatedAt: number;
  }) {
  }
}

export type CartActions = CartAddIncreaseItemAction
  | CartDecreaseItemAction
  | CartRemoveItemAction
  | CartClearItemsAction
  | CartUpdatedAtAction;