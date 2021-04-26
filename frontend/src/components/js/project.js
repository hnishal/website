import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Navbar,Button,Card, ProgressBar } from 'react-bootstrap';
import NavComponent from './Nav';
import Footer from './Footer';
const ProjectComponent = ({user_id,project_id}) => {

  const [amount,setamount]=useState(0)
  const [days,setdays]=useState(0)
  const [proposal,setproposal]=useState("")
  const [project, setproject] = useState({})
  console.log(project_id)
  useEffect(() => {
    axios.put(`/api/view_project/${Number(project_id)}`)
    .then(response => {
      if(response.data != "not found"){
        setproject(response.data)
      }
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  function bidrequest(event) {
      event.preventDefault()

      const bid_info = {
        bid: {
            user_id:Number(user_id),
            project_id:Number(project_id),
            amount:Number(amount),
            days:Number(days),
            proposal:proposal
          }
      }
      axios.post('/api/place_bid', bid_info)
      .then((response) => {
          console.log(response);               
      }).catch((error) => {                                   
          console.log(error)
      })
  }  


    return (
        <div class="overflow-hidden">
        <div>
            <NavComponent/>
        </div>
        <div >
           <Navbar className="mt-3 " bg="dark" expand="lg">
               <h4 className="ml-5 p-2" style={{color:"white"}}>{project.project_name}</h4>
            </Navbar>
        </div>
      <div  className="mt-2 ">
      <div className="row mr-auto ml-auto ml-5 pl-5 mt-5 pt-2 md-5 overflow-hidden" >
        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-2 ">
          <Card>
              <div className="d-flex">
                  <h5 className=" pl-4 pt-4 pr-4 pd-2 mr-auto" >Project Details</h5>
            </div>
            <hr className="md-2"></hr>
    
            <Card.Body>
              <img class="img-responsive center-block d-block mx-auto "  />
              <Card.Text >
                <p className="mt-1 ">{project.description}</p>
              </Card.Text>
              <div >
                  <h5 style={{fontWeight:"bold"}}>Skills Required</h5>
                <div className="d-flex ">
                <p className=" p-1 mr-2 mt-2 border border-dark">{project.skills}</p>  
              </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="  mr-3 col-lg-3 col-sm-3 col-md-3 little-card">
          <Card style={{ width: '14rem' }}>
            <Card.Body>
              <h5 className="text-center">About the Employer</h5>
              <hr/>
              <Card.Text>
              <p>India</p>
              <p> 0 projects completed</p>
              <p>Member since Apr 11,2021</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      </div>
      <div class="row mr-auto ml-auto ml-5 pl-5 mt-5 pt-2 md-5">
      <div className="col-lg-8 col-md-6 col-sm-6 col-xs-2 ">
          {Number(project.user_id) == Number(user_id) ? <div style={{fontSize:"120%"}}>You can't bid here, as this is your project</div> : <Card>
              <Card.Header as="h5">Place a Bid on this Project</Card.Header>        
              <Card.Body>
              <img class="img-responsive center-block d-block mx-auto "  />
              <Card.Text >
                <p className="mt-1 ">You will be able to edit your bid until the project is awarded to someone.</p>
              </Card.Text>
              <div >
                  <h5>Bid Details</h5>
                  <h6>Bid Amount</h6>
                  <div class="input-group mb-3 mt-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text">₹</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Enter bid amount" type="number" value={amount} onChange={(event) => setamount(event.target.value)} required/>
                    <div class="input-group-append">
                        <span class="input-group-text">INR</span>
                    </div>
                    </div>
                    <h6>This project will be delivered in</h6>
                  <div class="input-group mb-3 mt-2">
                  <input type="text" class="form-control" placeholder="Enter number of days" aria-label="days" aria-describedby="basic-addon2" type="number" value={days} onChange={(event) => setdays(event.target.value)} required/>
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">Days</span>
                </div>  
                    </div>
                    <h6>Describe your proposal</h6>
                    <p>Not sure what to write? Take help of google</p>
                    <div class="input-group">
                        <div class="input-group-prepend">
                        </div>
                        <textarea class="form-control" aria-label="With textarea" placeholder="What makes you the best candidate for this project" value={proposal} onChange={(event) => setproposal(event.target.value)} ></textarea>
                        </div>

                        <button className="btn btn-dark mt-4" style={{color:"skyblue", width:"100%"}} onClick={bidrequest} >Bid on Project</button>
              </div>

            </Card.Body>
             </Card>}
            </div>
            <div className="  mr-3 col-lg-3 col-sm-3 col-md-3 little-card">
          <Card style={{ width: '14rem' }}>
            <Card.Body>
            <div className="d-flex">
                  <h5 className=" pl-4 pt-4 pr-4 pd-2 mr-auto" >Your Bids</h5>
                  <h5 className=" pl-4 pt-4 pr-4 pd-2 ml-auto" >Free member</h5>
            </div>
              <hr/>
              <Card.Text>
              <p className="text-center">6 bids left out of 6</p>
              </Card.Text>
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
export default ProjectComponent;