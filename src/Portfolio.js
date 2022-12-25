import React, { useState } from "react";
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import memoryGameImg from "./img/memoryGameImg.png";
import sharebbImg from "./img/sharebbImg.png";
import joblyImg from "./img/joblyImg.png";
import warblerImg from "./img/warblerImg.png";
import "./Portfolio.css";
import "./Header.css";
import "./Nav.css";
import Button from 'react-bootstrap/Button';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container >
      <Row>
        <Col>
          <Navbar className="details">
            {/* <section> */}
              <Link onClick={(e) => handleSelect(0)} className="Nav-font fs-4" to=""
              >ShareBB</Link>
              <Link onClick={(e) => handleSelect(1)} className="Nav-font fs-4" to=""
              >Jobly</Link>
              <Link onClick={(e) => handleSelect(2)} className="Nav-font fs-4" to=""
              >Warbler</Link>
              <Link onClick={(e) => handleSelect(3)} className="Nav-font fs-4" to=""
              >Memory Game</Link>
            {/* </section> */}
          </Navbar>
        </Col>
        <Col>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}
            className="imgCard"
            interval={null}>

            <Carousel.Item>
              <a href="https://sharebb-fe.vercel.app/">
                <img
                  src={sharebbImg}
                  alt="sharebb slide"
                />
              </a>
              <Carousel.Caption className="caption">
                <h3>AirBnB clone</h3>
                <p>Create user, browse or add listings!</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href="https://jobly-frontend.vercel.app/">
                <img
                  src={joblyImg}
                  alt="jobly slide"
                />
              </a>
              <Carousel.Caption className="caption">
                <h3>Jobly: job listing board</h3>
                <p>Create user and browse through job listings.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href="https://warbler-warbler.herokuapp.com/signup">
                <img
                  src={warblerImg}
                  alt="warbler slide"
                />
              </a>
              <Carousel.Caption className="caption">
                <h3>Warbler: Twitter clone </h3>
                <p>Create user, follow user, add a message!</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href="https://memory-game-react-woad.vercel.app/">
                <img
                  src={memoryGameImg}
                  alt="memory game slide"
                />
              </a>
              <Carousel.Caption className="caption">
                <h3>Memory Game</h3>
                <p>Match randomly generated cards!</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </Col>
        <Col>
          {/* sharebb */}
          {index === 0 &&
            <>
              <ul className="details">
                <li className="details-font ">React | JavaScript | Flask | SQLAlchemy | Python </li>
                <li className="details-font ">Features user signup, authorization, and authentication.  </li>
                <li className="details-font ">Auth with JSON Web Tokens & password encryption with BCrypt.</li>
                <li className="details-font ">Relational database built with Flask and SQLAlchemy. </li>
              </ul>
              <Button href="https://sharebb-fe.vercel.app/" variant="outline-light">Demo</Button>{' '}
              <Button href="https://github.com/JoHeyJo/shareBB" variant="outline-light">GitHub</Button>
            </>
          }
          {/* jobly */}
          {index === 1 &&
            <>
              <ul className="details">
                <li className="details-font ">React | JavaScript | Express | SQL </li>
                <li className="details-font ">Features React integrated with Express RESTful API.</li>
                <li className="details-font ">All Routes protected with JSON Web Tokens.</li>
                <li className="details-font ">Passwords encrypted using BCrypt.</li>
              </ul>
              <Button href="https://jobly-frontend.vercel.app/" variant="outline-light">Demo</Button>{' '}
              <Button href="https://github.com/JoHeyJo/jobly-frontend" variant="outline-light">GitHub</Button>
            </>
          }
          {/* warbler */}
          {index === 2 &&
            <>
              <ul className="details">
                <li className="details-font ">Python | Flask | Jinja | SQLAlchemy | PostgreSQL </li>
                <li className="details-font ">RESTful API allow users to add, delete, like, unlike messages, and send direct messages.</li>
                <li className="details-font ">Client-side and server-side auth with Flask session, local storage, Flask global variables</li>
                <li className="details-font ">Unit and integration testing done with Python Unittest.</li>
              </ul>
              <Button href="https://warbler-warbler.herokuapp.com/signup" variant="outline-light">Demo</Button>{' '}
              <Button href="https://github.com/JoHeyJo/warbler" variant="outline-light">GitHub</Button>
            </>
          }
          {/* memory game */}
          {index == 3 &&
            <>
              <ul className="details">
                <li className="details-font ">React | TypeScript </li>
                <li className="details-font ">Asynchronously pings <a href="https://www.deckofcardsapi.com/"> cards API </a>to generate random cards</li>
                <li className="details-font ">Interactive UI visually “flips” cards, matches identical cards, and executes win condition</li>
                <li className="details-font "></li>
              </ul>
              <Button href="https://memory-game-react-woad.vercel.app/" variant="outline-light">Demo</Button>{' '}
              <Button href="https://github.com/JoHeyJo/memory-game-react" variant="outline-light">GitHub</Button>
            </>
          }
        </Col>
      </Row>
    </Container>



  );
}

export default Portfolio;

