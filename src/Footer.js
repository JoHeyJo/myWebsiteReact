import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(){
  return (
    <footer id="Footer-bar">

      <section id="footer-content">
        <p className="d-none d-lg-block">510-931-3588</p>
        {/* <p><FontAwesomeIcon icon="fa-brands fa-instagram" /></p> */}
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        
        <p id="contact-text">contact</p>
        <p className="d-none d-lg-block">JPF0628@GMAIL</p>
        
      </section>
      
    </footer>
  )
}

export default Footer