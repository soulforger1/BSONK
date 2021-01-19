import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Review, Home, BusinessInfo, Merch, Vlog } from "./pages/";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/bussInfo">
          <BusinessInfo />
        </Route>
        <Route path="/merch">
          <Merch />
        </Route>
        <Route path="/vlog">
          <Vlog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
