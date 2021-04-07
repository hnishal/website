import React, { Component } from 'react';
import { Nav, Navbar, Card, Button, Form, Col } from 'react-bootstrap';
import image18 from '../../image/18.jpg';
import '../css/Profile.css';
import Footer from './Footer';
import NavComponent from './Nav';
const ProfileComponent = () => {
    return <div class="overflow-hidden">
         <div>
        <NavComponent/>
    </div>
        {/* <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ml-5">
                    <Nav.Link style={{color:"skyblue" }} className="mr-3" href="#features">MY PROFILE</Nav.Link>
                    <Nav.Link style={{color:"skyblue" }} className="mr-3" href="#pricing">Improve Profile</Nav.Link>
                    <Nav.Link style={{color:"skyblue" }} className="mr-3" href="#pricing">My Services</Nav.Link>
                    <Nav.Link style={{color:"skyblue" }} className="mr-3" href="#pricing">Get Certified</Nav.Link>
                    <Nav.Link style={{color:"skyblue" }} className="mr-3" href="#pricing">Promote Profile</Nav.Link>
                    <Nav.Link style={{color:"skyblue" }} className="mr-3" href="#pricing">My Rewards</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> */}
        <div className="row">
            <div className=" ml-2 col-lg-8  col-md-11  col-sm-11 col-xs-12 sm-mt-2">
                <Card className="mt-5 pt-5 ml-5 pl-5">
                    <div className="d-flex">
                        <Card.Body >
                            <Card.Img id="img-18" variant="top" src={image18} />
                            <Card.Text className="mt-5">
                                I'm Online <br />
                                $5 USD /hour <br />
                                New Delhi, <a href="#">India</a> <br />
                                Joined November 2,2020 <br />
                                0 Recommendation <br />
                            </Card.Text>
                        </Card.Body>

                        <div className="col-md-7 col-lg-7"><br />

                            <div className="d-inline">
                                <p>Name @Name <br /></p>

                            </div>
                                 Front end web developer <br />
                                 compelete paragraph <br />
                        </div>
                        <button style={{marginRight:"20%", color:"skyblue"}} className=" button btn btn-dark mr-5 ">Edit Profile</button>
                    </div>
                </Card>
            </div>
            <div className=" ml-5 col-lg-3 col-md-3  col-sm-10 col-xs-12 d-none d-lg-block ">
                <Card className="mt-5 pt-5 ml-5 pl-5">
                    <div className="d-flex">
                        <Card.Body >
                            <Card.Text >
                            <div >
                               <h5>Verify</h5>
                               </div>
                               <div >
                               <hr className="mr-3"/>
                               <p>Preferred Freelancer <a href="#" >Join</a></p>
                               <p>Identity Verified</p>
                               <p>Payment Verified <a href="#" >Verify</a></p>
                               <p>Phone verified <a href="#" >Verify</a></p>
                               <p>Preferred Freelancer <a href="#" >Verify</a></p>
                               <p>Facebook Connected <a href="#" >Connect</a></p>
                               </div>
                            </Card.Text>
                        </Card.Body>
                      </div>
                </Card>
            </div>
            
        </div>
        <div className="row">
            <div className=" ml-2 col-lg-8  col-md-11  col-sm-11 col-xs-12">
                <Card className="mt-5 pt-5 ml-5 pl-5">
                    <h5>Experience</h5>
                    <hr className="mr-2"/>
                    <Form className="experience" >
                        <Form.Row >
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter your position or title" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Company</Form.Label>
                                <Form.Control type="text" placeholder="Enter Company Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Enter your address" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Start Month</Form.Label>
                                <Form.Control placeholder="Month" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Start Year</Form.Label>
                                <Form.Control placeholder="Year" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>End Month</Form.Label>
                                <Form.Control placeholder="Month" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>End Year</Form.Label>
                                <Form.Control placeholder="Year" />
                            </Form.Group>
                        </Form.Row>


                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I'm currently working here" />
                        </Form.Group>
                        <Form.Label>Summary</Form.Label>
                        <Form.Control type="text" placeholder="Describe your work experience" />
                        <Button style={{color:"skyblue" }} className="mt-2" variant="dark" type="submit">
                            Save
                        </Button>

                    </Form>
                    <Card.Body>


                    </Card.Body>
                </Card>
            </div>
            <div className=" ml-5 col-lg-3 col-md-3  col-sm-11 col-xs-12 d-none d-lg-block  overflow-hidden">
                <Card className="mt-5 pt-5 ml-5 pl-5">
                    <div className="d-flex">
                        <Card.Body >
                            <Card.Text >
                            <div style={{marginRight:"20%"}}>
                                <div className="d-flex">
                               <h5 >Top Skills</h5>
                                
                               <button style={{marginRight:"20%", color:"skyblue"}} className="ml-3 mb-1 btn btn-dark">Edit Skills</button>
                               </div>
                               <hr className="mr-4"/>
                               <p><a className="design text-center" href="#" >Website Design</a></p>
                               <p><a className="design" href="#" >Engineering</a></p>
                               <p><a className="design" href="#" >Article Writing</a></p>
                               <p><a className="design" href="#" >C++ Programming</a></p>
                               <p><a className="design" href="#" >HTML5</a></p>
                               <p><a className="text-center ml-2" href="#" >View</a></p>
                               </div>
                            </Card.Text>
                        </Card.Body>
                      </div>
                </Card>
            </div>
        </div>
        <div className="row">
            <div className="ml-2 col-lg-8  col-md-11  col-sm-11 col-xs-12">
                <Card className="mt-5 pt-5 ml-5 pl-5">
                    <h5>Education</h5>
                    <hr />
                    <Form className="experience" >
                        <Form.Row >
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder=" Enter your Country's Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label >University</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your University Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Degree</Form.Label>
                            <Form.Control placeholder="Enter your degree" />
                        </Form.Group>

                        <Form.Row className="mr-5 pr-5">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Start year</Form.Label>
                                <Form.Control placeholder="Enter year" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>End year</Form.Label>
                                <Form.Control placeholder="Enter year" />
                            </Form.Group>
                            
                        </Form.Row>
                        <Button style={{color:"skyblue" }}className="mt-2 " variant="dark" type="submit">
                            Save
                        </Button>

                    </Form>
                    <Card.Body>


                    </Card.Body>
                </Card>
            </div>
            
            </div>
            <div className="row">
            <div className=" ml-2 col-lg-8  col-md-11 col-sm-11 col-xs-12">
                <Card className="mt-5 pt-5 ml-5 pl-5">
                    <h5>Qualification</h5>
                    <hr />
                    <Form className="experience" >
                        <Form.Row >
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Professional Certificate</Form.Label>
                                <Form.Control type="text" placeholder="Professional Certificate"  />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Conferring Organization</Form.Label>
                                <Form.Control type="text" placeholder="Enter Conferring Organization" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Label>Summary</Form.Label>
                        <Form.Control textype="text" placeholder="Describe your qualification" />
                        </Form.Row>
                        <Form.Row className="mt-3 mr-5 pr-5">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label >Start Year</Form.Label>
                                <Form.Control  placeholder="Enter Year" />
                            </Form.Group>
                        </Form.Row>

                        
                        <Button style={{color:"skyblue" }} className="mt-2" variant="dark" type="submit">
                            Save
                        </Button>

                    </Form>
                    <Card.Body>


                    </Card.Body>
                </Card>
            </div>
            
            </div>
            <div className="row ">
            <div className="ml-2 col-lg-8  col-md-11  col-sm-11 col-xs-12">
                <Card className="mt-5 pt-5 ml-5 pl-5 mb-5">
                    <h5>Publications</h5>
                    <hr />
                    <Form className="experience" >
                        <Form.Row >
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Publisher</Form.Label>
                                <Form.Control type="text" placeholder="Enter the publisher" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Conferring Organization</Form.Label>
                                <Form.Control type="text" placeholder="Enter Conferring Organization" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Label>Summary</Form.Label>
                        <Form.Control textype="text" placeholder="Describe about your publication" />
                        </Form.Row>

                        
                        <Button style={{color:"skyblue" }} className="mt-2" variant="dark" type="submit">
                            Save
                        </Button>

                    </Form>
                    <Card.Body>


                    </Card.Body>
                </Card>
            </div>
            </div>
            <Footer/>
    </div>








}
export default ProfileComponent;