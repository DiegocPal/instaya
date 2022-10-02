import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../components/styles/CrearEnvio.css';

function CrearEnvio() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
        </head>
      <div className="titulo">
        <h1 className="titulo-text">Creación de envíos</h1>
      </div>
      <Form>
        <div className="create-form">
        <div className="tiempo">
        <Form.Group className="mb-3" controlId="formBasicDate">
            {/* Fecha del envio */}
            <div className="text-left" id="1L-T"><Form.Label>Fecha</Form.Label></div>
            <div className="box-left" id="1L-B"><Form.Control type="date"/></div>
            <div className="text-left" id="2L-T"><Form.Text className="text-muted">
            Ingrese la fecha para el envío.
            </Form.Text></div>
        </Form.Group>
            {/* Hora del envío */}
        <Form.Group className="mb-3" controlId="formBasicTime">
            <div className="text-right"><Form.Label>Hora</Form.Label></div>
            <div className="box-right"><Form.Control type="time" /></div>
            <div className="text-right"><Form.Text className="text-muted">
            Ingrese la hora para el envío.
            </Form.Text></div>
        </Form.Group>
        </div>
        
            {/* Tamaño del paquete */}
        <div className="tamaño">
        <Form.Group className="mb-3" controlId="formBasicSize">
            <div className="text-left"><Form.Label>Largo</Form.Label></div>
            <div className="box-left"><Form.Control type="number" placeholder="Longitud en centímetros" /></div>
            <div className="text-left"><Form.Label>Ancho</Form.Label></div>
            <div className="box-left"><Form.Control type="number" placeholder="Ancho en centímetros" /></div>
            <div className="text-left"><Form.Label>Alto</Form.Label></div>
            <div className="box-left"><Form.Control type="number" placeholder="Altura en centímetros" /></div>
        </Form.Group>
        </div>

            {/* Informacion de entrega y recogida */}
            <div className="origen-destino">
        <Form.Group className="mb-3" controlId="formBasicSize">
            <Form.Label className="label">Dirección de recogida</Form.Label>
            <Form.Control className="input" type="text" placeholder="Ingrese la dirección donde se recogerá el paquete" />
            <Form.Label className="label">Ciudad de recogida</Form.Label>
            <Form.Control className="input" type="text" placeholder="Ingrese la ciudad donde se recogerá el paquete" />
            <Form.Label className="label">Nombre del destinatario</Form.Label>
            <Form.Control className="input" type="text" placeholder="Ingrese el nombre de la persona o entidad que recibirá el paquete" />
            <Form.Label className="label">Cedula/Nit del destinatario</Form.Label>
            <Form.Control className="input" type="text" placeholder="Ingrese el numero de identificación de la persona o entidad que recibirá el paquete" />
            <Form.Label className="label">Dirección de entrega</Form.Label>
            <Form.Control className="input" type="text" placeholder="Ingrese la dirección de la persona o entidad que recibirá el paquete" />
            <Form.Label className="label">Ciudad de entrega</Form.Label>
            <Form.Control className="input" type="text" placeholder="Ingrese la donde está ubicada la persona o entidad que recibirá el paquete" />
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