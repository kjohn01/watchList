import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Later from "./containers/Later";
import Playlist from "./containers/Playlist";
import Watched from "./containers/Watched";
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
              <Later />
            </Route>
            <Route path="/playlist">
              <Playlist />
            </Route>
            <Route path="/watched">
              <Watched />
            </Route>
          </Switch>
        </Router>
      </GlobalState>
    </div>
  );
}

export default App;
