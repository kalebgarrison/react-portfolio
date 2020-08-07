import React from "react";
import "./style.css"

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div id="about" className="col-sm-7">
          <h2 className="head">About Me</h2>
          <hr />
          <img src="/images/kaleb.jpg" alt="Kaleb" />
          <p>
            Hi! My name is Kaleb Garrison. I was born and raised in Atlanta.
            Currently, I live in Ball Ground, Ga with my wife and two miniature
            dachshunds. Some of my hobbies are music and sports. I have played
            the bass guitar for over 10 years and I love watching the Atlanta
            Falcons play on Sunday. Even though they don't like winning too much
            as of late.
          </p>
          <p>
            I am currently enrolled in the Full Stack Developer Bootcamp at
            Georgia Tech. I am currently looking for my next adventure as a
            software developer. I have over 6 years of experience working in
            support and have experience using the following: Slack, Zoom,
            Zendesk, HelpScout, LivePerson, GitHub, Zapier, HipChat, HTML, CSS,
            JavaScript, jQuery, Node.js, Express, MySQL, MongoDB, React, Notion, Atlassian, VS Code, Sketch, Photoshop,
            InVisionApp, MailChimp, Appcues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
