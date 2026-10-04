import { useReducer, useEffect } from "react";
import { CartContext } from "./Context";
import { initialState, CartReducer, init } from "../CartReducer";

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartState.cart));
  }, [cartState.cart]);

  return <CartContext.Provider value={{ cartState, cartDispatch }}>{children}</CartContext.Provider>;
};

export default CartProvider;
