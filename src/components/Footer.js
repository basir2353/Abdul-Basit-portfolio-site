import React from "react";
import { IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <IconButton
          color="primary"
          component="a"
          href="https://www.instagram.com/mabdulbasitdogar/"
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://twitter.com/mabdulbasi1096?t=gA2Yx3B6pOJogf-F_kUh0g&s=09"
          target="_blank"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://www.facebook.com/mabdulbasit.dogar.1"
          target="_blank"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://www.linkedin.com/in/abdul-basit-1a56b3275"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </div>
      <p> &copy; 2023 abdulbasit.com</p>
    </div>
  );
}

export default Footer;
