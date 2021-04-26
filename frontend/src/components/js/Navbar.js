import React from 'react';
import { Navbar, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';
import image5 from '../../image/5.jpg'
const NavbarComponent = () =>
{ function loginurl(event) {
  event.preventDefault();
  window.location = 'http://localhost:5000/login';
}
function signupurl(event) {
  event.preventDefault();
  window.location = 'http://localhost:5000/signup';
}

  return (
  <Navbar variant="dark" bg="dark" expand="lg">

    <Navbar.Brand className="ml-2"style={{color:"white"}} href="./home">
      <img alt="" src={image5} width="30" height="30" className="d-inline-block  align-top" />{' '}
       Free to Lance
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav ml-3">
      <Nav style={{color:"white"}} className="mr-auto ml-5">
        <Nav.Link  href="./howWorks">How it Works?</Nav.Link>
      </Nav>
      <Button style={{color:"skyblue"}} variant="outline-primary" className="mr-3" onClick={(event) =>{loginurl(event)}}>Login</Button>{' '}
      <Button style={{color:"skyblue"}} variant="outline-primary" className="mr-3" onClick={(event) =>{signupurl(event)}}>Signup</Button>{' '}

    </Navbar.Collapse>
  </Navbar>
)}

export default NavbarComponent;
