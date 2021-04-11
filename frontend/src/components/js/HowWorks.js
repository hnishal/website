import React from 'react';
import {Card} from 'react-bootstrap';
import NavbarComponent from './Navbar';
import Footer from './Footer';
const WorkingComponent = () =>{
    return (
        <div>
        <div>
            <NavbarComponent/>
            </div>
            <div class="row">
            <div className="ml-5 pl-5 col-lg-11 col-md-10 col-sm-10">
            <Card className="card p-5 mr-5 mt-5 pt-5">
            <h1>The Complete Guide to Freelance Success</h1>
        <h3>What Is Freelancing?</h3>
        <p>Essentially, a freelance job is one where a person works for themselves, rather than for a company. While freelancers do take on contract work for companies and organizations, they are ultimately self-employed.

        Freelancers are responsible for all sorts of things that traditional employees are not, such as setting their work hours, keeping track of time spent on different projects, billing clients, and paying their own employment and business taxes. Freelancers are not considered “employees” by the companies they work for, but rather “contractors.”</p>

        <h3>Ways to Say “Freelance Jobs”</h3>
        <p>When you’re searching for freelance jobs, there are a number of different terms to be aware of. These can help you find freelance job openings, and they’re also useful when describing yourself and the work you do to potential clients.</p>
        <p><h5 style={{fontWeight:"bold"}}>Contract work:</h5> Jobs where you’re a temporary contract worker, rather than a permanent employee.</p>
        <p><h5 style={{fontWeight:"bold"}}>Contract job: </h5> Same as contract work.</p>
        <p><h5 style={{fontWeight:"bold"}}>Independent contractor: </h5> Another common way to say freelancer, but your work terms are specified by a contract with another company or individual.</p>
        <p><h5 style={{fontWeight:"bold"}}>1099:</h5> Refers to the IRS form an independent contractor fills out, form 1099-MISC, and is often used to describe the job (“This is a 1099 contract role”).</p>
        <p><h5 style={{fontWeight:"bold"}}>Contract</h5> consultant: Someone who is hired for temporary consultations for specific issues within a company.</p>
        <p><h5 style={{fontWeight:"bold"}}>Contract-to-hire:</h5> A job that begins as a freelance, independent contractor position but has the potential to become a regular employee position if things go well.</p>
        <h3>How to Find Freelance Work</h3>
        <p>Focusing on companies that are known to hire freelancers can be a great way to start your search for freelance work. For example, these employers have posted the most freelance openings on FlexJobs:</p>
        <ul>
        <li>Kforce</li>
        <li>Kelly</li>
        <li>Ajilon</li>
        <li>Accounting Principals</li>
        <li>Randstad</li>
        <li>Robert Half International</li>
        <li>K12</li>
        <li>Solomon Page</li>
        <li>Dahl Consulting</li>
        <li>Cactus Communications</li>
        </ul>
        <h3>Most Common Freelance Career Fields</h3>
        <p>As you can see from the freelance job listings on FlexJobs, a variety of companies, organizations, and government agencies hire freelancers. You’ll find work in almost every career imaginable, and the freelance jobs vary from small, temporary projects to long-term, full-time projects.</p>

        <p>These are the fields that hire the most freelancers:</p>
        <ul>
        <li>Accounting & Finance</li>
        <li>Administrative</li>
        <li>Writing</li>
        <li>Customer Service</li>
        <li>Bilingual</li>
        <li>Computer & IT</li>
        <li>Medical & Health</li>
        <li>Editing</li>
        <li>HR & Recruiting</li>
        <li>Education & Training</li>
        </ul>
        <h4>Pros and Cons of Freelancing</h4>
        <p>Every job has pros and cons, and freelancing is no different. Being aware of the challenges can ensure you’re prepared for them.</p>

        <h5>Pros of Freelancing</h5>
        <p>Having control over your workload, the clients you work with, and your income is a significant benefit of freelancing. When you freelance, you’re in the driver’s seat. You determine what jobs to take on, which clients you want to work for, and your pay rate. Depending on your level of expertise, it’s possible to work part-time hours but make full-time pay.
        Flexibility and remote work are also a perk. Most of the time, working on freelance projects will involve working at your home office during the hours you choose. You’ll absolutely have deadlines to meet, but you will decide when and where you work.</p>

        <h5>Cons of Freelancing</h5>
        <p>With the ultimate in control comes additional responsibilities. As a freelancer, you are a business owner, and you need to stay on top of taxes, invoices, payments received, finding your own health insurance, and buying every piece of software and technology you need to complete your work.
        Feast or famine syndrome is another real downside to freelancing. Some months you’ll be full to the brim with work, while the next month may be a ghost town. You may be relying on a consistent contract with one client, only to find they suddenly don’t need you anymore. Freelancing requires good money management and constant sourcing of new clients.</p>
        </Card>
        </div>
        </div>
        <div className="mt-5 pt-5">
        <Footer/>
        </div>
        </div>
    )
}
export default WorkingComponent;