import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthenticateNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand>Instagram</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-nav-dropdown">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/signin">Log In</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup">Create an Account</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AuthenticateNavbar;
