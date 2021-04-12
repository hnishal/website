import React, {useState} from 'react';
import { Form, Button, Col, Card } from 'react-bootstrap';
import '../css/Settings.css';
import Footer from './Footer';
import NavComponent from './Nav';
import axios from 'axios';
const ProfileformComponent = ({user_id}) => {

  // const [userid,setuserid]=useState("")
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [first_line, setfirst_line] = useState("")
  const [city, setcity] = useState("")
  const [state, setstate] = useState("")
  const [zip, setzip] = useState("")
  const [country, setcountry] = useState("")
  const [phoneno,setphoneno]=useState(0)
  const [edu_country,setedu_country]=useState("")
  const [university,setuniversity]=useState("")
  const [degree,setdegree]=useState("")
  const [start_year,setstart_year]=useState(0)
  const [end_year,setend_year]=useState(0)

  function settingrequest(event) {
      event.preventDefault()

      const setting_info = {
        info  : {
            user_id:user_id,
            name:{
              first_name:firstname,
              last_name:lastname
            },
            
            address:{
              first_line:first_line,
              city:city,
              state:state,
              zipcode:zip,
              country:country
            },
            contact_no:Number(phoneno),
            edu_country:edu_country,
            edu_university:university,
            edu_degree:degree,
            start_year:Number(start_year),
            finish_year:Number(end_year)
          }
      }
      axios.post('/api/add_user_info', setting_info)
      .then((response) => {
          console.log(response);               
      }).catch((error) => {                                   
          console.log(error)
      })
      profileurl();
  }  
  function passwordurl(event) {
     event.preventDefault();
    window.location = 'http://localhost:5000/password';
  }
   function accounturl(event) {
    event.preventDefault();
    window.location = 'http://localhost:5000/account';
  }
  function profileurl() {
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
            <Form.Label className="font-weight-bold">Address* </Form.Label>
            <Form.Control placeholder="Enter your Address" 
            value={first_line} onChange={(event) => setfirst_line(event.target.value)} 
            required/>
            
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
        
        <Form.Group class="mt-2 md-2" controlId="formGridCountry">
            <Form.Label className="font-weight-bold">Country</Form.Label>
            <Form.Control placeholder="Enter your Country Name." 
            value={country} onChange={(event) => setcountry(event.target.value)} 
            />
        </Form.Group>

        <Form.Group class="mt-2 md-2" controlId="formGridPhone">
            <Form.Label className="font-weight-bold">Phone no.</Form.Label>
            <Form.Control placeholder="Enter your Phone no." type="number"
            value={phoneno} onChange={(event) => setphoneno(event.target.value)} 
            />
        </Form.Group>

        <Form.Group as={Col} controlId="country">
            <Form.Label className="font-weight-bold" >Country</Form.Label>
            <Form.Control type="country" placeholder="Enter Country's Name" 
            value={edu_country} onChange={(event) => setedu_country(event.target.value)}
             />
            </Form.Group>
            <Form.Group as={Col} controlId="university">
            <Form.Label className="font-weight-bold">University/College</Form.Label>
            <Form.Control type="college" placeholder="Enter university/college" 
            value={university} onChange={(event) => setuniversity(event.target.value)} 
            />
            </Form.Group>
     
        <hr/>
        <Form.Group class="mt-2 md-2" controlId="degree">
            <Form.Label className="font-weight-bold">Degree </Form.Label>
            <Form.Control placeholder="Enter your degree" 
             value={degree} onChange={(event) => setdegree(event.target.value)} 
            />
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="font-weight-bold" >Start year  </Form.Label>
            <Form.Control type="number"
             value={start_year} onChange={(event) => setstart_year(event.target.value)} 
            />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="font-weight-bold" >End year </Form.Label>
            <Form.Control   type="number"
            value={end_year} onChange={(event) => setend_year(event.target.value)}
            />
            </Form.Group>
        </Form.Row>

        <Button className="mt-2" style={{color:"skyblue"}} variant="dark" type="submit" 
        onClick={settingrequest} 
        >
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