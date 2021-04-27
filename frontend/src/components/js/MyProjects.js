import React,{useState, useEffect} from 'react';
import { Form, Col, NavDropdown, InputGroup, Table} from 'react-bootstrap';
import '../css/MyProjects.css';
import axios from 'axios';
import Footer from './Footer';
import NavComponent from './Nav';
const ProjectsComponent = ({user_id, setproject_id}) => {

            const [projectlist, setprojectlist] = useState([]);
            console.log(user_id)
                let id = Number(user_id);

            useEffect(() => {
                axios.put(`/api/get_my_projects/${id}`)
            .then((response)=> {
                console.log(response.data)
                if (response.data != "no data found")
                {setprojectlist(response.data)}
                console.log("Response data:", response.data);
            }).catch((error)=>{
                console.log(error)
            })
            }, [])

            function deleteProject(event, id){
                event.preventDefault()
                axios.put(`/api/delete_project/${Number(id)}`)
                .then(response => {
                    if(response.data == true){
                        alert("Project deleted")
                    }
                })
            }
            function displayproject(event) {
    event.preventDefault();
   window.location = 'http://localhost:5000/project';
 }

    const projects = projectlist.map((pro_name,index) => {
        return <tr key={index}>
   
            <td  onClick={(event) => {
              setproject_id(projectlist[index].project_id)
              localStorage.setItem("project_id", projectlist[index].project_id)
              displayproject(event) }} style={{textAlign: "center",cursor:"pointer",width:"140%"}}>{pro_name.project_name}</td> 
              <td className="btn btn-dark" style={{color:"skyblue"}} onClick={(event) => deleteProject(event, projectlist[index].project_id)}>Delete</td>
        
            </tr>
    })

    
            
    return (
        <div className="overflow-hidden">
            <div>
            <NavComponent/>
            </div>
            <div className="d-flex">
            <h1 className="mt-2 ml-5 mt-4">Projects</h1>
            </div>
            <div className="mt-5 ml-5 pl-5 mr-5 pr-5">
            <Table style={{textAlign:"center",margin: "auto",width: "77%"}}striped bordered hover variant="dark">
  <thead>
    <tr>
      <th style={{fontSize: "160%"}}>Project Name</th>
    </tr>
  </thead>
  <tbody>
    {projects.length ? <div >{projects}</div> : <h2>No projects found</h2>}
  </tbody>
</Table>
  </div> 
  <div style={{marginTop:"15%"}}>
  <Footer/>    
  </div>     
</div>
        
    )
}
export default ProjectsComponent;