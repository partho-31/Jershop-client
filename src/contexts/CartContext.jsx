import { createContext } from "react";
import useCart from "../hooks/useCart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const data = useCart();
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContext;
