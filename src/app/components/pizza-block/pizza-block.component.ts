import { Component, Input } from '@angular/core';
import { CartItem } from '../../ngrx/cart/types';
import { TuiLinkModule } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import { PizzaBlockService } from '../../services/pizza-block.service';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectCount, selectUpdatedAt } from '../../ngrx/reducers/count.selectors';
import { CountClearAction, CountDecreaseAction, CountIncreaseAction } from '../../ngrx/reducers/count.actions';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiRadioBlockModule } from '@taiga-ui/kit';
import { CountState } from '../../ngrx/interfaces';

const typeNames = ['тонкое', 'традиционное'];

export type PizzaBlockProps = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

@Component({
  selector: 'app-pizza-block',
  standalone: true,
  imports: [ CommonModule, TuiLinkModule, ReactiveFormsModule, TuiRadioBlockModule ],
  providers: [PizzaBlockService],
  templateUrl: './pizza-block.component.html',
  styleUrl: './pizza-block.component.scss'
})

export class PizzaBlockComponent {
    public count$: Observable<number> = this.store$.pipe(select(selectCount));
    public disableDecrease$: Observable<boolean> = this.count$.pipe(map((count) => count <= 0));
    public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));

    constructor(
      public pizzaBlockService: PizzaBlockService,
      private store$: Store<CountState>
    ) {
      /////////////
      this.count$.subscribe(res => {
        let temp = typeof this.count$;
        debugger
      })
      /////////////
      this.addedCount = this.pizzaBlockService.addedCount;
      this.pizzaBlockService.getActiveTypeSub()
        .subscribe(result => {
          this.activeType = result;
        })
      this.pizzaBlockService.getActiveSizeSub()
        .subscribe(result => {
          this.activeSize = result;
        })
    }

    @Input() props: PizzaBlockProps;
    activeType: number = 0;
    activeSize: number = 26;
    addedCount: number = 0;
    public typeNames: string[] = typeNames;

    public typeForm: FormGroup = new FormGroup({
      typeValue: new FormControl(this.activeType)
    });

    public sizeForm: FormGroup = new FormGroup({
      sizeValue: new FormControl(this.activeSize)
    });

    setActiveType(typeId: number) {
      debugger
      this.pizzaBlockService.activeType = typeId;
    }

    setActiveSize(size: number) {
      debugger
      this.pizzaBlockService.activeSize = size;
    }

    onClickAdd = () => {
      debugger
      const item: CartItem = {
        id: this.props.id,
        title: this.props.title,
        price: this.props.price,
        imageUrl: this.props.imageUrl,
        types: this.props.types,
        sizes: this.props.sizes,
        count: 0,
      };
      debugger
      this.pizzaBlockService.addItem(item);
      this.increase();
    };

    increase() {
      debugger
      // изменяем текущее состояние
      this.store$.dispatch(new CountIncreaseAction());
    }

    decrease() {
      this.store$.dispatch(new CountDecreaseAction());
    }

    clear() {
      this.store$.dispatch(new CountClearAction());
    }
}
