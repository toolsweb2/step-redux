import { ADD_TO_CART } from "../constants";

const initialState = {
  cart: {}
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
        return {
          cart: action.payload 
        };
    default:
      return state;
  }
};

export default cart;
