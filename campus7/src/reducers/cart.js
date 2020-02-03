import {
  ADD_TO_CART,
  COUNT_TOTAL_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  GET_CART_STORAGE
} from "../constants";

const initialState = {
  cart: {},
  total: 0
};


const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload
      };
    case GET_CART_STORAGE:
      return {
        ...state,
        cart: action.payload
      };
    case COUNT_TOTAL_CART:
      return {
        ...state,
        total: action.payload
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: action.payload
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload
      };
    default:
      return state;
  }
};

export default cart;
