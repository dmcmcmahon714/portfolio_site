import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import profilepic from '../img/profile_pic.jpg';
import ReactTypingEffect from 'react-typing-effect';

export default class Aside extends Component {

  scrollToTop = () => {
  scroll.scrollToTop();
  };

  render() {
    return (
      <aside>
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items"> 
            <li className="nav-item">
            <Link
                activeClass="active"
                to="absoluteJAMS"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              absoluteJAMS
              </Link>
              </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="gigglelibs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              GiggleLibs
              </Link>
              </li>
            <li className="nav-item">
            <Link
                activeClass="active"
                to="yournewmusic"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Your New Music
              </Link>
              </li>
            <li className="nav-item">
            <Link
                activeClass="active"
                to="dailypaintracker"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Daily Pain Tracker
              </Link>
              </li>
              <li className="nav-item">
            <Link
                activeClass="active"
                to="chicagotowfind"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Chicago Tow Find
              </Link>
              </li>
            </ul>
            </div>
            </nav>
            </aside>
    );
  }
}

