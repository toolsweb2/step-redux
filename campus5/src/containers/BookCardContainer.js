import { connect } from "react-redux";
import { addToCart } from "../actions/cart";
import BookCard from "../components/BookCard";

const mapStateToProps = (state, props) => {
  return state.cart;
};

const mapDispatchToProps = dispatch => ({
  addToCart: (item, cart) => dispatch(addToCart(item, cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
