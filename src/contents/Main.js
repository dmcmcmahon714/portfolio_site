import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../img/profile_pic.jpg';
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
import backtotop from '../img/backtotop.png'; 


class Main extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };
    render() {
        return (
            
        <main>
        <Section
            title="Education"
            subtitle="Software Engineering Immersive"
            dark={true}
            id="education"
            schoolone="General Assembly"
            datesone="December 2019 - May 2020"
            programtwo="B.A. in Communiciations - Journalism"
            schooltwo="DePaul University"
            datestwo="September 2009 - January 2011"
            backtotop=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
            />
        <Section
            title="Skills"
            dark={true}
            id="skills"
            skillone="HTML"
            skilltwo="CSS"
            skillthree="SCSS"
            skillthree="JS"
            skillfour="Node JS"
            skillfive="React JS"
            skillsix="Ruby"
            skillseven="Ruby on Rails"
            skilleight="JQUERY"
            skillnine="PostgresQL"
            skillten="Mongoose ODM"
            skilleleven="MongoDB"
            skilltwelve="Writing"
            skillthirteen="Communication"
            backtotop=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
            />
        <Section
            title="Contact"
            subtitle="Email: danielrichardmcmahon@gmail.com."
            skillone="Phone: +1(312)810-9540"
            skilltwo=<a href="https://github.com/dmcmcmahon714">Github Page</a>
            repo=<a href="https://www.linkedin.com/in/danmcmahondev/">LinkedIn</a>
            dark={true}
            id="contact"
            backtotop=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
            />
        <Section
            title="absoluteJAMS"
            subtitle="This is a full stack web forum built with Ruby on Rails using the devise gem and PostgresQL.  Commenting and likes with full CRUD functionality make an ideal environment for music discussion."
            dark={true}
            id="absoluteJAMS"
            repo=<a href="https://github.com/dmcmcmahon714/finalprojectrebuild">Github Repository</a>
            screenshot=<img src={AJscreenshot} alt="absoluteJAMS" width="900" height="600"/>
            link=<a href="https://protected-oasis-67383.herokuapp.com/">Demo</a>
            backtotop=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
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
          backtotop=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
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
          backtotop=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
        />
        <Section
          title="Daily Pain Tracker"
          subtitle="This is an app designed to allow users to easily record how a specific pain or ailment is progressing over time.  Ideally this would help doctors looking for more accurate self-reporting.  This is an MVC format app with full CRUD functinality.  The database was created with MongoDB.  Authentication was created with bcrypt and express-session to allow users to sign up, sign in, and log out, with sole access to their private data. "
          dark={true}
          id="dailypaintracker"
          repo=<a href="https://github.com/dmcmcmahon714/seir-projects2">Github Repository</a>
          screenshot=<img src={PaintrackerSS} alt="Gigglelibs" width="900" height="800"/>
          link=<a href="https://fierce-scrubland-02207.herokuapp.com/">Demo</a>
          backtotop=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
        />
        <Section
          title="Chicago Tow Find"
          subtitle="Chicago tow find is an html website that allows users to see if their car has been towed in Chicago on a given date.  The app is built with simple html, css, and javascript utilizing jquery.  The information is pulled from the official City of Chicago public API via AJAX request."
          dark={true}
          id="chicagotowfind"
          repo=<a href="https://github.com/dmcmcmahon714/Project-1">Github Repository</a>
          screenshot=<img src={ChicagotowfindSS} alt="Gigglelibs" width="900" height="1250"/>
          link=<a href="https://dmcmcmahon714.github.io/Project-1/">Demo</a>
          backtotop=<img src={backtotop} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
        />
      </main>
          
            )
        }
    }
    
    export default Main
