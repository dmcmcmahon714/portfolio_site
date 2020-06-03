import React, { Component } from "react";
import logo from "../logo.svg";

import profilepic from '../img/profile_pic.jpg';


export default class Header extends Component {



  render() {
    return (
      <header>
      <h1 className="heading">Dan McMahon: Web Developer</h1>
        <img className="profilepic" src={profilepic} className="profilepic" width="200" height="200"></img>
        </header>
  )
        
}
}