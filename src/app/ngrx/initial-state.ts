import { IState } from "./interfaces";

export const initialStateCommon: IState = {
    cartState: {
      items: [{
        id: 0,
        title: '',
        price: 0,
        imageUrl: '',
        types: [],
        count: 0,
        sizes: [],
      }],
      totalPrice: 0,
      updatedAt: Date.now()
    },
    countState: {
      count: 0,
      updatedAt: Date.now()
    }
}
