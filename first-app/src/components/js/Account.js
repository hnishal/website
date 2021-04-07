import React from 'react';
import {  Button, Card ,Accordion} from 'react-bootstrap';
import Footer from './Footer';
import NavComponent from './Nav';
const AccountComponent = () => {
    function passwordurl(event) {
        event.preventDefault();
        window.location = 'http://localhost:3000/password';
    }
    function settingsurl(event) {
        event.preventDefault();
        window.location = 'http://localhost:3000/settings';
    }

    return (
        <div className="overflow-hidden">
            <div>
                <NavComponent/>
            </div>
            <div className="ml-5 pl-5 row mt-5 ">
                <div className="mini-card col-lg-2 col-md-3 col-sm-3 ml-5">
                    <Card>
                        <Button variant="dark" style={{ color: "skyblue" }} onClick={(event) => { settingsurl(event) }}  >Profile</Button>{' '}
                        <Button className="mt-2" variant="dark" style={{ color: "skyblue" }} onClick={(event) => { passwordurl(event) }}>Password</Button>{' '}
                        <Button className="mt-2" variant="dark" style={{ color: "skyblue" }} >Account</Button>{' '}
                    </Card>
                </div>
                <div className="medium-card col-lg-8 col-md-6 col-sm-6 mr-5 ml-2 md-2 ">
                    <Card>
                    <Card.Header className="m-4 text-center" as="h2">Account</Card.Header>
                    <h5 className="ml-4 mr-4 mt-3 md-3">Directory and Fellow Settings</h5>
                    <div class="ml-4 mr-4 mt-4 custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
                    <label class="custom-control-label" for="customSwitch1"> List me on the Freelancer directory, allowing Employers to hire me directly for projects</label>
                    </div>
                    <div class="ml-4 mr-4 custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch2"/>
                    <label class="custom-control-label" for="customSwitch2"> Allow Freelancers to follow me, notifying them of projects and contests I've posted</label>
                    </div>
                    <hr className="mt-4 ml-4 mr-4"/>
                    <h5 className="ml-4 mr-4 mt-2 md-3">Account Type</h5>
                    <div className="d-flex">
                    <div class=" mt-3 ml-4 mr-4 custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
                    <label class="custom-control-label" for="customRadioInline1">Hire</label>
                    </div>
                    <div class="ml-4 mr-4  mt-3 custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
                    <label class="custom-control-label" for="customRadioInline2"> Work</label>
                    </div>
                    </div>
                    <Accordion className="mt-4" defaultActiveKey="0">
                        <Card className="mt-2 ">
                            <h5 className="ml-4 mr-4 mt-4 md-5">Close Account</h5>
                            <Accordion.Toggle style={{color:"skyblue"}} className="ml-4 mr-4 md-4 mt-2" as={Button} variant="dark" eventKey="0">
                                Close Account
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <p className="font-weight-bold">Tell us why are you leaving?</p>       
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                I have privacy concerns
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                I don't find it helpful
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label class="form-check-label" for="flexRadioDefault3">
                                I receive too many notifications
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                            <label class="form-check-label" for="flexRadioDefault4">
                            I don't understand how to use the site
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                            <label class="form-check-label" for="flexRadioDefault5">
                            It's temporary I'll be back
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                            <label class="form-check-label" for="flexRadioDefault6">
                            Others
                            </label>
                            </div>
                            <p className="font-weight-bold mt-4 md-2">Your feedback is valuable to us:</p>   
                            <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <p className="font-weight-bold">Can we contact you for more details?</p>    
                            <div className="d-flex">
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label class="form-check-label" for="exampleRadios1">
                                Yes
                            </label>
                            </div>
                            <div class=" ml-3 form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                            <label class="form-check-label" for="exampleRadios2">
                                No
                            </label>
                            </div>
                            </div>
                            <p className=" mt-4 font-weight-bold">What closing your account means:</p>  
                            <ul>
                                <li>Your profile and any listings will disappear</li>
                                <li>You will no longer receive notifications from us</li>
                                <li>You will not be able to log back into the site</li>
                                <li>More importantly - We'll miss you!</li>
                            </ul>

                            <button style={{color:"skyblue"}} className="btn btn-dark mt-4">Close My Account</button>
                                 </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>

                    <hr className="mt-4 ml-4 mr-4"/>
                    
                    

                    <button className="btn btn-dark ml-4 mr-4 mt-3 pd-4" style={{color:"skyblue"}}>Save Settings</button>
                    <hr className="mt-4 ml-4 mr-4"/>
            </Card>
            </div>
</div>
<div className="mt-5">
<Footer/>
</div>
</div>
   
)}
export default AccountComponent;
       