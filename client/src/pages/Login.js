import '../components/styles/login.css';
import React from "react";
import imagen from "../components/resources/usuario.png";

const Login = ()=> {
  return (
    <div>
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
        </head>
      <div class="titulo">
        <h1 class="titulo-text">Inicio de Sesión</h1>
    </div>
    <div class="formt">
        <form action="" method="get" name="form_actualizar" onsubmit="">
            <div >
                <img src={imagen} alt="Insta-YA" width="200"/>
            </div>

            <div class="form-group">
                <input type="text" id="cedula" name="cedula" placeholder="Numero de Identificación" class="form-control"/>

            </div>
            <div class="form-group">
                <input type="password" id="contraseña" name="contraseña" placeholder="Contraseña" class="form-control"/>

            </div>
           
            
            <div class="text-center mb-4">
                <button type="button" class="btn btn-outline-primary">Iniciar Sesión</button>
                

            </div>
           

            <div class="text-center">
                <p>¿No tienes cuenta? Regístrate</p>
                
                <a href="/Registro" class="btn btn-sm btn-outline-secondary">Registrarse</a>

            </div>
        </form>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </div>
  );
}

export default Login;