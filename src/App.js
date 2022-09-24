import logo from "./components/resources/logo.png";
import "./components/styles/navbar.css";
import React from "react";
import Lista from "./components/pages/lista"
import Navbar from "./components/pages/navbar";
import Actualizar from "./components/pages/actualizar"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Crear from "./components/pages/CrearEnvio"
import Login from "./components/pages/login"
import Registro from "./components/pages/registro"


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/lista' element={<Lista/>} />
            <Route path='/actualizar' element={<Actualizar/>} />
            <Route path='/crear' element={<Crear />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Registro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
