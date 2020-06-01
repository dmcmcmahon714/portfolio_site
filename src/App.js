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
          <Nav />
          <Main />
          <Route exact path="/">
          
        </Route>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/education">
        <Education />
        </Route>
        <Route path="/skills">
        <Skills />
        </Route>
        <Route path="/contact">
        <Contact />
        </Route>
        </div>
        </div>
      </Router>

      
  )
}
export default App;


