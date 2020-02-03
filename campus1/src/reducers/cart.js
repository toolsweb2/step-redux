import { ADD_TO_CART } from "../constants";

const initialState = {
  cart: {}
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return action.cart;
    default:
      return state;
  }
};

export default cart;
