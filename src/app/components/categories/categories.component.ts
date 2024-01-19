import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';
import { TuiAppearance, TuiButtonModule } from '@taiga-ui/core';
import { TuiFilterModule } from '@taiga-ui/kit';
import { BehaviorSubject, Observable, map } from 'rxjs';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    TuiFilterModule,
    TuiButtonModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CategoriesComponent {
  // public categories: string[] = categories;
  readonly categories: string[] = categories;
  public isAllButton: boolean = false;

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
      debugger
      this.filters$.next(model);
      this.isAllButton = false;
    }
 
    toggleAll(): void {
      debugger
      this.filters$.next(
          this.categories.length === this.filters$.value.length ? [] : [...this.categories],
      );
      this.isAllButton = !this.isAllButton;
    }

  // readonly form = new FormGroup({
  //   filters: new FormControl(['Food']),
  // });

  // disabledItemHandler: TuiBooleanHandler<string> = item => false;
}