import React,{useEffect,useState} from 'react';
import {Card,FormControl,Button} from 'react-bootstrap';
import Footer from './Footer';
import axios from 'axios';
import NavComponent from './Nav';
const SearchprojectComponent = ({setproject_id}) =>{

  const [search_project,setsearch_project] =useState([])

  const [text,settext] =useEffect("")
   const searchTxt={
     text:text
    };
   function searchrequest(event){
     event.preventDefaut()
     console.log("Chimkandi bj")
//     //  axios.post('/api/text_search',searchTxt)
//          .then((response) => {
//            console.log(response.data);  
//            console.log("Response received")
//            if (response.data != "no data found")
//            { setsearch_project(response.data)  }
                      
//        }).catch((error) => {                                   
//            console.log(error)
//        })
  }
 
 
//  const search_projects = search_project.map((pro_search, index) => {
//    console.log("Mapping projects")
//  return <Card className="ml-3 mr-3 mt-3" key = {index}>
        
//   <Card.Body >
//     <Card.Title style={{ fontSize: "20px" }}>{pro_search.project_name}</Card.Title>
//     <Card.Text style={{ fontSize: "20px" }}>
//         {pro_search.description}
//     </Card.Text>
//   </Card.Body>
// </Card>

// })


    return(
        <div>
        <NavComponent/>
        <div class="row">
        <div class="col-md-8 offset-md-2">
            <FormControl type="text" placeholder="Search" className="mr-2" value={text} onChange={(event) => settext(event.target.value)} />
            <Button variant="outline-success" onClick={searchrequest}>Search</Button>
            {/* {search_projects.length ? <div>{search_projects}</div> : <h1>No projects found</h1>} */}
        {/* <Card className="ml-3 mr-3 mt-3" >
        
  <Card.Body >
    <Card.Title style={{ fontSize: "20px" }}>Haluluulu1</Card.Title>
    <Card.Text style={{ fontSize: "20px" }}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card>
<Card className="ml-3 mr-3">
  <Card.Body >
    <Card.Title style={{ fontSize: "20px" }}>Haluluulu2</Card.Title>
    <Card.Text style={{ fontSize: "20px" }}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card>
<Card className="ml-3 mr-3">
  <Card.Body>
    <Card.Title style={{ fontSize: "20px" }}>Haluluulu3</Card.Title>
    <Card.Text style={{ fontSize: "20px" }}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card>
<Card className="ml-3 mr-3">
  <Card.Body>
    <Card.Title style={{ fontSize: "20px" }}>Haluluulu4</Card.Title>
    <Card.Text style={{ fontSize: "20px" }}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card>
<Card className="ml-3 mr-3">
  <Card.Body>
    <Card.Title style={{ fontSize: "20px" }}>Haluluulu5</Card.Title>
    <Card.Text style={{ fontSize: "20px" }}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card>
<Card className="ml-3 mr-3">
  <Card.Body>
    <Card.Title style={{ fontSize: "20px" }}>Haluluulu6</Card.Title>
    <Card.Text style={{ fontSize: "20px" }}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card>
<Card className="ml-3 mr-3">
  <Card.Body>
    <Card.Title style={{ fontSize: "20px" }}>Haluluulu7</Card.Title>
    <Card.Text style={{ fontSize: "20px" }}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card>
<Card className="ml-3 mr-3 mb-3">
  <Card.Body>
    <Card.Title style={{ fontSize: "20px" }}>Haluluulu8</Card.Title>
    <Card.Text style={{ fontSize: "20px" }}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card> */}
</div>
</div>
<div>
    <Footer/>
</div>
</div>
    )
}
export default SearchprojectComponent;