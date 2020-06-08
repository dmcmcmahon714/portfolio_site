import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Nav from './components/Nav';
import Header from './components/Header'
import Main from './contents/Main'
import Aside from './components/Aside'

class App extends Component {
  render() {
  return (

      <Router>
        <div className="App">
        <div className="container">
        <Header />
        <Aside />
        <Nav />
        <Main />
          <Route exact path="/">
        </Route>
        </div>
        </div>
      </Router>

      
  )
}
}
export default App;


