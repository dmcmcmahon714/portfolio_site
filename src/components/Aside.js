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
<p className="aboutblurb">I’m a full stack web developer with experience in law, music, health & wellness.  I see my role in the field as to help forge new creative frontiers in the tech industry.  I am primarily driven to take on these roles by the hope for a more efficient, beautiful world.  My varied experience of different industries gives me a unique approach to any challenge I am faced with.  I also love people and figuring out the most efficient way to realize their visions. Overcoming the hurdles necessary to make dreams come to life is my greatest sense of satisfaction. My goal as a developer is my ability to blend the artistry of whoever I am working with and clean code to create the idyllic digital experience.
</p>
      </aside>
    );
  }
}

