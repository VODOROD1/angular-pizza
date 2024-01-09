import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {TuiBooleanHandler} from '@taiga-ui/cdk';
import { TuiFilterModule } from '@taiga-ui/kit';

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
  public categories: string[] = categories;

  onChangeCategory(category: string) {
    debugger;

  }

  readonly form = new FormGroup({
    filters: new FormControl(['Food']),
  });

  disabledItemHandler: TuiBooleanHandler<string> = item => item.length < 7;
}
