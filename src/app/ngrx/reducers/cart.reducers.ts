import { initialStateCommon } from "../initial-state";
import { IState } from "../interfaces";
import { CartActions, cartActionsType } from "./cart.actions";

export const cartNode = 'cart';

const initialState: IState = initialStateCommon;

export const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case cartActionsType.addIncrease: {
        const findItem = state.cartState.items.find((obj) => obj.id === action.payload.id);
        if (findItem) {
            findItem.count++;
        } else {
            state.cartState.items.push({
            ...action.payload,
            count: 1,
            });
        }

        state.cartState.totalPrice = calcTotalPrice(state.items);
        return {
            ...state,
            cartState: {...state.cartState}
        };
    }
    case cartActionsType.decrease: {
        return {
            ...state,
            cartState: {...state.cartState}
        };
    }
    case cartActionsType.removeItem: {
        return {
            ...state,
            cartState: {...state.cartState, cart: 0}
        };
    }
    case cartActionsType.clearItems: {
        return {
            ...state,
            cartState: {...state.cartState, cart: 0}
        };
    }
    case cartActionsType.updatedAt: {
        return {
            ...state,
            cartState: {...state.cartState, updatedAt: action.payload.updatedAt}
        };
    }
    default:
        return state;
  }
}