import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Login } from "../pages/Login";
import OrderPreview from "../pages/OrderPreview";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/order">
          <OrderPreview />
        </Route>
      </Switch>
    </Router>
  );
};
