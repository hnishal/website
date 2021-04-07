import React from 'react';
import { Form, Col, NavDropdown, Dropdown, DropdownButton, InputGroup, Row, Card, Table, Container } from 'react-bootstrap';
import '../css/MyProjects.css';
import Footer from './Footer';
import NavComponent from './Nav';
const ProjectsComponent = () => {
    return (
        <div className="overflow-hidden">
            <div>
            <NavComponent/>
            </div>
            <h1 className="mt-2 ml-5 mt-4">Projects</h1>
            <h3 className="ml-5 pl-5 mt-5">Bids</h3>
            <div className="row mt-5 sm-mt-2">
                <div className="col-lg-9 col-md-6 col-sm-5 overflow-hidden">
                    <Form.Row className="ml-5 pl-5">
                        <Form.Group as={Col}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <i className="fa fa-fw fa-search"></i>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Search Projects"
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>

                </div>
                <div >
                   
                    <NavDropdown className="drop1" title="Show">
                        <NavDropdown.Item >10</NavDropdown.Item>
                        <NavDropdown.Item >20</NavDropdown.Item>
                        <NavDropdown.Item >50</NavDropdown.Item>
                        <NavDropdown.Item >100</NavDropdown.Item>
                    </NavDropdown>
                </div>
                <NavDropdown className="drop2" title="View">
                    <NavDropdown.Item >All</NavDropdown.Item>
                    <NavDropdown.Item>Recruiter</NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className="mt-2 ml-5 pl-5 mr-5 pr-5">
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Project Name</th>
      <th>Total Bid</th>
      <th>My Bid</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
 
    </tr>
  </tbody>
</Table>
  </div> 
  <div className="mt-5 pt-5">
  <Footer/>    
  </div>     
</div>
        
    )
}
export default ProjectsComponent;