import React from "react";
import './Banner.css'
import './fontSize.css'

function renderFlask(windowWidth) {
  return windowWidth > 1595
    ? <span>Flask</span>
    : <i class="devicon-flask-original colored"></i>
}

function renderPython(windowWidth) {
  return windowWidth > 1368
    ? <span>Python<span className="pipes">|</span></span>
    : <span><i class="devicon-python-plain"></i><span className="pipes">|</span></span>
}

function renderReact(windowWidth) {
  return windowWidth > 951
    ? <span>React<span className="pipes">|</span></span>
    : <span><i class="devicon-react-original"></i><span className="pipes">|</span></span>
}

function renderTypeScript(windowWidth) {
  return windowWidth > 609
    ? <span>TypeScript<span className="pipes">|</span></span>
    : <span><i class="devicon-typescript-plain"></i><span className="pipes">|</span></span>

}

function Banner() {
  return (
    // <section className="Banner-container" id="Banner-text">
    <section className="Banner-container bannerFs">
      fullstack <br />swe {renderTypeScript(600)}{renderReact(900)}{renderPython(1300)}{renderFlask(1500)}
    </section>
  )
}

export default Banner;