import React, {useState, useEffect} from 'react';
import { Form, Col, NavDropdown, InputGroup, Table} from 'react-bootstrap';
import '../css/MyProjects.css';
import axios from 'axios';
import Footer from './Footer';
import NavComponent from './Nav';
const BidsComponent = ({user_id}) => {   
  const [bids, setbids] = useState([])   
  
  useEffect(() => {
    axios.put(`/api/get_my_bids/${Number(user_id)}`)
    .then((response) => {
      console.log(response.data)
      if(response != false){
        setbids(response.data)
        console.log("hello")
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  function deleteBid(id, event){
    event.preventDefault()
    axios.put(`/api/delete_bid/${Number(id)}`)
    .then(response => {
      console.log(response)
      if(response.data == true){
        alert("Bid deleted")
        window.location = 'http://localhost:5000/bids'
      }
      else{
        alert("Error deleting bid")
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  const myBids = bids.length?  bids.map((bid, index) => {
    return <tr key={index}>
      <td style={{    width: "86%",
    fontSize: "137%"}}>{bid.amount}</td><td><button className="btn btn-dark" style={{color:"skyblue"}} onClick={(event) => deleteBid(bids[index].bid_id, event)}>Delete Bid</button></td></tr> 
})
  :
  []
    return (
        <div className="overflow-hidden">
          <div>
            <NavComponent/>
          </div>
          <h1 className="mt-2 ml-5 mt-4">Bids</h1>
          <div className="mt-5 ml-5 pl-5 mr-5 pr-5">
            <Table style={{textAlign:"center", margin:"auto",width:"54%"}} striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th style={{fontSize:"160%"}}>Proposal</th>
                </tr>
              </thead>
              <tbody>
                {myBids.length ? <div>{myBids}</div> : <h4>No Bids</h4>}
              </tbody>
            </Table>
          </div>
          <div style={{marginTop:"15%"}}>
            <Footer/>
          </div>
        </div>
  )
}
export default BidsComponent;