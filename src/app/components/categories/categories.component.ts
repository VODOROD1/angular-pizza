import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})

export class CategoriesComponent {
  public categories: string[] = categories;

  onChangeCategory(category: string) {
    debugger;
    
  }
}
