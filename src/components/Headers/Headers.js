import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link as Button, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo/logo3.png'
const Headers = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" style={{color:'red',backgroundColor:'#D3D3D3'}}>
        <Container>
          <Navbar.Brand as={Button} to='/' href="#home"><img style={{ height: '40px' }} src={logo} alt="" />Revo Laptop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link as={Button} to='/home' href="#deets">Home</Nav.Link>
              <Nav.Link as={Button} to='/manageitems' href="#deets">Manage Items</Nav.Link>
              <Nav.Link as={Button} to='/additems' href="#deets">Add Items</Nav.Link>
              <Nav.Link as={Button} to='/myitems' href="#deets">My Items</Nav.Link>
              <Nav.Link as={Button} to='/blog' href="#deets">Blog</Nav.Link>
              {
                user ? 
                <button className='btn' style={{color:'white'}} onClick={logOut}>SingOut</button> :
                  <Nav.Link as={Link} to='/login' eventKey={2}>
                    LogIn
                  </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;