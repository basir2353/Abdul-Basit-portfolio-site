import React from "react";
import { IconButton } from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Abdul Basit</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <div className="social-icons">
            <IconButton
              color="primary"
              component="a"
              href="https://www.linkedin.com/in/abdul-basit-1a56b3275"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
              component="a"
              href="mailto:abasit5612345@gmail.com"
              target="_blank"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              color="primary"
              component="a"
              href="https://github.com/basir2353"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="primary"
              component="a"
              href="https://www.instagram.com/mabdulbasitdogar/"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, .NET, ExpressJS, GraphQL, 
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python,React,TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
