import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../img/profile_pic.jpg';
import GALOGO from '../img/GALOGO.png'
import depaullogo from '../img/depaullogo.png'
import htmllogo from '../img/htmllogo.png'
import csslogo from '../img/csslogo.png'
import scsslogo from '../img/scsslogo.png'
import javascriptlogo from '../img/javascriptlogo.png'
import nodejslogo from '../img/nodejslogo.png'
import reactlogo from '../img/reactlogo.png'
import rubylogo from '../img/rubylogo.png'
import railslogo from '../img/railslogo.png'
import jquerylogo from '../img/jquerylogo.png'
import postgresqllogo from '../img/postgresqllogo.png'
import mongooselogo from '../img/mongooselogo.png'
import mongodblogo from '../img/mongodblogo.png'
import githublogo from '../img/githublogo.png'
import linkedinlogo from '../img/linkedin.png'
import herokudemoicon from '../img/herokudemoicon.png'
import githubsmall from '../img/githubsmall.png'
import githubpagesicon from '../img/githubpagesicon.jpeg'
import Social from '../components/Social'
import Aside from '../components/Aside'
import Section from "../components/Section";
import dummyText from "../DummyText";
import absolutess2 from '../img/absolutess2.png'
import gigglelibsss from '../img/gigglelibsss.png'
import YournewmusicSS from '../img/yournewmusic.png'
import PaintrackerSS from '../img/paintrackerss.png'
import PaintrackerSS2 from '../img/paintrackerss2.png'
import ChicagotowfindSS from '../img/chicagotowfind.png'
import { Link, animateScroll as scroll } from "react-scroll";
import backtotop from '../img/backtotop.png'; 


class Main extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };
    render() {
        return (
            
        <main>
        <Section
            title=<h1 className="title3">Education</h1>
            subtitle="Software Engineering Immersive"
            datesone="December 2019 - May 2020"
            dark={true}
            id="education"
            schoolone=<img src={GALOGO}/>
            programtwo="B.A. in Communiciations - Journalism"
            schooltwo=<img src={depaullogo}/>
            datestwo="September 2009 - January 2011"
            backtotop=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
            />

        <Section
            title=<h1 className="title2">Skills</h1>
            dark={true}
            id="skills"
            skillone=<img src={htmllogo}/>
            skilltwo=<img src={csslogo}/>
            skillscss=<img src={scsslogo}/>
            skillthree=<img src={javascriptlogo}/>
            skillfour=<img src={nodejslogo}/>
            skillfive=<img src={reactlogo}/>
            skillsix=<img src={rubylogo}/>
            skillseven=<img src={railslogo}/>
            skilleight=<img src={jquerylogo}/>
            skillnine=<img src={postgresqllogo}/>
            skillten=<img src={mongooselogo}/>
            skilleleven=<img src={mongodblogo}/>
            skilltwelve="Writing"
            skillthirteen="Communication"
            subtitle=<img src={backtotop} className="skills" alt="Logo" onClick={this.scrollToTop}/>
           
            />

        <Section
            title=<h1 className="contact">Contact</h1>
            skillthree=<a className="email" href="danielrichardmcmahon@gmail.com">email: danielrichardmcmahon@gmail.com</a>
            skillfive=<p className="phone">Phone: +1(312)810-9540</p>
            skillsix=<div className="links"><a className="linklogos" href="https://www.linkedin.com/in/danmcmahondev/"><img alt="linkedinlogo" src={linkedinlogo}/></a>
            <a className="linklogos" href="https://github.com/dmcmcmahon714"><img alt="ghlogo" src={githublogo}/></a></div>
            dark={true}
            id="contact"
            skillseven=<img src={backtotop} className="contact" alt="Logo" onClick={this.scrollToTop}/>
            />

        <Section
            title=<h1 className="title3">absoluteJAMS</h1>
            skillone=<div className="sitedescription">
            <div className="column" >This is a full stack web forum built with Ruby on Rails using the devise gem and postgresQL. Commenting and likes with full CRUD functionality make an ideal environment for music discussion.</div>
            <div className="column">
            <p className="features">Features:</p>
            <ul>
            <li className="descriptionitems">User Authentication</li>
            <li className="descriptionitems">Posts</li>
            <li className="descriptionitems">Likes</li>
            <li className="descriptionitems">Comments</li>
            <li className="descriptionitems">Tag Sorting</li>
            </ul>
            </div>
            <div className="column">
            <p className="features">Technoligies Used:</p>
            <ul className="jamstech">
            <li className="descriptionitems">Ruby on Rails</li>
            <li className="descriptionitems">Devise</li>
            <li className="descriptionitems">SASS-rails</li>
            <li className="descriptionitems">PostgresQL</li>
            <li className="descriptionitems">Simple Form</li>
            <li className="descriptionitems">Faker</li>
            <li className="descriptionitems">Bootstrap</li>
            </ul>
            </div>
            </div>
            dark={true}
            id="absoluteJAMS"
            skilltwo=<div className="absolutescreenshots"><img className="absoluteshots" src={absolutess2} alt="absoluteJAMS1"/></div>
            skillthree=<div className="demolinks"><a href="https://protected-oasis-67383.herokuapp.com/">
            <img alt="herokudemoicon" src={herokudemoicon}/></a>
            <a href="https://github.com/dmcmcmahon714/finalprojectrebuild">
            <img alt="githubsmall" src={githubsmall}/></a></div>
            skillthree=<img src={backtotop} className="jams" alt="Logo" onClick={this.scrollToTop}/>
            />


        <Section
          title=<h1 className="title3">Gigglelibs</h1>
          skillone=<div className="sitedescription">
          <div className="column">Gigglelibs is a fun mad lib generator for bored children and adults alike. This site employed an Express with Mongoose backend powerered by Node.js, with bcrypt, CORS, and MERN stack to integrate the front end. The front end was built in React with Node.js, HTML, React Bootstrap, CSS, and Javascript all integrated. Express-session was utilized for authentication allowing users to sign up, log in, and log out.</div>
          <div className="column">
          <p className="features">Features:</p>
            <ul>
            <li className="descriptionitems">User Authentication</li>
            <li className="descriptionitems">MadLib Generator</li>
            <li className="descriptionitems">Gigglelib Database</li>
            </ul>
            </div>
            <div className="column">
            <p className="features">Technoligies Used:</p>
            <ul className="libstech">
            <li className="descriptionitems">Node.js</li>
            <li className="descriptionitems">CORS</li>
            <li className="descriptionitems">Express</li>
            <li className="descriptionitems">Mongoose</li>
            <li className="descriptionitems">Sessions</li>
            <li className="descriptionitems">React</li>
            <li className="descriptionitems">React-Bootstrap</li>
            <li className="descriptionitems">React-Router-DOM</li>
            </ul>
            </div>
            </div>
          dark={true}
          id="gigglelibs"
          skilltwo=<img src={gigglelibsss} alt="Gigglelibs"/>
          skillthree=<div className="demolinks"><a href="https://gigglelibs.herokuapp.com/">
          <img alt="herokudemoicon" src={herokudemoicon}/></a><a href="https://github.com/ty18881/Phoenix-Rising-Giggle-Libs-FE">Front End:
          <img className="githubrepos" alt="githubsmall" src={githubsmall}/>
          </a>
          <a href="https://github.com/ty18881/Phoenix-Rising-Project-3-BE">Backend:
          <img className="githubrepos" alt="githubsmall" src={githubsmall}/>
          </a></div>
          skillfour=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
        />


        <Section
          title=<h1 className="title3">Your Release Tracker</h1>
          skillone=<div className="sitedescription">
          <div className="column">This app allows a user to keep track of when their favorite albums will be coming out. The API was built with Ruby on Rails and PostgresQL. Fake data provided by faker.  The back end connects to the client side with rack-cors. The front end was built in React</div>
          <div className="column">
           <p className="features">Features:</p>
            <ul>
            <li className="descriptionitems">Add Releases</li>
            <li className="descriptionitems">Edit Releases</li>
            <li className="descriptionitems">Delete Releases</li>
            <li className="descriptionitems">Embeded New Release Spotify Player</li>
            </ul>
            </div>
            <div className="column">
            <p className="features">Technoligies Used:</p>
            <ul>
            <li className="descriptionitems">Node.js</li>
            <li className="descriptionitems">CORS</li>
            <li className="descriptionitems">Express</li>
            <li className="descriptionitems">Mongoose</li>
            <li className="descriptionitems">Sessions</li>
            <li className="descriptionitems">React</li>
            <li className="descriptionitems">React-Bootstrap</li>
            <li className="descriptionitems">React-Router-DOM</li>
            </ul>
            </div>
            </div>
          dark={true}
          id="yournewmusic"
          skilltwo=<img className="absolutescreenshot" src={YournewmusicSS} alt="YournewmusicSS"/>
          skillsix=<div className="demolinks"><a href="https://frozen-temple-96234.herokuapp.com/">
          <img alt="herokudemoicon" src={herokudemoicon}/></a><a href="https://github.com/dmcmcmahon714/project_4_front_end">Front End:
          <img className="githubrepos" alt="githubsmall" src={githubsmall}/>
          </a>
          <a href="https://github.com/dmcmcmahon714/new_music_api">Backend:
          <img className="githubrepos" alt="githubsmall" src={githubsmall}/>
          </a></div>
          skillseven=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
        />


        <Section
          title=<h1 className="title3">Daily Pain Tracker</h1>
          skillone=<div className="sitedescription">
          <div className="column">This is an app designed to allow users to easily record how a specific pain or ailment is progressing over time.  Ideally this would help doctors looking for more accurate self-reporting.  This is an MVC format app with full CRUD functinality.  The database was created with MongoDB.  Authentication was created with bcrypt and express-session to allow users to sign up, sign in, and log out, with sole access to their private data.</div>
          <div className ="column">
          <p className="features">Features:</p>
           <ul>
            <li className="descriptionitems">User Authentication</li>
            <li className="descriptionitems">Private Pain Level Tracker</li>
            <li className="descriptionitems">Date and Time Form Inputs</li>
            <li className="descriptionitems">Large Text and Features for Accessibility</li>
            </ul>
            </div>
            <div className="column">
            <p className="features">Technoligies Used:</p>
            <ul>
            <li className="descriptionitems">Node.js</li>
            <li className="descriptionitems">EJS</li>
            <li className="descriptionitems">Express</li>
            <li className="descriptionitems">Express-Session</li>
            <li className="descriptionitems">Mongoose</li>   
            </ul>
            </div>
            </div>
          dark={true}
          id="dailypaintracker"
          skilltwo=<div className="paintrackerssdiv"><img className="paintrackerss" src={PaintrackerSS}/><img className="paintrackerss2" src={PaintrackerSS2}/></div>
          skillthree=<div className="demolinks"><a href="https://fierce-scrubland-02207.herokuapp.com//">
            <img alt="herokudemoicon" src={herokudemoicon}/></a>
            <a href="https://github.com/dmcmcmahon714/seir-projects2">
            <img alt="githubsmall" src={githubsmall}/></a></div>
            skillfour=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
        />

        <Section
          title=<h1 className="title3">Chicago Tow Find</h1>
          skillone=<div className="sitedescription">
          <div className="column">Chicago tow find is an html website that allows users to see if their car has been towed in Chicago on a given date.  The app is built with simple html, css, and javascript utilizing jquery.  The information is pulled from the official City of Chicago public API via AJAX request.</div>
          <div className="column">
          <p className="features">Features:</p>
           <ul>
            <li className="descriptionitems">Access to Chicago Public Database</li>
            <li className="descriptionitems">Find Vehicle by Plate, Make, and Style</li>
            <li className="descriptionitems">Current for Past 60 days</li>
            </ul>
            </div>
            <div className="column">
            <p className="features">Technoligies Used:</p>
            <ul className="jamstech">
            <li className="descriptionitems">HTML</li>
            <li className="descriptionitems">Javascript</li>
            <li className="descriptionitems">Jquery</li>
            <li className="descriptionitems">Ajax</li>
            <li className="descriptionitems">External API</li>   
            </ul>
            </div>
            </div>
          dark={true}
          id="chicagotowfind"
          skilltwo=<img src={ChicagotowfindSS} alt="chitowfind"/>
          skillfour=<div className="demolinks"><a href="https://dmcmcmahon714.github.io/Project-1//">
            <img alt="githubpagesicon" src={githubpagesicon}/></a>
            <a href="https://github.com/dmcmcmahon714/Project-1">
            <img alt="githubsmall" src={githubsmall}/></a></div>
          skillsix=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
        />
      </main>
          
            )
        }
    }
    
    export default Main
