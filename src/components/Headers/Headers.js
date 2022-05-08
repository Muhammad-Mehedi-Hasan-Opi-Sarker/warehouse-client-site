import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Headers = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Revo Laptop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Manage Items</Nav.Link>
      <Nav.Link href="#deets">Add Items</Nav.Link>
      <Nav.Link href="#deets">My Items</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        LogOut
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Headers;