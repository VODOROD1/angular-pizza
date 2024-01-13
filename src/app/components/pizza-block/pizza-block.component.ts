import { Component, Input } from '@angular/core';
import { CartItem } from '../../ngrx/cart/types';
import { TuiLinkModule } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';

const typeNames = ['тонкое', 'традиционное'];

export type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

@Component({
  selector: 'app-pizza-block',
  standalone: true,
  imports: [CommonModule, TuiLinkModule],
  templateUrl: './pizza-block.component.html',
  styleUrl: './pizza-block.component.scss'
})

export class PizzaBlockComponent {
  // export const PizzaBlock: React.FC<PizzaBlockProps> = ({
  //   id,
  //   title,
  //   price,
  //   imageUrl,
  //   sizes,
  //   types,
  // }) => {
    // const dispatch = useDispatch();
    // const cartItem = useSelector(selectCartItemById(id));
    // const [activeType, setActiveType] = React.useState(0);
    // const [activeSize, setActiveSize] = React.useState(0);

    constructor() {
      
    }

    @Input() props: PizzaBlockProps;
    activeSize: number = 0;
    activeType: number = 0;
    // const addedCount = cartItem ? cartItem.count : 0;
    addedCount: number = 0;
    public typeNames: string[] = typeNames;

    setActiveType(typeId: any) {

    }

    onClickAdd = () => {
      const item: CartItem = {
        id: this.props.id,
        title: this.props.title,
        price: this.props.price,
        imageUrl: this.props.imageUrl,
        type: typeNames[this.activeType],
        size: this.props.sizes[this.activeSize],
        count: 0,
      };

      // изменяем текущее состояние
      // dispatch(addItem(item));
    };
}
