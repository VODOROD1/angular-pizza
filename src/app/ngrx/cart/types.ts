export type CartItem = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    types: number[];
    sizes: number[];
    count: number;
  };
  
  export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
  }
  