import { ADD_TO_CART } from "../constants";

export const addToCart = (item, cart) => async dispatch => {
  console.log("item", item);
  if (!cart[item.id]) {
    cart[item.id] = item;
    cart[item.id].quantity = 1;
  } else {
    cart[item.id].quantity += 1;
  }
  dispatch({
    type: ADD_TO_CART,
    payload: cart
  });

  console.log("cart", cart);
};

