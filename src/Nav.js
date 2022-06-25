import React from "react";
import { ExternalLink } from "react-external-link";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

import "./Nav.css"

// TODO: 

function Nav(){
 return (
   <Navbar className="Nav-navbar d-none d-sm-flex fs-4">
      <BrowserRouter>
       <HashLink className="Nav-font" to="#Bio-about-me">About</HashLink>
       <a className="Nav-font" href="https://github.com/JoHeyJo/myWebsiteReact/blob/main/resume.pdf">Resume</a>
       <HashLink className="Nav-font" to="#footer-content">Contact</HashLink>
       <HashLink className="Nav-font" to="#footer-content">Experience</HashLink>
      </BrowserRouter>
  </Navbar>
 ) 
}


export default Nav