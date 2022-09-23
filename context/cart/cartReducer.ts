import { CartProduct } from "../../interfaces/cart";
import { CartState } from "./";

enum CART_ACTIONS {
  LOAD = "[Cart] - LoadCart from cookies | storage",
  ADD = "[Cart] - Add Product",
}

type CartActionType =
  | {
      type: CART_ACTIONS.LOAD;
      payload: CartProduct[];
    }
  | {
      type: CART_ACTIONS.ADD;
      payload: CartProduct;
    };

export const cartReducer = (state: CartState, action: CartActionType) => {
  switch (action.type) {
    case CART_ACTIONS.ADD:
      break;
    case CART_ACTIONS.LOAD:
      break;
    default:
  }
};
