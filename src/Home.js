import React from "react";
import Header from "./Header"
import Banner from "./Banner"
import Nav from './Nav';
import Bio from './Bio';
import Footer from './Footer'
import Contact from "./Contact";
import { Container, Row, Col } from 'react-bootstrap';


function Home() {
  return (

    <Container fluid>

      <Row>
        <Header />
      </Row>

      <Row >
        <Col id="nav-sidebar" className='Nav-sidebar' sm={2}>
          <Nav className="" />
        </Col >

        <Col id="banner-bio" sm={10}>
          <Banner />
          <Bio id="Bio-about" />
          <Contact />
        </Col>
      </Row>

      <Row >
        <Row id='Footer-container'></Row>
        <Footer />
      </Row>

    </Container>
  )
}
export default Home
