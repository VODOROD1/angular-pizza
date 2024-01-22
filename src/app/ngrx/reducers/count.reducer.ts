import { IState } from '../interfaces';
import { CountActions, countActionsType } from './count.actions';
import { initialStateCommon } from '../initial-state';

export const countNode = 'countState';

const initialState: IState = initialStateCommon;

export const countReducer = (state = initialState, action: CountActions) => {
  switch (action.type) {
    case countActionsType.increase:
      return {
        ...state,
        countState: {...state.countState, count: state.countState.count + 1}
      };
    case countActionsType.decrease:
      return {
        ...state,
        countState: {...state.countState, count: state.countState.count - 1}
      };
    case countActionsType.clear:
      return {
        ...state,
        countState: {...state.countState, count: 0}
      };
    case countActionsType.updatedAt:
      return {
        ...state,
        countState: {...state.countState, updatedAt: action.payload.updatedAt}
      };
    default:
      return state;
  }
}
