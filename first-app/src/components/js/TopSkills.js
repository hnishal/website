import React from "react";
import { Table } from "react-bootstrap";
import '../css/TopSkills.css'
const ListComponent = () =>
(
  <div className="d-none d-lg-block row justify-content-center">
    <div className="col-lg-12 col-sm-2">
      <div className="ml-5 mr-3 mt-5 pt-5" >
        <Table striped bordered hover variant="light">
          <tbody>
            <tr >
              <td><a className="developer" href="#" >Dot Net Developers</a></td>
              <td><a className="developer" href="#">AngularJS Developers</a></td>
              <td><a className="developer" href="#">Application Developers</a></td>
              <td><a className="developer" href="#">Aurelia Developers</a></td>
              <td><a className="developer" href="#">C++ Developers</a></td>
              <td><a className="developer" href="#">Facebook API Developers</a></td>
            </tr>
            <tr>

              <td><a className="developer" href="#">ADK Developers</a></td>
              <td><a className="developer" href="#">API Developers</a></td>
              <td><a className="developer" href="#">Application Engineers</a></td>
              <td><a className="developer" href="#">Azure Developers</a></td>
              <td><a className="developer" href="#">CSS Developers</a></td>
              <td><a className="developer" href="#">Flash Developers</a></td>
            </tr>
          </tbody>

          <tbody>

            <tr>

              <td><a className="developer" href="#">iOS Developers</a></td>
              <td><a className="developer" href="#">JIRA Developers</a></td>
              <td><a className="developer" href="#">Android App Developers</a></td>
              <td><a className="developer" href="#">App Developers</a></td>
              <td><a className="developer" href="#">Application Programmers</a></td>
              <td><a className="developer" href="#">Drupal Developers</a></td>
            </tr>
            <tr>

              <td><a className="developer" href="#">Front End Developers</a></td>
              <td><a className="developer" href="#">Java Developers</a></td>
              <td><a className="developer" href="#">Android Developers</a></td>
              <td><a className="developer" href="#">HTML 5 Developers</a></td>
              <td><a className="developer" href="#">Java Engineers</a></td>
              <td><a className="developer" href="#">Bitcoin Developers</a></td>
            </tr>
          </tbody>

        </Table>

      </div>
    </div>
  </div>

)
export default ListComponent;