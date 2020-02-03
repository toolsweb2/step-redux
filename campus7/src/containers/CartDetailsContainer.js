import { connect } from "react-redux";
import { addToCart, removeFromCart, emptyCart } from "../actions/cart";
import CartDetails from "../components/CartDetails";

const mapStateToProps = (state, props) => {
  return state.cart;
};

const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item)),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
  emptyCart: () => dispatch(emptyCart())

});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
