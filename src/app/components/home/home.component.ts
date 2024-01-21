import { Component, OnInit } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { CommonModule } from '@angular/common';
import { SortComponent } from '../sort/sort.component';
import { PizzaBlockComponent, PizzaBlockProps } from '../pizza-block/pizza-block.component';
import { MockapiService } from '../../services/mockapi.service';
import { SkeletonComponent } from '../pizza-block/skeleton/skeleton.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CategoriesComponent,
    SortComponent,
    PizzaBlockComponent,
    SkeletonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private mockapiService: MockapiService) {
  }

  title = 'angular-pizza';
  skeletonVisible: boolean = false;

  pizzas: PizzaBlockProps[] = [];

  ngOnInit(): void {
    this.skeletonVisible = true;
    this.mockapiService.getPizzasJson()
    .subscribe((result: any) => {
      debugger;
      this.skeletonVisible = false;
      this.pizzas = result;
    })
}
}
