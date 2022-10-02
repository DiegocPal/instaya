import '../components/styles/actualizar.css';
import React from "react";
import { Button } from "react-bootstrap"

const Actualizar = () => {
  return (
    <div className="Actualizar">
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
        </head>
        <div class="titulo">
            <h1 class="titulo-text">Actualización de envíos</h1>
        </div>
        
        <div class="formt">
            <form action="" method="get" name="form_actualizar" onsubmit="">
                <div class="formc1">
                    <p>Fecha:<input type="date" id="fecha"name="fecha" /></p>
                    <p>Hora: <input type="time" id="hora" name="hora" /></p>
                </div>
                <div class="formc1">
                    <p>Largo:<input type="text" id="largo"name="largo" /></p>
                    <p>Ancho: <input type="text" id="ancho" name="ancho" /></p>
                    <p>Alto:<input type="text" id="alto"name="alto" /></p>
                    <p>Peso: <input type="text" id="peso" name="peso" /></p>
                </div>
                <div class="formc2">
                    <p>Dirección de recogida: <input type="text" id="dir_recogida" name="dir_recogida" /></p>
                    <p>Ciudad de recogida: <input type="text" id="ciu_recogida" name="ciu_recogida" /></p>
                    <p>Nombre destinatario: <input type="text" id="destinatario" name="destinatario" /></p>
                    <p>Cédula destinatario: <input type="text" id="id_destinatario" name="id_destinatario" /></p>
                    <p>Dirección de entrega: <input type="text" id="dir_entrega" name="dir_entrega" /></p>
                    <p>Ciudad de entrega: <input type="text" id="ciu_entrega" name="ciu_entrega" /></p>
                </div>
                <div class="formb">
                    <Button variant="primary">Actualizar Orden</Button>
                    <Button variant="primary">Eliminar Orden</Button>
                </div>
            </form>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </div>
  );
}

export default Actualizar;