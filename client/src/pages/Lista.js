import '../components/styles/lista.css';
import React from "react";
// import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button"

const Lista = () => {
  return (
    <div className="Lista">
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
        </head>
        <div class="titulo">
            <h1 class="titulo-text">Lista de envíos</h1>
        </div>
        <table class="tabla table table-striped table-bordered responsive">
            <thead class="thead-light">
                <tr>
                    <th scope="col">N°</th>
                    <th scope="col">Código</th>
                    <th scope="col">Fecha de Creación</th>
                    <th scope="col">Ciudad de Entrega</th>
                    <th scope="col">Dirección de Entrega</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Ciudad de Recogida</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>051121004</td>
                    <td>05 NOV 21</td>
                    <td>San José Guaviare</td>
                    <td>Diag 23 #65-23</td>
                    <td>Por recoger</td>
                    <td>Popayan</td>
                    <td><Button variant="primary">Eliminar</Button></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>051121003</td>
                    <td>05 NOV 21</td>
                    <td>Florencia</td>
                    <td>Cll 23 #35-23</td>
                    <td>En transito</td>
                    <td>Buga</td>
                    <td><Button variant="primary">Eliminar</Button></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>230621002</td>
                    <td>23 JUN 21</td>
                    <td>Medellin</td>
                    <td>Cll 56 #45-87</td>
                    <td>Cancelado</td>
                    <td>Bucaramanga</td>
                    <td><Button variant="primary">Eliminar</Button></td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>170919001</td>
                    <td>17 SEP 19</td>
                    <td>Cali</td>
                    <td>Cra 34 #34-90</td>
                    <td>Entregado</td>
                    <td>Bucaramanga</td>
                    <td><Button variant="primary">Eliminar</Button></td>
                </tr>
            </tbody>
        </table>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </div>
  );
}

export default Lista;