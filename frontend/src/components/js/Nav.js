import React from 'react';
import {Nav,Navbar,FormControl,Button,Form} from 'react-bootstrap';
import '../css/Nav.css';
const NavComponent=()=>{
  
  function SearchProjectsurl(event) {
    event.preventDefault();
   window.location = 'http://localhost:5000/SearchProjects';
 }
  function postProjecturl(event) {
    event.preventDefault();
   window.location = 'http://localhost:5000/postProject';
 }
 function logoutrequest(event) {
  event.preventDefault();
 window.location = 'http://localhost:5000/';
}
return(
<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="./dashboard" className="ml-5 mr-4">Free-To-Lance</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Form inline>
    {/* <FormControl type="text" placeholder="Search" className="mr-2" />
      <Button variant="outline-success" >Search</Button> */}
      <button class="btn btn-primary mr-5" onClick={SearchProjectsurl}>Browse</button>
    </Form>
    <div className="pl-5 pt-2 d-flex">
    <i style={{color:"white"}} className="mt-1 fa fa-fw fa-file"></i>
    <a href="./myProjects" className=" project ml-1" style={{color:"white"}}>Projects</a>
    </div>
    <div className="pl-5 pt-2 d-flex">
    <i style={{color:"white"}} className="mt-1 fa fa-fw fa-gear"></i>
    <a href="./settings" className=" project ml-1" style={{color:"white"}}>Settings</a>
    </div>
    {/* <div className="pl-5 pt-2 d-flex">
    <i style={{color:"white"}} className="mt-1 fa fa-id-card"></i>
    <a href="./dashboard" className=" project ml-1" style={{color:"white"}}>Dashboard</a>
    </div> */}
    </Nav>
    <Nav>
    <a href="#"><i class="fa fa-fw fa-bell mr-4 fa-lg mt-2" ></i></a>
  <a href="#"><i class="fa fa-fw fa-commenting mr-4 fa-lg mt-2 "></i></a>   
  <button class="btn btn-primary mr-5" onClick={(event) => { postProjecturl(event) }}>Post a Project</button>
  <a className="mr-5 pr-5 fa-lg mt-2 " onClick={logoutrequest} >LogOut</a>  
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
)}
export default NavComponent;
