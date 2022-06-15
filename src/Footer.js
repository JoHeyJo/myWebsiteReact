import React from "react";
import './Footer.css'

function Footer(){
  return (
    <footer id="Footer-bar">

      {/* <section id="Footer-bar">
      </section> */}
      <section id="footer-content">
        <p className="d-none d-lg-block">510-931-3588</p>
        {/* <p className="hidden-contact-text"> --------</p> */}
        <p id="contact-text">contact</p>
        {/* <p className="hidden-contact-text"> --------</p> */}
        <p className="d-none d-lg-block">JPF0628@GMAIL</p>
      </section>
    </footer>
  )
}

export default Footer