import React from "react";
import './Bio.css'
import './fontSize.css'

function Bio() {
  return (
    <section id="Bio-about-me">
      <ul className="fsm" id="about-me-links container">
        <li className="arrow">Hi! I'm Joannes.</li>
        <li>Welcome to my page!</li>
        <li>11 year veteran of the bar industry</li>
        <li>Pursuing my childhood dream to play with computers </li>
        <li>Graduated from an immersive full stack web development program at Rithm School</li>
        <li>I am a full stack developer and I want to build software that makes technology more accessible to everyone</li>
      </ul>
    </section>
  )
}

export default Bio;