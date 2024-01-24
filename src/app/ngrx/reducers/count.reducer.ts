import { IState } from '../interfaces';
import { CountActions, countActionsType } from './count.actions';
import { initialStateCommon } from '../initial-state';

export const countNode = 'countState';

const initialState: IState = initialStateCommon;

export const countReducer = (state = initialState, action: CountActions) => {
  switch (action.type) {
    case countActionsType.increase: {
      debugger
      let newState = structuredClone(state);
      newState.countState.count++;
      return newState;
    }
    case countActionsType.decrease: {
      debugger
      let newState = structuredClone(state);
      newState.countState.count--;
      return newState;
    }
    case countActionsType.clear: {
      debugger
      let newState = structuredClone(state);
      newState.countState.count = 0;
      return newState;
    }
    case countActionsType.updatedAt: {
      let newState = structuredClone(state);
      newState.cartState.updatedAt = action.payload.updatedAt;
      return newState;
    }
    default:
      return state;
  }
}
