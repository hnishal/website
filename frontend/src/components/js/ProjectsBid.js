import React, {useState, useEffect} from 'react';
import {Card,FormControl,Button} from 'react-bootstrap';
import Footer from './Footer';
import axios from 'axios';
import NavComponent from './Nav';
const ProjectBidsComponent = ({project_id}) =>{

    const [bids, setbids] = useState([])
    console.log(project_id)

    useEffect(()=> {
        axios.put(`/api/get_bids/${Number(project_id)}`)
        .then(response => {
            console.log(response.data)
            if(response.data != "no data found"){
                setbids(response.data)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const projectBids = bids.map((bid, index) => {
        return <Card className="m-auto" style={{width:"80%"}} key={index}>
    <Card.Body >
        <Card.Title style={{ fontSize: "40px" }}>{bid.user}</Card.Title>
        <Card.Text style={{ fontSize: "25px" }}>
            {bid.proposal}
        </Card.Text>
        <div className="d-flex">
        <Card.Text style={{ fontSize: "20px" }}>
            Bid Amount: Rs.{bid.amount}
        </Card.Text>
        </div>
        <div className="d-flex">
        <Card.Text style={{ fontSize: "20px" }}>
            Days: {bid.days}
        </Card.Text>
        </div>
    </Card.Body>
    </Card>
    })
 return  <div className="overflow-hidden">
    
 <NavComponent/>
 {projectBids.length ? 
 <div class="mt-5 pt-5 m-auto">
     {projectBids}
</div>
: 
    <h5 style={{textAlign:"center", marginTop:"70px"}}> No bids yet</h5>

}
 
<div>
<div style={{marginTop:"15%"}}>
    <Footer/>
</div>
</div>
</div>

}
export default ProjectBidsComponent;