import '../components/styles/registro.css';
import React from "react";

const Registro = () => {
  return (
    <div>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
        </head>
        <div class="titulo">
            <h1 class="titulo-text">Registro de Usuario</h1>
        </div>
        
        <div class="formt">
            <form action="" method="get" name="form_actualizar" onsubmit="">


                <div class="form-group">
                    <label for="numeroID">Número de Identificación</label>
                    <input type="text" class="form-control" id="numeroID"/>

                </div>

                <div class="form-group">
                    <label for="nombres">Nombres</label>
                    <input type="text" class="form-control" id="nombres"/>

                </div>

                <div class="form-group">
                    <label for="apellidos">Apellidos</label>
                    <input type="text" class="form-control" id="apellidos"/>

                </div>

                <div class="form-group">
                    <label for="contrasena">Contraseña</label>
                    <input type="text" class="form-control" id="contrasena"/>

                </div>



                <div>
                    <button type="button" class="btn btn-outline-primary mr-3">Registrar</button>
                    <button type="button" class="btn btn-outline-secondary">Cancelar</button>

                </div>
            
            </form>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin="anonymous"></script>
    </div>
  );
}

export default Registro;