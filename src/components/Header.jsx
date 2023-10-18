import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


function Header({ cartCount }) {
  return (
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                  <div className='cart-button-container'>
      <Button className='cart-button' variant="outline-dark">
        <FontAwesomeIcon icon={faCartShopping} /> Cart <span id='number-count'>{cartCount}</span>
      </Button>
    </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
