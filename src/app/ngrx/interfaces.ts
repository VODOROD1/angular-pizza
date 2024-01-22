import { CartItem } from "./cart/types";

export interface IState {
    countState: CountState,
    cartState: CartState
}

export interface CartState {
    items: CartItem[];
    totalPrice: number;
    updatedAt: number;
}

export interface CountState {
    count: number;
    updatedAt: number;
}