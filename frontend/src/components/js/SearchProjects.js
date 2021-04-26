import React,{useEffect,useState} from 'react';
import {Card,FormControl,Button} from 'react-bootstrap';
import Footer from './Footer';
import axios from 'axios';
import NavComponent from './Nav';
const SearchprojectComponent = ({setproject_id}) =>{

  const [search_project,setsearch_project] =useState([])
const [allprojects, setallprojects] = useState([])

useEffect(() => {
  axios.get("/api/view_all_projects")
  .then(response =>{
    if(response.data != "no data found")
    {setallprojects(response.data)}
  })
  .catch(error => {
    console.log(error)
  })
}, [])
  const [text,settext] =useState("")
   const searchTxt={
     text:text
    };
   function searchrequest(event){
     event.preventDefault()
    axios.post('/api/text_search',searchTxt)
         .then((response) => {
           console.log(response.data);  
           console.log("Response received")
           if (response.data != "no data found")
           { setsearch_project(response.data)  }
                      
       }).catch((error) => {                                   
           console.log(error)
       })
  }

  function displayproject(event) {
    event.preventDefault();
   window.location = 'http://localhost:5000/project';
 }
 
 
 const search_projects = search_project.map((pro_search, index) => {
   console.log("Mapping projects")
 return <Card className="ml-3 mr-3 mt-3" key = {index} onClick={(event) => {
   setproject_id(search_project[index].project_id)
   displayproject(event) }}>
        
  <Card.Body >
    <Card.Title style={{ fontSize: "20px" }}>{pro_search.project_name}</Card.Title>
    <Card.Text style={{ fontSize: "20px" }}>
        {pro_search.description}
    </Card.Text>
  </Card.Body>
</Card>

})

const all_projects = allprojects.map((pro_search, index) => {
   console.log("Mapping projects")
 return <Card className="ml-3 mr-3 mt-3" key = {index} onClick={(event) => {
   setproject_id(allprojects[index].project_id);
   localStorage.setItem("project_id", allprojects[index].project_id)
   displayproject(event);
   }}>
        
  <Card.Body >
    <Card.Title style={{ fontSize: "20px" }}>{pro_search.project_name}</Card.Title>
    <Card.Text style={{ fontSize: "20px" }}>
        {pro_search.description}
    </Card.Text>
  </Card.Body>
</Card>

})


    return(
        <div>
        <NavComponent/>
        <div class="row mt-5">
        <div class="col-md-8 offset-md-2">
          <div class="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-2" value={text} onChange={(event) => settext(event.target.value)} />
            <Button variant="outline-success btn btn-dark" style={{color:"skyblue"}} onClick={searchrequest}>Search</Button>
            </div>
            <div>
             {search_projects.length ? <div>{search_projects}</div> : 
             all_projects.length ? <div>{all_projects}</div> : <h1>No projects found</h1>}
            </div>
       
</div>
</div>
<div class="mt-5">
    <Footer/>
</div>
</div>
    )
}
export default SearchprojectComponent;