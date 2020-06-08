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
<p>I am a lifelong musician with a passion for technology’s role in the creative field. Troubleshooting and getting to the bottom of roadblocks to peoples’ artistry gives me a deep sense of satisfaction. While I have significant experience in a professional office setting performing customer-service oriented legal work, I have also been obsessed with creating digital music since I could first afford a computer. Additionally, my love of people and strict yoga & meditation practices have allowed me to help people realize their creative goals while maintaining a peaceful, even temper. I am currently developing my hard technology skills, so I can come to an even deeper understanding of these systems.
</p>
      </aside>
    );
  }
}

