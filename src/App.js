import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { About, Contact, Home } from './pages/';
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/' >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
