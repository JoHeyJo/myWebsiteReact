import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home"
import Portfolio from './Portfolio';
import './Nav.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/projects" element={<Portfolio/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
