import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/hodori0719"><GitHubIcon /></a>
        <a href="mailto: june.yoo@yale.edu"><EmailIcon /></a>
        <a href="https://www.linkedin.com/in/juneyoo/"><LinkedInIcon /></a>
        <a href="https://www.instagram.com/8odori/"><InstagramIcon /></a>
      </div>
      <p> &copy; 2022 june yoo</p>
    </div>
  );
}

export default Footer;