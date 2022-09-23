import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"

function NavbarElements() {
  return (
    <>
      <div className="nav-bar"><Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">InstaYa</Navbar.Brand>
          <Nav className="me-auto">
            <div className="nav-list"><Nav.Link href="#list">Lista de envios</Nav.Link></div>
            <div className="nav-create"><Nav.Link href="#create">Crear envio</Nav.Link></div>
            <div className="nav-update"><Nav.Link href="#update">Actualizar envio</Nav.Link></div>
            <div className="nav-login"><Nav.Link href="#login">Iniciar sesión</Nav.Link></div>
          </Nav>
        </Container>
      </Navbar></div>
    </>
  );
}

export default NavbarElements;