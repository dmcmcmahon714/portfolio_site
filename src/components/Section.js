import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import backtotop from '../img/backtotop.png'; 
import Nav from '../components/Nav'



export default function Section({ title, subtitle, dark, id, link, screenshot, repo, backendrepo, schoolone, datesone, programtwo, schooltwo, datestwo, skillone, skilltwo, skillthree, skillfour, skillfive, skillsix, skillseven, skilleight, skillnine, skillten, skilleleven, skilltwelve, skillthirteen, backtotop  }) {


  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{schoolone}</p>
        <p>{datesone}</p>
        <p>{programtwo}</p>
        <p>{schooltwo}</p>
        <p>{datestwo}</p>
        <p>{skillone}</p>
        <p>{skilltwo}</p>
        <p>{skillthree}</p>
        <p>{skillfour}</p>
        <p>{skillfive}</p>
        <p>{skillsix}</p>
        <p>{skillseven}</p>
        <p>{skilleight}</p>
        <p>{skillnine}</p>
        <p>{skillten}</p>
        <p>{skilleleven}</p>
        <p>{skilltwelve}</p>
        <p>{skillthirteen}</p>
        <p>{link}</p>
        <p>{repo}</p>
        <p>{backendrepo}</p>
        <p>{screenshot}</p>
        <p>{backtotop}</p>
       
      </div>
    </div>
  );
}