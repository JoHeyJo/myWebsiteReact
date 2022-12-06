import React from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import "./Nav.css"


function Nav() {
  return (
    <Navbar className="Nav-navbar d-none d-sm-flex fs-4">
      <HashLink className="Nav-font" to="#Bio-about-me">About</HashLink>
      <a className="Nav-font"
        href="https://github.com/JoHeyJo/myWebsiteReact/raw/cf03aedf624be6c1071a5514abfee8f3d588314e/public/Joannes_Figueroa_Resume.pdf"
      >Resume</a>
      <HashLink className="Nav-font" to="#footer-content">Contact</HashLink>
      <Link className="Nav-font" to="/portfolio">Portfolio</Link>
    </Navbar>
  )
}

export default Nav