import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import { NavBar } from '../components'

import Actualizar from '../pages/Actualizar'
import CrearEnvio from '../pages/CrearEnvio'
import Login from '../pages/Login'
import Lista from '../pages/Lista'
import Registro from '../pages/Registro'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Login/>} />
                <Route path="/login" exact element={<Login/>} />
                <Route path="/registro" exact element={<Registro/>} />
                <Route path="/crearenvio" exact element={<CrearEnvio/>} />
                <Route path="/listaPedidos" exact element={<Lista/>} />
                <Route path="/envio/:id" exact element={<Actualizar/>} />
            </Routes>
        </Router>
    )
}

export default App