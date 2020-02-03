import * as types from "../constants";
import axios from "axios";

export const fetchBook = () => async dispatch => {
  const res = await axios.get("http://localhost:3001/products");
  dispatch({
    type: types.FETCH_BOOK,
    payload: res.data
  });
};

