import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import Banner from "./Banner"
import Nav from './Nav';
import Bio from './Bio';
import Footer from './Footer'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Grid, Container, Row, Col } from 'react-bootstrap'
import './Nav.css'



function App() {
  return (
    <>


      <Container fluid>
        {/* HEADER */}
        <Row>
          <Header />
        </Row>
      {/* </Container> */}

      {/* <Container fluid> */}
        <Row >
          {/* NAV */}
          <Col className='Nav-sidebar .d-sm-none.d-md-block' sm={2}>
            <Nav className=".d-sm-none.d-md-block"/>
          </Col >
          {/* BANNER */}
          <Col sm={10} style={{backgroundColor:"aqua"}}>
            <Banner />
            {/* BIO */}
            <Bio />
          </Col>
        </Row>
        <Row >
        <Row id='Footer-container'></Row>
        {/* FOOTER */}
          <Footer />
        </Row>

      </Container>
    </>
  );
}

export default App;
