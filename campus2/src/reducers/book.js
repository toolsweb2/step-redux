import { FETCH_BOOK } from "../constants";

const initialState = {
  books: []
};

const cart = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_BOOK:
      return {
        books: action.payload 
      };
    default:
      return state;
  }
};

export default cart;
