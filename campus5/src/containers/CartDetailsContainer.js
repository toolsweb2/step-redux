import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cart";
import CartDetails from "../components/CartDetails";

const mapStateToProps = (state, props) => {
  return state.cart;
};

const mapDispatchToProps = dispatch => ({
  addToCart: (item, cart) => dispatch(addToCart(item, cart)),
  removeFromCart: (item, cart) => dispatch(removeFromCart(item, cart))

});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
