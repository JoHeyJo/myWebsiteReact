import React from "react";
import './Banner.css'
import './fontSize.css'

function Banner() {
  return (
    <h1 className="Banner-container bannerFs">
      fullstack <br />swe <span className="fSStack">JavaScript <span className="pipes">|</span> React <span className="pipes">|</span> Python <span className="pipes">|</span> Flask</span>
    </h1>
  )
}

export default Banner;