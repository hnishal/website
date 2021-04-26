import React,{useState, useEffect} from 'react';
import { Form, Col, NavDropdown, InputGroup, Table} from 'react-bootstrap';
import '../css/MyProjects.css';
import axios from 'axios';
import Footer from './Footer';
import NavComponent from './Nav';
const ProjectsComponent = ({user_id}) => {

            const [projectlist, setprojectlist] = useState([]);
            console.log(user_id)
                let id = Number(user_id);

            useEffect(() => {
                axios.put(`/api/get_my_projects/${id}`)
            .then((response)=> {
                console.log(response.data)
                // localStorage.setItem('projectname', response.data)
                if (response.data != "no data found")
                {setprojectlist(response.data)}
                console.log("Response data:", response.data);
            }).catch((error)=>{
                console.log(error)
            })
            }, [])

    const projects = projectlist.map((pro_name,index) => {
        return <tr key={index}>
            <td className="text-align-center">{pro_name.project_name}</td>
            </tr>
    })
            
    return (
        <div className="overflow-hidden">
            <div>
            <NavComponent/>
            </div>
            <h1 className="mt-2 ml-5 mt-4">Projects</h1>
            <h3 className="ml-5 pl-5 mt-5">Bids</h3>
            <div className="row mt-5 sm-mt-2">
                <div className="col-lg-9 col-md-6 col-sm-5 overflow-hidden">
                    <Form.Row className="ml-5 pl-5">
                        <Form.Group as={Col}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <i className="fa fa-fw fa-search"></i>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Search Projects"
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>

                </div>
                <div >
                   
                    <NavDropdown className="drop1" title="Show">
                        <NavDropdown.Item >10</NavDropdown.Item>
                        <NavDropdown.Item >20</NavDropdown.Item>
                        <NavDropdown.Item >50</NavDropdown.Item>
                        <NavDropdown.Item >100</NavDropdown.Item>
                    </NavDropdown>
                </div>
                <NavDropdown className="drop2" title="View">
                    <NavDropdown.Item >All</NavDropdown.Item>
                    <NavDropdown.Item>Recruiter</NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className="mt-2 ml-5 pl-5 mr-5 pr-5">
            <Table style={{textAlign:"center"}}striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Project Name</th>
    </tr>
  </thead>
  <tbody>
    {projects.length ? <div>{projects}</div> : <h1>No projects found</h1>}
  </tbody>
</Table>
  </div> 
  <div className="mt-5 pt-5">
  <Footer/>    
  </div>     
</div>
        
    )
}
export default ProjectsComponent;