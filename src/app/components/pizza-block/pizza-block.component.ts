import { Component, Input } from '@angular/core';
import { CartItem } from '../../ngrx/cart/types';

const typeNames = ['тонкое', 'традиционное'];

type PizzaBlockProps = {
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
  imports: [],
  templateUrl: './pizza-block.component.html',
  styleUrl: './pizza-block.component.css'
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
