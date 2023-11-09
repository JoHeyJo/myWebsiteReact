import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavDropdownMenu.css'
function NavDropdownMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='dark-outline' split={false} id="dropdown-basic">
        <FontAwesomeIcon icon={faBars} />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ background: "transparent" }}>
      {/* <Dropdown.Menu variant="success"> */}
        <Dropdown.Item style={{ background: "transparent" }}><HashLink className="Nav-font" to="#Bio-about-me">About</HashLink></Dropdown.Item>
        <Dropdown.Item style={{ background: "transparent" }}><Link className="Nav-font" to="/portfolio">Portfolio</Link></Dropdown.Item>
        <Dropdown.Item style={{ background: "transparent" }}>      <a className="Nav-font"
          href="https://github.com/JoHeyJo/myWebsiteReact/raw/main/public/Joannes_Figueroa_Resume.pdf"
        >Resume</a></Dropdown.Item>
        <Dropdown.Item style={{ background: "transparent" }}><HashLink className="Nav-font" to="#footer-content">Contact</HashLink></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavDropdownMenu;