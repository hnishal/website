import React from 'react';
import {  Card  } from 'react-bootstrap';
import '../css/Proposal.css';
import Footer from './Footer';
import NavComponent from './Nav';
const ProposalComponent = () => {
  return (
      <div >
      <div>
      <NavComponent/>
      </div >
      <div  className="mt-2 ">
      <div className="row mr-auto ml-auto ml-5 pl-5 mt-5 pt-2 md-5 overflow-hidden" >
        <div className="col-lg-8 col-md-6 col-sm-6 col-xs-2 ">
          <Card>
            <Card.Header as="h5">Proposals</Card.Header>
            <Card.Body>
              <img class="img-responsive center-block d-block mx-auto "  />
              <Card.Text >
                <p className="mt-5 text-center">This project is closed for bidding. </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="  mr-3 col-lg-3 col-sm-3 col-md-3 little-card">
          <Card style={{ width: '14rem' }}>
            <Card.Body>
              <h6>Budget</h6>
              <p>₹12,500.00-37,500.00</p>
              <h6>Bids</h6>
              <p>0</p>
              <h6>Average bid</h6>
              <p>-</p>

            </Card.Body>
          </Card>
        </div>
      </div>
      </div>
      <div className="mt-5 pt-5">
      <Footer  />
      </div>
    </div>
  )
}
export default ProposalComponent;