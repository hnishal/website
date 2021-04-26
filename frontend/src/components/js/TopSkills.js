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
              <td><a className="developer" href="https://www.guru99.com/what-is-backend-developer.html" >Backend Developers</a></td>
              <td><a className="developer" href="https://en.wikipedia.org/wiki/AngularJS">AngularJS Developers</a></td>
              <td><a className="developer" href="https://www.careerexplorer.com/careers/app-developer/">Application Developers</a></td>
              <td><a className="developer" href="https://www.tutorialspoint.com/aurelia/aurelia_quick_guide.htm">Aurelia Developers</a></td>
              <td><a className="developer" href="https://www.toptal.com/c-plus-plus/job-description">C++ Developers</a></td>
              <td><a className="developer" href="https://developers.facebook.com/docs/graph-api/overview/">Facebook API Developers</a></td>
            </tr>
            <tr>

              <td><a className="developer" href="https://www.adkgroup.com/services/mobile-applications/">ADK Developers</a></td>
              <td><a className="developer" href="https://developer.android.com/">API Developers</a></td>
              <td><a className="developer" href="https://www.jobhero.com/job-description/examples/computer-software/application-engineer">Application Engineers</a></td>
              <td><a className="developer" href="https://en.wikipedia.org/wiki/Microsoft_Azure">Azure Developers</a></td>
              <td><a className="developer" href="https://en.wikipedia.org/wiki/CSS">CSS Developers</a></td>
              <td><a className="developer" href="https://www.zippia.com/flash-developer-jobs/skills/">Flash Developers</a></td>
            </tr>
          </tbody>

          <tbody>

            <tr>

              <td><a className="developer" href="https://en.wikipedia.org/wiki/IOS">iOS Developers</a></td>
              <td><a className="developer" href="https://stackify.com/jira-software-developers/">JIRA Developers</a></td>
              <td><a className="developer" href="https://developer.android.com/">Android App Developers</a></td>
              <td><a className="developer" href="https://en.wikipedia.org/wiki/Mobile_app_development">App Developers</a></td>
              <td><a className="developer" href="https://apps.illinoisworknet.com/cis/clusters/OccupationDetails/100045?parentId=111100&section=overview&sectionTitle=Overview">Application Programmers</a></td>
              <td><a className="developer" href="https://en.wikipedia.org/wiki/Drupal">Drupal Developers</a></td>
            </tr>
            <tr>

              <td><a className="developer" href="https://en.wikipedia.org/wiki/Front-end_web_development">Front End Developers</a></td>
              <td><a className="developer" href="https://www.upgrad.com/blog/java-developer-salary-india-freshers-experienced/">Java Developers</a></td>
              <td><a className="developer" href="https://developer.android.com/">Android Developers</a></td>
              <td><a className="developer" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">HTML 5 Developers</a></td>
              <td><a className="developer" href="https://www.ziprecruiter.in/?utm_source=zr-go-redirect">Java Engineers</a></td>
              <td><a className="developer" href="https://bitcoin.org/en/development">Bitcoin Developers</a></td>
            </tr>
          </tbody>

        </Table>

      </div>
    </div>
  </div>

)
export default ListComponent;