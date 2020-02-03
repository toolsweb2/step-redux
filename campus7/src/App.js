import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Menu, Icon } from "semantic-ui-react";
import "./App.css";

import BookListContainer from "./containers/BookListContainer";
import CartSummaryContainer from "./containers/CartSummaryContainer";
import CartDetailsContainer from "./containers/CartDetailsContainer";
const CART_KEY = "react-shop";


function App(props) {
  const cart = props.cart;
  //!\ order matters: first useEffect() retrieves from localStorage, second useEffect persists in localStorage
  useEffect(() => {
    props.getCartFromStorage(CART_KEY)
  }, []);

  useEffect(() => {
    // only strings in localStorage
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    document.title = `caddie(${props.total})`;
  }, [cart, props.total]);

  return (
    <>
      <Router>
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
          <Route path="/cart" component={CartDetailsContainer} />
          <Route path="/" component={BookListContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
