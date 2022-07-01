import React from "react";
import Header from "./Header"
import Banner from "./Banner"
import Nav from './Nav';
import Bio from './Bio';
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
  return (

    <Container fluid>

      <Row>
        <Header />
      </Row>

      <Row >
        <Col id="nav-sidebar" className='Nav-sidebar .d-sm-none.d-md-block' sm={2}>
          <Nav className=".d-sm-none.d-md-block" />
        </Col >

        <Col id="banner-bio" sm={10} style={{ backgroundColor: "aqua" }}>
          <Banner />
          <Bio />
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