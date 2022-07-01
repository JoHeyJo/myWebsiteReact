import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home"
import Projects from './Projects';
import './Nav.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
