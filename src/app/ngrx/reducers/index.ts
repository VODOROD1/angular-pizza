import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { countNode, countReducer } from "./count.reducer";
import { environment } from "../../../environment/environment";
import { CartState, CountState } from "../interfaces";
import { cartNode, cartReducer } from "./cart.reducers";

export interface State {
    [countNode]: CountState,
    [cartNode]: CartState
}

export const reducers: ActionReducerMap<State> = {
    // @ts-ignore
    [countNode]: countReducer,
    // @ts-ignore
    [cartNode]: cartReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];