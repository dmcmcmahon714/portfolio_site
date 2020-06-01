import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../img/profile_pic.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'
import ProjectNav from '../components/ProjectNav'
import Section from "../components/Section";
import dummyText from "../DummyText";


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Dan McMahon','Welcome to my development portfolio']} speed={100} eraseDelay={700}/>
            <ProjectNav />
            <div clasName="sectioncontainer">
            <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
