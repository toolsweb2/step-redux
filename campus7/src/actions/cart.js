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
    payload: cart
  });
  dispatch(countTotalCart(cart));

  console.log("cart", cart);
};

export const countTotalCart = cart => async dispatch => {
  let total = 0;
  Object.keys(cart).map(key => (total += cart[key].quantity));
  dispatch({
    type: types.COUNT_TOTAL_CART,
    payload: total
  });
};

export const removeFromCart = (item, cart) => async dispatch => {
  if (cart[item.id].quantity !== 1) {
    cart[item.id].quantity = cart[item.id].quantity - 1;
  } else {
    delete cart[item.id];
  }
  dispatch({
    type: types.REMOVE_FROM_CART,
    payload: cart
  });
  dispatch(countTotalCart(cart));
  console.log("cart", cart);
};

export const emptyCart = () => async dispatch => {
  const response = window.confirm(
    "Etes-vous vous sûr de vouloir vider le caddie ? "
  );
  if (response) {
    dispatch({
      type: types.EMPTY_CART,
      payload: {}
    });
    dispatch(countTotalCart({}));
  }
};

export const getCartFromStorage = (key) => async dispatch => {
  const cartFromStorage = localStorage.getItem(key);
  if (cartFromStorage !== null) {
    const cart = JSON.parse(cartFromStorage);
    dispatch({
      type: types.GET_CART_STORAGE,
      payload: cart
    });
    dispatch(countTotalCart(cart));
  }
};