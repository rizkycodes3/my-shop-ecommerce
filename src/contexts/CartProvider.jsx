import { useState } from "react";
import { CartContext } from "./Context";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  return <CartContext.Provider value={{ cartItems, setCartItems }}>{children}</CartContext.Provider>;
};

// export { CartProvider };
export default CartProvider;
