import { createContext } from "react";
import { CartProduct } from "../../interfaces/cart";

interface ContextProps {
  cart: CartProduct[];
}

export const CartContext = createContext({} as ContextProps);
