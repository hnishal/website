import React from 'react';
import { Form, Button, Col, Card } from 'react-bootstrap';
import '../css/Settings.css';
import Footer from './Footer';
import NavComponent from './Nav';
const ProfileformComponent = () => {
   function passwordurl(event) {
     event.preventDefault();
    window.location = 'http://localhost:3000/password';
  }
   function accounturl(event) {
    event.preventDefault();
    window.location = 'http://localhost:3000/account';
  }
    return ( 
      <div className="overflow-hidden ">
        <div>
          <NavComponent/>
        </div>
        <div className= "ml-5 pl-5 row mt-5 ">
            <div className= "mini-card col-lg-2 col-md-3 col-sm-3 ml-5">
        <Card>
        <Button  variant="dark" style={{color:"skyblue"}} >Profile</Button>{' '}
        <Button className="mt-2" variant="dark" style={{color:"skyblue"}} onClick={(event) => { passwordurl(event) }}>Password</Button>{' '}
        <Button className="mt-2" variant="dark" style={{color:"skyblue"}} onClick={(event) => { accounturl(event) }}>Account</Button>{' '}
</Card>
</div>
     <div className= "medium-card col-lg-8 col-md-6 col-sm-6 mr-5 ml-2">
<Card >
  <Card.Header className ="m-4 text-center"  as="h2">Profile Details</Card.Header>
  <Card.Body class="m-4 ">
  <Form>
        <Form.Row>
        <Form.Group as={Col} controlId="firstname">
            <Form.Label className="font-weight-bold">First Name*</Form.Label>
            <Form.Control type="firstname" placeholder="Enter First Name"  required/>
            </Form.Group>
            <Form.Group as={Col} controlId="lastname">
            <Form.Label className="font-weight-bold">Last Name*</Form.Label>
            <Form.Control type="lastname" placeholder="Enter Last Name"  required/>
            </Form.Group>
        </Form.Row>
        <hr/>
        <Form.Group class="mt-2 md-2" controlId="email">
            <Form.Label className="font-weight-bold">Email* </Form.Label>
            <Form.Control placeholder="Enter Email" required/>
        </Form.Group>
        <hr className="mt-4"/>
        <Form.Group class="mt-2 md-2" controlId="formGridAddress1">
            <Form.Label className="font-weight-bold">Address*</Form.Label>
            <Form.Control placeholder="Your Address" />
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="font-weight-bold">City*</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="font-weight-bold">State*</Form.Label>
            <Form.Control/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="font-weight-bold">Zip*</Form.Label>
            <Form.Control />
            </Form.Group>
        </Form.Row>
        <Form.Group class="mt-2 md-2" controlId="email">
            <Form.Label className="font-weight-bold">Country*</Form.Label>
            <Form.Control placeholder="Enter Email" />
        </Form.Group>
        <hr className="mt-4 "/>

        <Button className="mt-2" style={{color:"skyblue"}} variant="dark" type="submit">
            Save Settings
        </Button>
        </Form>
    
  </Card.Body>
</Card>
</div>
</div>
<div className="mt-5">
<Footer/>
</div>
</div>
 )
}
export default ProfileformComponent;