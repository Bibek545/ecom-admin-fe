import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Header = () => {
 return (
    <Navbar expand="md" className="bg-dark" variant='dark'>
      <Container>
        <Link className="nav-link text-white" to="/">Ecommerce</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link text-white" to="/">Home</Link>
            <Link className="nav-link text-white" to="/signup">Signup</Link>
            <Link className="nav-link text-white" to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;