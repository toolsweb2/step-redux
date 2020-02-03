import { connect } from "react-redux";
import App from "../App";
import { getCartFromStorage } from "../actions/cart";

const mapStateToProps = (state, props) => {
  return state.cart;
};

const mapDispatchToProps = dispatch => ({
  getCartFromStorage: (key) => dispatch(getCartFromStorage(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
