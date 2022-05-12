import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo3.png'
const Headers = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/' href="#home"><img style={{height:'40px'}} src={logo} alt="" />Revo Laptop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">


            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/home' href="#deets">Home</Nav.Link>
              <Nav.Link as={Link} to='/manageitems' href="#deets">Manage Items</Nav.Link>
              <Nav.Link as={Link} to='/additems' href="#deets">Add Items</Nav.Link>
              <Nav.Link as={Link} to='/myitems' href="#deets">My Items</Nav.Link>
              <Nav.Link as={Link} to='/login' eventKey={2} href="#memes">
                LogIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;