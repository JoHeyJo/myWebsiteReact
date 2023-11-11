import React, { useState, useEffect } from "react";
import './Banner.css'
import './fontSize.css'

function renderTypeScript(windowWidth) {
  return windowWidth > 1080
    ? <span>TypeScript<span className="pipes">|</span></span>
    : <span><i class="devicon-typescript-plain"></i><span className="pipes">|</span></span>
}
function renderReact(windowWidth) {
  return windowWidth > 1275
  ? <span>React<span className="pipes">|</span></span>
  : <span><i class="devicon-react-original"></i><span className="pipes">|</span></span>
}

function renderPython(windowWidth) {
  return windowWidth > 1360
  ? <span>Python<span className="pipes">|</span></span>
  : <span><i class="devicon-python-plain"></i><span className="pipes">|</span></span>
}

function renderFlask(windowWidth) {
  return windowWidth > 1475
  ? <span>Flask</span>
  : <i class="devicon-flask-original"></i>
}
  

function Banner() {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  },[])

  return (
    <div className="Banner-container bannerFs">
      <h1 className="Banner-title bannerFs mb-0">fullstack</h1>
      <section className="Banner subBanner d-flex">
        <section className="Banner-subtitle bannerFs my-0">swe</section>
        <section className="Banner-devicons">
          {renderTypeScript(width)}{renderReact(width)}{renderPython(width)}{renderFlask(width)}
        </section>
      </section>
    </div>
  )
}

export default Banner;