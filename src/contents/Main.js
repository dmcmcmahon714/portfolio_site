import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../img/profile_pic.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'
import Aside from '../components/Aside'
import Section from "../components/Section";
import dummyText from "../DummyText";
import AJscreenshot from '../img/absoluteJAMS_SS.png'
import GGscreenshot from '../img/gigglelibsss.png'
import YournewmusicSS from '../img/yournewmusic.png'
import PaintrackerSS from '../img/paintrackerss.png'
import ChicagotowfindSS from '../img/chicagotowfind.png'
import { Link, animateScroll as scroll } from "react-scroll";


class Main extends Component {
    render() {
        return (
            
        <main>
        <nav className="nav" id="navbar">
        <h1>Click to see some of my work:</h1>
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
        <Section
            title="absoluteJAMS"
            subtitle="This is a full stack web forum built with Ruby on Rails using the devise gem and PostgresQL.  Commenting and likes with full CRUD functionality make an ideal environment for music discussion."
            dark={true}
            id="absoluteJAMS"
            repo=<a href="https://github.com/dmcmcmahon714/finalprojectrebuild">Github Repository</a>
            screenshot=<img src={AJscreenshot} alt="absoluteJAMS" width="900" height="600"/>
            link=<a href="https://protected-oasis-67383.herokuapp.com/">Demo</a>
            />
        <Section
          title="Gigglelibs"
          subtitle="Gigglelibs is a fun mad lib generator for bored children and adults alike. This site employed an Express with Mongoose backend powerered by Node.js, with bcrypt, CORS, and MERN stack to integrate the front end. The front end was built in React with Node.js, HTML, React Bootstrap, CSS, and Javascript all integrated. Express-session was utilized for authentication allowing users to sign up, log in, and log out. "
          dark={true}
          id="gigglelibs"
          repo=<a href="https://github.com/ty18881/Phoenix-Rising-Giggle-Libs-FE">Github Repository - Front End</a>
          backendrepo=<a href="https://github.com/ty18881/Phoenix-Rising-Project-3-BE">Github Repository - Back End</a>
          screenshot=<img src={GGscreenshot} alt="Gigglelibs" width="900" height="600"/>
          link=<a href="https://gigglelibs.herokuapp.com/">Demo</a>
        />
        <Section
          title="Your New Music"
          subtitle="This app allows a user to keep track of when their favorite albums will be coming out. The API was built with Ruby on Rails and PostgresQL. Fake data provided by faker.  The back end connects to the client side with rack-cors.  The front end was built in React "
          dark={true}
          id="yournewmusic"
          repo=<a href="https://github.com/dmcmcmahon714/project_4_front_end">Github Repository - Front End</a>
          backendrepo=<a href="https://github.com/dmcmcmahon714/new_music_api">Github Repository - Back End</a>
          screenshot=<img src={YournewmusicSS} alt="Gigglelibs" width="900" height="650"/>
          link=<a href="https://music-release-app.herokuapp.com/">Demo</a>
        />
        <Section
          title="Daily Pain Tracker"
          subtitle="This is an app designed to allow users to easily record how a specific pain or ailment is progressing over time.  Ideally this would help doctors looking for more accurate self-reporting.  This is an MVC format app with full CRUD functinality.  The database was created with MongoDB.  Authentication was created with bcrypt and express-session to allow users to sign up, sign in, and log out, with sole access to their private data. "
          dark={true}
          id="dailypaintracker"
          repo=<a href="https://github.com/dmcmcmahon714/seir-projects2">Github Repository</a>
          screenshot=<img src={PaintrackerSS} alt="Gigglelibs" width="900" height="800"/>
          link=<a href="https://fierce-scrubland-02207.herokuapp.com/">Demo</a>
        />
        <Section
          title="Chicago Tow Find"
          subtitle="Chicago tow find is an html website that allows users to see if their car has been towed in Chicago on a given date.  The app is built with simple html, css, and javascript utilizing jquery.  The information is pulled from the official City of Chicago public API via AJAX request."
          dark={true}
          id="chicagotowfind"
          repo=<a href="https://github.com/dmcmcmahon714/Project-1">Github Repository</a>
          screenshot=<img src={ChicagotowfindSS} alt="Gigglelibs" width="900" height="1250"/>
          link=<a href="https://dmcmcmahon714.github.io/Project-1/">Demo</a>
        />
      </main>
          
            )
        }
    }
    
    export default Main
