import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home"
import Portfolio from './Portfolio';
import PortfolioDisplay from './PortfolioDisplay'
import './Nav.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<PortfolioDisplay/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
