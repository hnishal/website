import React from 'react';
import { Form, Button, Col, Card } from 'react-bootstrap';
import '../css/Settings.css';
import Footer from './Footer';
import NavComponent from './Nav';
const ProfileformComponent = () => {

  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")
  const [city, setcity] = useState("")
  const [state, setstate] = useState("")
  const [zip, setzip] = useState("")
  const [country, setcountry] = useState("")

  function settingrequest(event) {
      event.preventDefault()
      setfirstname(firstname)
      setlastname(lastname)
      setemail(email)
      setaddress(address)
      setcity(city)
      setstate(state)
      setzip(zip)
      setcountry(country)

      const setting_info = {
        info  : {
            name:{
              first-name:firstname,
              last-name:lastname
            },
              email:email,
              address:address,
              city:city,
              state:state,
              zip:zip,
              country:country
          }
      }
  
      axios.post('/api/add_user_info', setting_info)
      .then((response) => {
          console.log(response);               
      }).catch((error) => {                                   
          console.log(error)
      })
  }  




   function passwordurl(event) {
     event.preventDefault();
    window.location = 'http://localhost:5000/password';
  }
   function accounturl(event) {
    event.preventDefault();
    window.location = 'http://localhost:5000/account';
  }
  function profileurl(event) {
    event.preventDefault();
    window.location = 'http://localhost:5000/profile';
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
            <Form.Label className="font-weight-bold" >First Name*</Form.Label>
            <Form.Control type="firstname" placeholder="Enter First Name" 
             value={firstname} onChange={(event) => setfirstname(event.target.value)}
             required/>
            </Form.Group>
            <Form.Group as={Col} controlId="lastname">
            <Form.Label className="font-weight-bold">Last Name*</Form.Label>
            <Form.Control type="lastname" placeholder="Enter Last Name" 
            value={lastname} onChange={(event) => setlastname(event.target.value)} 
            required/>
            </Form.Group>
        </Form.Row>
        <hr/>
        <Form.Group class="mt-2 md-2" controlId="email">
            <Form.Label className="font-weight-bold">Email* </Form.Label>
            <Form.Control placeholder="Enter Email" 
            value={email} onChange={(event) => setemail(event.target.value)} 
            required/>
        </Form.Group>
        <hr className="mt-4"/>
        <Form.Group class="mt-2 md-2" controlId="formGridAddress1">
            <Form.Label className="font-weight-bold">Address*</Form.Label>
            <Form.Control placeholder="Your Address" 
            value={address} onChange={(event) => setaddress(event.target.value)} 
            />
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="font-weight-bold">City* </Form.Label>
            <Form.Control 
            value={city} onChange={(event) => setcity(event.target.value)}
            />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="font-weight-bold">State* </Form.Label>
            <Form.Control 
            value={state} onChange={(event) => setstate(event.target.value)}
            />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="font-weight-bold">Zip* </Form.Label>
            <Form.Control  
            value={zip} onChange={(event) => setzip(event.target.value)}
            />
            </Form.Group>
        </Form.Row>
        <hr className="mt-4 "/>
        

        <Form.Group class="mt-2 md-2" controlId="formGridPhone">
            <Form.Label className="font-weight-bold">Phone no.</Form.Label>
            <Form.Control placeholder="Enter your Phone no." 
            value={phone} onChange={(event) => setaddress(event.target.value)} 
            />
        </Form.Group>

        <Button className="mt-2" style={{color:"skyblue"}} variant="dark" type="submit" 
        onClick={settingrequest} 
        onClick={profileurl}
        >
            Save Settings
        </Button>
        </Form>
    
  </Card.Body>
</Card>
</div>

</div>
<div className= "ml-5 pl-5 row mt-5 ">
     <div className= "medium-card col-lg-11 col-md-10 col-sm-10 mr-5" style={{color:"20.5%"}}>
<Card >
  <Card.Header className ="m-4 text-center"  as="h2">Education</Card.Header>
  <Card.Body class="m-4 ">
  <Form>
        <Form.Row>
        <Form.Group as={Col} controlId="country">
            <Form.Label className="font-weight-bold" >Country</Form.Label>
            <Form.Control type="country" placeholder="Enter Country's Name" 
            // value={firstname} onChange={(event) => setfirstname(event.target.value)}
             />
            </Form.Group>
            <Form.Group as={Col} controlId="university">
            <Form.Label className="font-weight-bold">University/College</Form.Label>
            <Form.Control type="college" placeholder="Enter university/college" 
            // value={lastname} onChange={(event) => setlastname(event.target.value)} 
            />
            </Form.Group>
        </Form.Row>
        <hr/>
        <Form.Group class="mt-2 md-2" controlId="degree">
            <Form.Label className="font-weight-bold">Degree </Form.Label>
            <Form.Control placeholder="Enter your degree" 
            // value={email} onChange={(event) => setemail(event.target.value)} 
            />
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="font-weight-bold">Start year </Form.Label>
            <Form.Control 
            // value={city} onChange={(event) => setcity(event.target.value)}
            />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="font-weight-bold">End year </Form.Label>
            <Form.Control  
            // value={zip} onChange={(event) => setzip(event.target.value)}
            />
            </Form.Group>
        </Form.Row>
        <hr className="mt-4 "/>

        <Button className="mt-2" style={{color:"skyblue"}} variant="dark" type="submit" 
        // onClick={settingrequest}
        >
            Save 
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