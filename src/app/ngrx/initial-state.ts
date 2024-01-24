import { CartItem } from "./cart/types";
import { IState } from "./interfaces";

const cartItems: CartItem[] = [
  {
    id: 0,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    title: "Пепперони Фреш с перцем",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    count: 1,
    type: 'тонкое',
    size: 26
  },
  {
    id: 1,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    title: "Сырная",
    types: [0],
    sizes: [26, 40],
    price: 245,
    count: 2,
    type: 'традиционное',
    size: 40
  },
  {
    id: 2,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
    title: "Цыпленок барбекю",
    types: [0],
    sizes: [26, 40],
    price: 295,
    count: 3,
    type: 'тонкое',
    size: 26
  }
]

export const initialStateCommon: IState = {
    cartState: {
      items: cartItems,
      totalPrice: 1343,
      updatedAt: Date.now()
    },
    countState: {
      count: 0,
      updatedAt: Date.now()
    }
}
