import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { initialStateCommon } from "../initial-state";
import { IState } from "../interfaces";
import { CartActions, cartActionsType } from "./cart.actions";
export const cartNode = 'cartState';

const initialState: IState = initialStateCommon;

export const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case cartActionsType.addIncrease: {
        debugger;
        let newState = structuredClone(state);
        const findItem = state.cartState.items.find((obj) => obj.id === action.payload.id);
        if (findItem) {
            debugger
            const indexFindedItem = state.cartState.items.indexOf(findItem);
            debugger
            newState.cartState.items[indexFindedItem].count++;
        } else {
            newState.cartState.items.push({
                ...action.payload,
                count: 1,
            });
        }

        newState.cartState.totalPrice = calcTotalPrice(newState.cartState.items);
        return newState;
    }
    case cartActionsType.decrease: {
        debugger
        let newState = structuredClone(state);
        const findItem = state.cartState.items.find((obj) => obj.id === action.payload.id);
        debugger
        if (findItem) {
            const indexFindedItem = state.cartState.items.indexOf(findItem);
            newState.cartState.items[indexFindedItem].count--;
        }
        debugger
        newState.cartState.totalPrice = calcTotalPrice(newState.cartState.items);
        debugger
        return newState;
    }
    case cartActionsType.removeItem: {
        let newState = structuredClone(state);
        newState.cartState.items = state.cartState.items.filter((obj) => obj.id !== action.payload.id);
        newState.cartState.totalPrice = calcTotalPrice(newState.cartState.items);
        return newState;
    }
    case cartActionsType.clearItems: {
        let newState = structuredClone(state);
        newState.cartState.items = [];
        newState.cartState.totalPrice = 0;
        return newState;
    }
    case cartActionsType.updatedAt: {
        let newState = structuredClone(state);
        newState.cartState.updatedAt = action.payload.updatedAt;
        return newState;
    }
    default:
        return state;
  }
}
