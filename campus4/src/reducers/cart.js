import { ADD_TO_CART } from "../constants";

const initialState = {
  cart: {},
  total: 0
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload.cart,
        total: action.payload.total
      };
  
    default:
      return state;
  }
};

export default cart;
