import { connect } from "react-redux";

import CartSummary from "../components/CartSummary";

const mapStateToProps = (state, props) => {
  return state.cart;
};


export default connect(mapStateToProps)(CartSummary);
