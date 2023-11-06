import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavDropdown() {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1">Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">Option 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3">Option 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavDropdown;
