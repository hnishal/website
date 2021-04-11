import React from 'react';
import {Form,Card} from 'react-bootstrap';
import '../css/PostProject.css'
const PostProjectComponent = ()=>{

    return(
      

    <div className="bla" >
      <div>

      <h1 className="text-center" >Free-to-lance</h1>
      <h4 className="text-center mt-5">Tell us what you need done</h4>
      <h6 className="text-center mt-3">Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them.</h6>
      </div>
        <Card className="projectpage mt-5 pt-5">
        <Form className="ml-5 mr-5" >
  <Form.Group controlId="exampleForm.ControlInput1">
    <h4 className="mt-3">Choose a name for your project</h4>
    <Form.Control  type="name" placeholder="e.g.Build me a website" required/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <h4 className="mt-5">Tell us more about your project</h4>
    <h6>Start with a bit about yourself or your business, and include an overview of what you need done.</h6>
    <Form.Control as="textarea" placeholder="Describe your project here...." rows={3} required/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <h4 className="mt-5">Skills required</h4>
    <Form.Control as="textarea" placeholder="e.g.javascript,python etc." rows={3} required/>
  </Form.Group>
  <div>
  <hr/>
  <button>Upload files</button>
   <p>Drag & drop any images or documents that might be helpful in explaining your brief here (Max file size: 25 MB).</p>
    <hr/>
    </div>

</Form>
</Card>
    </div>
    )
}
export default PostProjectComponent;