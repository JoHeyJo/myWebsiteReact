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
       <HashLink className="Nav-font" to="/">About</HashLink>
       <a className="Nav-font"  href="https://github.com/JoHeyJo/joheyjo.github.io/blob/main/resume.pdf">Resume</a>
        <HashLink className="Nav-font" to="/">Contact</HashLink>
        <HashLink className="Nav-font" to="/">Experience</HashLink>
      </BrowserRouter>
  </Navbar>
 ) 
}


export default Nav