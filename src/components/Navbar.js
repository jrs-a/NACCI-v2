import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Philippine Eco-Tourism</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav variant="light">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/ActivitiesPage">Activities</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/About">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Admin">Admin Panel</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;