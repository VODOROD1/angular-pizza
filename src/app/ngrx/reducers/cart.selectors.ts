import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState, IState } from '../interfaces';
import { cartNode } from './cart.reducers';

export const selectCartFeature = createFeatureSelector<IState>(cartNode);

export const selectCart = createSelector(
    selectCartFeature,
    (state: IState): CartState => {
        debugger
        let cartState = state.cartState;
        debugger
        return cartState;
    }
);
