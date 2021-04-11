import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./asset/Components/Checkout";
import Footer from "./asset/layout/Footer";
import Header from "./asset/layout/Header";
import Home from "./asset/pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart/">
          <Checkout />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
