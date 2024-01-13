import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SortComponent } from "./components/sort/sort.component";
import { PizzaBlockComponent, PizzaBlockProps } from "./components/pizza-block/pizza-block.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    CategoriesComponent, 
    SortComponent, 
    TuiRootModule, 
    TuiDialogModule, 
    TuiAlertModule,
    PizzaBlockComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular-pizza';

  pizzaProps: PizzaBlockProps = {
    id: '1',
    title: 'Мексиканская',
    price: 210,
    imageUrl: '',
    sizes: [26,30,40],
    types: [0,1],
    rating: 0
  }
}
