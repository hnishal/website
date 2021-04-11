import React from 'react';
import { Navbar,Button,Card, ProgressBar } from 'react-bootstrap';
import NavComponent from './Nav';
import Footer from './Footer';
const ProjectComponent = () => {
    return (
        <div class="overflow-hidden">
        <div>
            <NavComponent/>
        </div>
        <div >
           <Navbar className="mt-3 " bg="dark" expand="lg">
               <h4 className="ml-5 p-2" style={{color:"white"}}>Project Name</h4>
            </Navbar>
        </div>
      <div  className="mt-2 ">
      <div className="row mr-auto ml-auto ml-5 pl-5 mt-5 pt-2 md-5 overflow-hidden" >
        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-2 ">
          <Card>
              <div className="d-flex">
                  <h5 className=" pl-4 pt-4 pr-4 pd-2 mr-auto" >Project Details</h5>
                  <h5 className=" pl-4 pt-4 pr-4 pd-2 ml-auto" >₹12,500.00 – 37,500.00 INR</h5>
            </div>
            <hr className="md-2"></hr>
    
            <Card.Body>
              <img class="img-responsive center-block d-block mx-auto "  />
              <Card.Text >
                <p className="mt-1 ">website development for an aggregator platform containing payment gateway, chat facility and geolocation based search </p>
              </Card.Text>
              <div >
                  <h5>Skills Required</h5>
                <div className="d-flex ">
                <p className=" p-1 mr-2 mt-2 border border-dark">Java</p>
                <p className=" p-1 mr-2 mt-2 border border-dark">Website</p>
                <p className=" p-1 mr-2 mt-2 border border-dark">React</p>
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
          <Card>
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
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Enter bid amount" required/>
                    <div class="input-group-append">
                        <span class="input-group-text">INR</span>
                    </div>
                    </div>
                    <h6>This project will be delivered in</h6>
                  <div class="input-group mb-3 mt-2">
                  <input type="text" class="form-control" placeholder="Enter number of days" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">Days</span>
                </div>  
                    </div>
                    <h6>Describe your proposal</h6>
                    <p>Not sure what to write? Take help of google</p>
                    <div class="input-group">
                        <div class="input-group-prepend">
                        </div>
                        <textarea class="form-control" aria-label="With textarea" placeholder="What makes you the best candidate for this project"></textarea>
                        </div>

                        <button className="btn btn-dark mt-4" style={{color:"skyblue", width:"100%"}}>Bid on Project</button>
              </div>

            </Card.Body>
             </Card>
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