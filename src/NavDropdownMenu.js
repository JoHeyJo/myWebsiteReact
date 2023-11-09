import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavDropdownMenu() {
  return (
    <Navbar expand="sm" bg="dark" variant="dark-outline">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto d-sm-none">
            <NavDropdown.Item href="#action/1">Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">Option 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3">Option 3</NavDropdown.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavDropdownMenu;
