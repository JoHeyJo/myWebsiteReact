import React, { useState } from "react";
import ReactDOM from "react-dom";
import PortfolioHeader from './PortfolioHeader';
import Carousel from 'react-bootstrap/Carousel';
import memoryGameImg from "./img/memoryGameImg.png";
import sharebbImg from "./img/sharebbImg.png";
import joblyImg from "./img/joblyImg.png";
import "./Portfolio.css";
import "./Header.css";

function Portfolio() {
  // const [activeSlide, setActiveSlide] = useState(0);

  return (
      // <section id="portfolio-container">
        <Carousel controls={false} className="imgCard" interval={null}>
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
        </Carousel>
      // </section>
  );
}

export default Portfolio;

