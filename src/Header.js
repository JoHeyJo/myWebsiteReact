import React from "react";
import NavDropdownMenu from "./NavDropdownMenu";
import "./Header.css";
import { Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <header className="Header-bar">
      <Row className="align-items-center justify-content-center text-center">
        <Col xs="auto" className="d-block d-md-none">
          <NavDropdownMenu />
        </Col>
        <Col>
          <p className="d-none d-md-block">Joannes Figueroa</p>
          <p className="d-block d-md-none">JF</p>
        </Col>
      </Row>
    </header>
  )
}

export default Header;