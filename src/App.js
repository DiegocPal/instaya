import logo from "./components/resources/logo.png";
import "./components/styles/navbar.css";
import React from "react";
import Lista from "./components/pages/lista"
import Navbar from "./components/pages/navbar";
import Actualizar from "./components/pages/actualizar"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path='/lista' element={<Lista/>} />
            <Route path='/actualizar' element={<Actualizar/>} />
        </Routes>
      </Router>
  );
}

export default App;
