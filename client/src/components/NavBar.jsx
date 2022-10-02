import logo from "./resources/logo.png";
import './styles/navbar.css';
import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div class="logo">
          <img src={logo} alt="logo"/>
        </div>
          <ul class="nav-enlaces">
            <li><a href="/listaPedidos" class="list-element">Lista de Envíos</a></li>
            <li><a href="/crearenvio" class="list-element">Crear Envío</a></li>
            <li><a href="/envio/:id" class="list-element">Actualizar Envío</a></li>
          </ul>
        <div class="login_button">
          <a href="/login" id="login-text">Login</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;