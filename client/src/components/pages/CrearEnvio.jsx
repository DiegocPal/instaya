import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/CrearEnvio.css';
import { useEffect, useState } from "react";

function CrearEnvio() {
  const [envios, setEnvios] = useState([]);

  const token = localStorage.getItem("token");

  /* Fetching the data from the backend and setting the state of activities to the data. */
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/envios`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await result.json();
      setEnvios(data);
    };
    fetchData();
  }, [token]);

  /**
   * When the user clicks the submit button, the function will prevent the default action of the form,
   * create a new activity object with the name and time values from the form, and then send a POST
   * request to the backend to create a new activity
   */

  // Conectando front y back:
  const addEnvio = async (event) => {
    event.preventDefault();

    const newEnvio = {
      fecha: event.target.fecha.value,
      hora: event.target.hora.value,
      largo: event.target.largo.value,
      ancho: event.target.ancho.value,
      alto: event.target.alto.value,
      direccionRecogida: event.target.direccionRecogida.value,
      ciudadRecogida: event.target.ciudadRecogida.value,
      nombreDestinatario: event.target.nombreDestinatario.value,
      idDestinatario: event.target.idDestinatario.value,
      direccionEntrega: event.target.direccionEntrega.value,
      ciudadEntrega: event.target.ciudadEntrega.value,
    };
    
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/envio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEnvio),
    });
    
    // sets inputs empty after clicking submit
    event.target.fecha.value = "";
    event.target.hora.value = "";
    event.target.largo.value = "";
    event.target.ancho.value = "";
    event.target.alto.value = "";
    event.target.direccionRecogida.value = "";
    event.target.ciudadRecogida.value = "";
    event.target.nombreDestinatario.value = "";
    event.target.idDestinatario.value = "";
    event.target.direccionEntrega.value = "";
    event.target.ciudadEntrega.value = "";
    
    // reloads the window after sending request
    window.location.reload(); 
    };
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
        </head>
      <div className="titulo">
        <h1 className="titulo-text">Creación de envíos</h1>
      </div>

      <Form onSubmit={addEnvio}>
      <div className="create-form">
        <div className="tiempo">
        <Form.Group className="mb-3" controlId="formBasicDate">
            {/* Fecha del envio */}
            <div className="text-left" id="1L-T"><Form.Label>Fecha</Form.Label></div>
            <div className="box-left" id="1L-B"><Form.Control type="date" id="fecha" name="fecha"/></div>
            <div className="text-left" id="2L-T"><Form.Text className="text-muted">
            Ingrese la fecha para el envío.
            </Form.Text></div>
        </Form.Group>
            {/* Hora del envío */}
        <Form.Group className="mb-3" controlId="formBasicTime">
            <div className="text-left"><Form.Label>Hora</Form.Label></div>
            <div className="box-right"><Form.Control type="time" id="hora" name="hora"/></div>
            <div className="text-right"><Form.Text className="text-muted">
            Ingrese la hora para el envío.
            </Form.Text></div>
        </Form.Group>
        </div>
        
            {/* Tamaño del paquete */}
        <div className="tamaño">
        <Form.Group className="mb-3" controlId="formBasicSize">
            <div className="text-left"><Form.Label>Largo</Form.Label></div>
            <div className="box-left"><Form.Control type="number" id="largo" name="largo" placeholder="Longitud en centímetros" /></div>
            <div className="text-left"><Form.Label>Ancho</Form.Label></div>
            <div className="box-left"><Form.Control type="number" id="ancho" name="ancho" placeholder="Ancho en centímetros" /></div>
            <div className="text-left"><Form.Label>Alto</Form.Label></div>
            <div className="box-left"><Form.Control type="number" id="alto" name="alto" placeholder="Altura en centímetros" /></div>
        </Form.Group>
        </div>

            {/* Informacion de entrega y recogida */}
            <div className="origen-destino">
        <Form.Group className="mb-3" controlId="formBasicSize">
            <Form.Label className="label">Dirección de recogida</Form.Label>
            <Form.Control className="input" id="direccionRecogida" name="direccionRecogida" type="text" placeholder="Ingrese la dirección donde se recogerá el paquete" />
            <Form.Label className="label">Ciudad de recogida</Form.Label>
            <Form.Control className="input" type="text" id="ciudadRecogida" name="ciudadRecogida" placeholder="Ingrese la ciudad donde se recogerá el paquete" />
            <Form.Label className="label">Nombre del destinatario</Form.Label>
            <Form.Control className="input" type="text" id="nombreDestinatario" name ="nombreDestinatario" placeholder="Ingrese el nombre de la persona o entidad que recibirá el paquete" />
            <Form.Label className="label">Cedula/Nit del destinatario</Form.Label>
            <Form.Control className="input" type="text" id="idDestinatario" name ="idDestinatario" placeholder="Ingrese el numero de identificación de la persona o entidad que recibirá el paquete" />
            <Form.Label className="label">Dirección de entrega</Form.Label>
            <Form.Control className="input" type="text" id="direccionEntrega" name="direccionEntrega"  placeholder="Ingrese la dirección de la persona o entidad que recibirá el paquete" />
            <Form.Label className="label">Ciudad de entrega</Form.Label>
            <Form.Control className="input" type="text" id="ciudadEntrega" name="ciudadEntrega" placeholder="Ingrese la donde está ubicada la persona o entidad que recibirá el paquete" />
        </Form.Group>
        </div>

        <div className="submit">
        <Button variant="primary" type="submit">
            Crear orden
        </Button>
        </div>
        </div>
      </Form>
    </>
  );
}

export default CrearEnvio;