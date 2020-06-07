import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import backtotop from '../img/backtotop.png'; 
// We'll code Navitem.js later for now let's focus on Navbar.js
// “Navitem” is the sub-component.
class Nav extends Component {
    scrollToTop = () => {
    scroll.scrollToTop();
  };
    render() {
        return (
        <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
          <li className="about">
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              About
              </Link>
              </li>
            <li className="education">
            <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Education
              </Link>
              </li>
            <li className="skills">
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Skills
              </Link>
              </li>
            <li className="contact">
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Contact
              </Link>
              </li>
              </ul>
            <ul className="projects"> 
            <li><p className="projects">Projects:</p></li>
            <li className="absolutejams">
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
            )
        }
    }
    
export default Nav