import { createFeatureSelector, createSelector } from '@ngrx/store';
import { countNode } from './count.reducer';
import { IState } from '../interfaces';

export const selectCountFeature = createFeatureSelector<IState>(countNode);

export const selectCount = createSelector(
  selectCountFeature,
  (state: IState): number => {
    return state.countState.count
  }
);

export const selectUpdatedAt = createSelector(
  selectCountFeature,
  (state: IState): number => state.countState.updatedAt
);
