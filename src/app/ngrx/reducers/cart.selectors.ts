import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState, IState } from '../interfaces';
import { cartNode } from './cart.reducers';

export const selectCartFeature = createFeatureSelector<IState>(cartNode);

export const selectCart = createSelector(
    selectCartFeature,
    (state: IState): CartState => {
        let cartState = state.cartState;
        return cartState;
    }
);
