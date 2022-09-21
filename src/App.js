
import React from 'react';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TicTacToe from './components/TicTacToe';


function App() {
  return (

    <Router>
      <Switch>
      <Route path="/tictactoe">
          <TicTacToe />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
};


export default App;
