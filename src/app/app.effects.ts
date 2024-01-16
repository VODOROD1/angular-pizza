import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { CountUpdatedAtAction, countActionsType } from './ngrx/reducers/count.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  countEffect$ = createEffect(() => this.actions$.pipe(
      ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clear),
      map(() => {
        return new CountUpdatedAtAction({
          updatedAt: Date.now()
        });
      })
    )
  )
}
