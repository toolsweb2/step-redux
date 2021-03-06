import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Menu, Icon } from "semantic-ui-react";
import "./App.css";
import CartDetails from "./components/CartDetails";
import BookListContainer from "./containers/BookListContainer";
import { Provider } from "react-redux";
import store from './store'
import CartSummaryContainer from "./containers/CartSummaryContainer";
export const CartContext = createContext();
const CART_KEY = "react-shop";

function App() {
  const [cart, setCart] = useState({});
  const [nbArticles, setNbArticles] = useState(0);

  //!\ order matters: first useEffect() retrieves from localStorage, second useEffect persists in localStorage
  useEffect(() => {
    const cartFromStorage = localStorage.getItem(CART_KEY);
    if (cartFromStorage !== null) {
      setCart(JSON.parse(cartFromStorage));
    }
  }, []);

  useEffect(() => {
    // only strings in localStorage
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    document.title = `caddie(${nbArticles})`;
  }, [cart, nbArticles]);

 

  function removeFromCart(item) {
    if (cart[item.id].quantity !== 1) {
      cart[item.id].quantity = cart[item.id].quantity - 1;
    } else {
      delete cart[item.id];
    }
    setCart({ ...cart });
    console.log("cart", cart);
  }

  function emptyCart() {
    const response = window.confirm(
      "Etes-vous vous sûr de vouloir vider le caddie ? "
    );
    if (response) {
      setCart({});
    }
  }


  const contextValue = {
    cart,
    removeFromCart,
    emptyCart
  };

  return (
    <>
    <Provider store={store}>
      <Router>
        <CartContext.Provider value={contextValue}>
          <Container>
            <Menu stackable>
              <Menu.Item>
                <Link to="/">Campus Shop</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/cart">
                  <Icon name="cart" size="small" /> 
                  <CartSummaryContainer />
                </Link>
              </Menu.Item>
            </Menu>
          </Container>
          <Switch>
            <Route path="/cart" component={CartDetails} />
            <Route path="/" component={BookListContainer} />
          </Switch>
        </CartContext.Provider>
      </Router>
      </Provider>
    </>
  );
}

export default App;
