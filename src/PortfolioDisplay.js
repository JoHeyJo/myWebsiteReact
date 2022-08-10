import React from "react";
import Nav from "./Nav";
import PortfolioHeader from "./PortfolioHeader";
import Portfolio from "./Portfolio";
import PortfolioFooter from "./PortfolioFooter";
import './Footer.css'
import './PortfolioHeader.css'
import { Container, Row } from "react-bootstrap";

function PortfolioDisplay(){
  return(
    <Container fluid>
      <Row>
        <PortfolioHeader/>
      </Row>
      <Row>
        {/* <Col id="nav-sidebar" className='Nav-sidebar .d-sm-none.d-md-block' sm={2}>
          <Nav className=".d-sm-none.d-md-block" />
        </Col > */}
        {/* <Col> */}
        <Portfolio/>
        {/* </Col> */}
      </Row>
      <Row>
        <Row id='Footer-container'></Row>
        <PortfolioFooter/>
      </Row>

    </Container>
  )
}

export default PortfolioDisplay;