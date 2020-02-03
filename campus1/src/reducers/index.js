import { combineReducers } from 'redux'
import cart from './cart'
import book from './book'

export default combineReducers({
  cart,
  book,
})