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
        <nav>
        <div>
          <ul>
            <li>
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
            <li>
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
            <li>
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
          <div className="projectsheading"><h2>Projects</h2></div>
            <ul> 
            <li>
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
            <li>
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
            <li>
            <Link
                activeClass="active"
                to="yournewmusic"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Your Release Tracker
              </Link>
              </li>
            <li>
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
              <li>
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