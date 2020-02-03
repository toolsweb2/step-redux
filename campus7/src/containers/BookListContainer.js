import { connect } from "react-redux";
import BookList from "../components/BookList";
import { fetchBook } from "../actions/book";

const mapStateToProps = (state, props) => {
  return state.book;
};

const mapDispatchToProps = dispatch => ({
  fetchBook: () => dispatch(fetchBook())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
