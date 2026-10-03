const initialState = {
  cart: [],
};

const init = (initialState) => {
  const storedCartItems = localStorage.getItem("cartItems");
  return storedCartItems ? { ...initialState, cart: JSON.parse(storedCartItems) } : initialState;
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const existItem = state.cart.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((x) => (x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x)),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }

    case "INCREMENT": {
      const id = action.payload;

      return {
        ...state,
        cart: state.cart.map((x) => (x.id === id.id ? { ...x, quantity: x.quantity + 1 } : x)),
      };
    }

    case "DECREMENT": {
      const id = action.payload;

      return {
        ...state,
        cart: state.cart.map((x) => (x.id === id.id ? { ...x, quantity: x.quantity - 1 } : x)).filter((x) => x.quantity > 0),
      };
    }

    case "REMOVE_FROM_CART": {
      const id = action.payload;

      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== id.id),
      };
    }
    case "payment": {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
};

export { initialState, CartReducer, init };
