import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import backtotop from '../img/backtotop.png'; 
import Nav from '../components/Nav'



export default function Section({ title, subtitle, dark, id, link, screenshot, repo, backendrepo, schoolone, datesone, programtwo, schooltwo, datestwo, skillone, skilltwo, skillthree, skillfour, skillfive, skillsix, skillseven, skilleight, skillnine, skillten, skilleleven, skilltwelve, skillthirteen, backtotop, skillscss, github, linkedin  }) {


  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p className="section1">{subtitle}</p>
        <p className="section1">{datesone}</p>
        <p className="section1">{schoolone}</p>
        <p className="section1">{programtwo}</p>
        <p className="section1">{datestwo}</p>
        <p className="section1">{schooltwo}</p>
        <p className="skillssection">{skillone}</p>
        <p className="logos">{github}</p>
        <p className="logos">{linkedin}</p>
        <p className="skillssection">{skilltwo}</p>
        <p className="skillssection">{skillscss}</p>
        <p className="skillssection">{skillthree}</p>
        <p className="skillssection">{skillfour}</p>
        <p className="skillssection">{skillfive}</p>
        <p className="skillssection">{skillsix}</p>
        <p className="skillssection">{skillseven}</p>
        <p className="skillssection">{skilleight}</p>
        <p className="skillssection">{skillnine}</p>
        <p className="skillssection">{skillten}</p>
        <p className="skillssection">{skilleleven}</p>
        <p className="skillssection">{skilltwelve}</p>
        <p className="skillssection">{skillthirteen}</p>
        <p className="section1">{link}</p>
        <p className="section1">{repo}</p>
        <p className="section1">{backendrepo}</p>
        <p className="section1">{screenshot}</p>
        <p>{backtotop}</p>
       
      </div>
    </div>
  );
}