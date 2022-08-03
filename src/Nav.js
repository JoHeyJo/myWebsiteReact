import React from "react";
import { ExternalLink } from "react-external-link";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

import "./Nav.css"


function Nav() {
  return (
    <Navbar className="Nav-navbar d-none d-sm-flex fs-4">
        <HashLink className="Nav-font" to="#Bio-about-me">About</HashLink>
      <a className="Nav-font" href="https://github.com/JoHeyJo/myWebsiteReact/raw/0bfbf9246a34fbd31e5f9b54fc18a0f92c35bfe8/resume.pdf"> Download Resume</a>
        <HashLink className="Nav-font" to="#footer-content">Contact</HashLink>
        <Link className="Nav-font" to="/portfolio">Portfolio</Link> 
    </Navbar>
  )
}

export default Nav