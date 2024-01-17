import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { CountState, countNode, countReducer } from "./count.reducer";
import { environment } from "../../../environment/environment";

export interface State {
    [countNode]: CountState
}

export const reducers: ActionReducerMap<State> = {
    // @ts-ignore
    [countNode]: countReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];