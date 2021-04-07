import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import '../css/Nav.css';
const NavComponent=()=>{
return(
<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home" className="ml-5 mr-4">Free-To-Lance</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
  <a href="#"><i class="ml-4 fa fa-fw fa-search "></i> Browse</a> 
  <a href="#"><i class="ml-4 fa fa-fw fa-briefcase "></i> My Projects</a> 
  
    </Nav>
    <Nav>
    <a href="#"><i class="fa fa-fw fa-bell mr-4 fa-lg mt-2" ></i></a>
  <a href="#"><i class="fa fa-fw fa-commenting mr-4 fa-lg mt-2 "></i></a>   
  <button class="btn btn-primary mr-5">Post a Project</button>
  <a href="#"><i class="fa fa-fw fa-sign-in mr-5 pr-5 fa-lg mt-2">Signed</i></a>  
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
)}
export default NavComponent;
