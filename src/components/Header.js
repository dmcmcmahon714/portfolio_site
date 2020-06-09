import React, { Component } from "react";
import logo from "../logo.svg";

import headerbackground from '../img/headerbackground.png';


export default class Header extends Component {



  render() {
    return (
      <header>
        <img className="headerbackground" src={headerbackground} ></img>
        </header>
  )
        
}
}