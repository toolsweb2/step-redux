import * as types from "../constants";

export const addToCart = (item, cart) => async dispatch => {
  console.log("item", item);
  if (!cart[item.id]) {
    cart[item.id] = item;
    cart[item.id].quantity = 1;
  } else {
    cart[item.id].quantity += 1;
  }
  let total = 0;
  Object.keys(cart).map(key => (total += cart[key].quantity));
  dispatch({
    type: types.ADD_TO_CART,
    payload: {cart, total}
  });

  console.log("cart", cart);
};

