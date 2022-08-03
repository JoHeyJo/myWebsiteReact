import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./PortfolioHeader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function PortfolioHeader(){
  return (
    <header className="Portfolio-Header-bar">
      <Link className="Nav-font" to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link> 
      <p className="d-none d-sm-block">Portfolio</p>
      <p className="d-block d-sm-none">Portfolio</p>
      <p> </p>
    </header>
  )
}

export default PortfolioHeader;