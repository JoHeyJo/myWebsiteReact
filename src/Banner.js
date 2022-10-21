import React from "react";
import './Banner.css'
import './fontSize.css'

function Banner(){
  return (
    // <section className="Banner-container" id="Banner-text">
    <section className="Banner-container bannerFs">
      fullstack <br />swe <span>JavaScript <span className="pipes">|</span> React <span className="pipes">|</span> Python <span className="pipes">|</span> Flask</span>
    </section>
  )
}

export default Banner;