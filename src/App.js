import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import GlobalState from "./context/GlobalState";
import './App.css';

const App = props => {
  return (
    <div className="container">
      <GlobalState>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </GlobalState>
    </div>
  );
}

export default App;
