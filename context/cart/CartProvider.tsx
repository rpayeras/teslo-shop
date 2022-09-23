import { FC, useReducer } from "react";
import { CartProduct } from "../../interfaces/cart";
import { CartContext, cartReducer } from "./";

export interface CartState {
  cart: CartProduct[];
}

interface CartProviderProps {
  children: JSX.Element;
}

const INITIAL_STATE: CartState = {
  cart: [],
};

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  return (
    <CartContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
