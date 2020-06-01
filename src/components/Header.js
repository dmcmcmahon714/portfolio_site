import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import profilepic from '../img/profile_pic.jpg';
import ReactTypingEffect from 'react-typing-effect';

export default class Header extends Component {

  scrollToTop = () => {
  scroll.scrollToTop();
  };

  render() {
    return (
      <header>
      <h1 className="heading">Dan McMahon: Web Developer</h1>
        <img className="profilepic" src={profilepic} className="profilepic" width="200" height="200"></img>
        </header>
  )
        
}
}