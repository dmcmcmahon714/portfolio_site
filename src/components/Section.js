  import React from "react";

export default function Section({ title, subtitle, dark, id, link, screenshot, repo, backendrepo }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{link}</p>
        <p>{repo}</p>
        <p>{backendrepo}</p>
        <p>{screenshot}</p>
      </div>
    </div>
  );
}