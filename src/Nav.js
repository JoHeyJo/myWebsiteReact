import React from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

// import "./Nav.css"


function Nav() {
  return (
    <Navbar className="Nav-navbar d-none d-md-flex fs-4">
      <HashLink className="Nav-font" to="#Bio-about-me">About</HashLink>
      <Link className="Nav-font" to="/portfolio">Portfolio</Link>
      <a className="Nav-font"
        href="https://github.com/JoHeyJo/myWebsiteReact/raw/main/public/Joannes_Figueroa_Resume.pdf"
      >Resume</a>
      <HashLink className="Nav-font" to="#footer-content">Contact</HashLink>
    </Navbar>
  )
}

export default Nav