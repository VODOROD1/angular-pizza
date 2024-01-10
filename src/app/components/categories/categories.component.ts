import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
<<<<<<< HEAD
import {TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';
import { TuiAppearance } from '@taiga-ui/core';
import { TuiFilterModule } from '@taiga-ui/kit';
import { BehaviorSubject, Observable, map } from 'rxjs';
=======
import {TuiBooleanHandler} from '@taiga-ui/cdk';
import { TuiFilterModule } from '@taiga-ui/kit';
>>>>>>> 849c4224571ada0f399fd35ae6c38a83dd47d20d

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    TuiFilterModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CategoriesComponent {
  // public categories: string[] = categories;
  readonly categories: string[] = categories;

  onChangeCategory(category: string) {
    debugger;

  }

  readonly filters$ = new BehaviorSubject<readonly string[]>([]);
 
    @tuiPure
    get model$(): Observable<readonly string[]> {
        return this.filters$.pipe(
            map(value => (value.length === this.categories.length ? [] : value)),
        );
    }
 
    @tuiPure
    get buttonAppearance$(): Observable<TuiAppearance> {
        return this.filters$.pipe(
            map(value =>
                value.length === this.categories.length
                    ? TuiAppearance.WhiteblockActive
                    : TuiAppearance.Whiteblock,
            ),
        );
    }
 
    onModelChange(model: readonly string[]): void {
        this.filters$.next(model);
    }
 
    toggleAll(): void {
        this.filters$.next(
            this.categories.length === this.filters$.value.length ? [] : [...this.categories],
        );
    }

  // readonly form = new FormGroup({
  //   filters: new FormControl(['Food']),
  // });

  // disabledItemHandler: TuiBooleanHandler<string> = item => false;
}
