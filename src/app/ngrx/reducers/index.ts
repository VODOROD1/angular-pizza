import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { CountState, countReducer } from "./count.reducer";
import { environment } from "../../../environment/environment";

export interface State {
    count: CountState
}

export const reducers: ActionReducerMap<State> = {
    // @ts-ignore
    count: countReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];