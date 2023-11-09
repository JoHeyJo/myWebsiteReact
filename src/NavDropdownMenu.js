import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from './Nav';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function NavDropdownMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle split={false} variant="success" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><HashLink className="Nav-font" to="#Bio-about-me">About</HashLink></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link className="Nav-font" to="/portfolio">Portfolio</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-3">      <a className="Nav-font"
          href="https://github.com/JoHeyJo/myWebsiteReact/raw/main/public/Joannes_Figueroa_Resume.pdf"
        >Resume</a></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><HashLink className="Nav-font" to="#footer-content">Contact</HashLink></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavDropdownMenu;