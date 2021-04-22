import React,{useState} from 'react';
import axios from 'axios';
import { Form, Button, Col, Card } from 'react-bootstrap';
import Footer from './Footer';
import NavComponent from './Nav';
const PasswordComponent = ({user_id}) => {


    const [old_password,setold_password]=useState("")
    const [new_password,setnew_password]=useState("")
    const [confirm_new_password,setconfirm_new_password] = useState("")

    function check_pwd() {
        return new_password === confirm_new_password;
    }
  
    function passwordrequest(event) {
        event.preventDefault()
        
        const password_info = {
          details  : {
              user_id:Number(user_id),
              old_password:old_password,
              new_password:new_password
                }
            }              
        
        if(check_pwd()){
        axios.post('/api/password_change', password_info)
        .then((response) => {
            console.log(response);    
            alert("Your password is changed")                          
            }).catch((error) => {
                console.log(error)
            })
        } else {

        alert("Confirm password should be equal to password");
        }
        console.log(user_id)
        }
    
 function Settingsurl(event) {
        event.preventDefault();
        window.location = 'http://localhost:5000/Settings';
    }
    function accounturl(event) {
        event.preventDefault();
        window.location = 'http://localhost:5000/account';
    }

    return (
        <div className="overflow-hidden">
            <div>
                <NavComponent/>
            </div>
            <div className="ml-5 pl-5 row mt-5  ">
                <div className="mini-card col-lg-2 col-md-3 col-sm-3 ml-5">
                    <Card>
                        <Button variant="dark" style={{color:"skyblue"}} onClick={(event) => { Settingsurl(event) }} >Profile</Button>{' '}
                        <Button className="mt-2" variant="dark" style={{color:"skyblue"}} >Password</Button>{' '}
                        <Button className="mt-2" variant="dark" style={{color:"skyblue"}} onClick={(event) => { accounturl(event) }}>Account</Button>{' '}
                    </Card>
                </div>
                <div className="medium-card col-lg-8 col-md-6 col-sm-6 mr-5 ml-2">
                    <Card>
                        <Card.Header className="m-4 text-center" as="h2">Password</Card.Header>
                        <h5 className="ml-3 mt-3">Change Password</h5>

                        <Card.Body>
                            <Form>
                                <Form.Group controlId="currentpassword">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control placeholder=""  value={old_password} onChange={(event) => setold_password(event.target.value)}/>
                                </Form.Group>
                                <Form.Group controlId="newpassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control placeholder="" value={new_password} onChange={(event) => setnew_password(event.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="confirm password">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control placeholder="" value={confirm_new_password} onChange={(event) => setconfirm_new_password(event.target.value)}/>
                                </Form.Group>



                                <Button style={{color:"skyblue"}} variant="dark" type="submit" onClick={passwordrequest}>
                                    Save Settings
                                </Button>
                            </Form>

                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="mt-5 pt-5">
            <Footer />
            </div>
        </div>
    )
}
export default PasswordComponent;