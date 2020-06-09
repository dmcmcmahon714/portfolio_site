import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import backtotop from '../img/backtotop.png'; 
import Nav from '../components/Nav'



export default function Section({ title, subtitle, dark, id, link, screenshot, repo, backendrepo, schoolone, datesone, programtwo, schooltwo, datestwo, skillone, skilltwo, skillthree, skillfour, skillfive, skillsix, skillseven, skilleight, skillnine, skillten, skilleleven, skilltwelve, skillthirteen, backtotop, skillscss, github, linkedin, phone  }) {


  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p className="education">{subtitle}</p>
        <p className="section1">{phone}</p>
        <p className="education">{datesone}</p>
        <p className="education">{schoolone}</p>
        <p className="education">{programtwo}</p>
        <p className="education">{datestwo}</p>
        <p className="education">{schooltwo}</p>
        <p className="skillssection">{skillone}</p>
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
        <p className="linklogos">{github}</p>
        <p className="linklogos">{linkedin}</p>
        <p className="section1">{screenshot}</p>
        <p className="link">{link}</p>
        <p className="section1">{repo}</p>
        <p className="section1">{backendrepo}</p>
        <p className="backtotop">{backtotop}</p>
       
      </div>
    </div>
  );
}