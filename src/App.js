import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Nav from './components/Nav';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Aside from './components/Aside'
import dummyText from "./DummyText";
import Header from './components/Header'
import Main from './contents/Main'

function App() {

  return (

      <Router>
        <div className="App">
        <div className="container">
        <Header />
          <Main />
          <Route exact path="/">
        
        </Route>
    
        </div>
        </div>
      </Router>

      
  )
}
export default App;


