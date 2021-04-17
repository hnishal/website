import React, { useState } from 'react';
import {  Card, Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import image18 from '../../image/18.jpg';
import '../css/Profile.css';
import Footer from './Footer';
import NavComponent from './Nav';
const ProfileComponent = ({user_id}) => {

    let profile = localStorage.getItem('profile') || {};
        console.log("Hello chimkandi")
        console.log(user_id)
        let id = Number(user_id);
       axios.put(`/api/view_profile/${id}`)
       .then((response)=> {
           profile = JSON.parse(response.data)
           console.log("Profile class:", typeof(profile))
           localStorage.setItem('profile', profile)
           console.log("Username", profile.username)

           console.log("Response data:", JSON.parse(response.data));
        //    setposts(response.data)
        
        //    profile=response.data
        //    console.log("From Server: ", profile)
       }).catch((error)=>{
         console.log(error)
       })
       console.log("Profile is: ", profile)
    console.log("Profile type is: ", typeof(profile))


       console.log("Username", profile.username)


    return <div class="overflow-hidden">
         <div>
        <NavComponent/>
    </div>
        
        <div className="row">
            <div className=" ml-2 col-lg-8  col-md-11  col-sm-11 col-xs-12 sm-mt-2">
                <Card className="mt-5 pt-5 ml-5 pl-5">
                    <div className="d-flex">
                        <Card.Body >
                            <Card.Img id="img-18" variant="top" src={image18} />
                            <Card.Text className="mt-5">
                                I'm Online <br />
                                $5 USD /hour <br />
                                New Delhi, <a href="#">India</a> <br />
                                Joined November 2,2020 <br />
                                0 Recommendation <br />
                            </Card.Text>
                        </Card.Body>

                        <div className="col-md-7 col-lg-7"><br />

                            <div className="d-inline">
                                <p>
                                    
                                    <br /></p>

                            </div>
                            Name:
                            {profile.username} Front end web developer <br />
                                 compelete paragraph <br />
                        </div>
                        <button style={{marginRight:"20%", color:"skyblue"}} className=" button btn btn-dark mr-5 ">Edit Profile</button>
                    </div>
                </Card>
            </div>
            <div className=" ml-5 col-lg-3 col-md-3  col-sm-10 col-xs-12 d-none d-lg-block ">
                <Card className="mt-5 pt-5 ml-5 pl-5">
                    <div className="d-flex">
                        <Card.Body >
                            <Card.Text >
                            <div >
                               <h5>Verify</h5>
                               </div>
                               <div >
                               <hr className="mr-3"/>
                               <p>Preferred Freelancer <a href="#" >Join</a></p>
                               <p>Identity Verified</p>
                               <p>Payment Verified <a href="#" >Verify</a></p>
                               <p>Phone verified <a href="#" >Verify</a></p>
                               <p>Preferred Freelancer <a href="#" >Verify</a></p>
                               <p>Facebook Connected <a href="#" >Connect</a></p>
                               </div>
                            </Card.Text>
                        </Card.Body>
                      </div>
                </Card>
            </div>
            
        </div>
        <div className="row">
        
            {/* <div className=" ml-5 col-lg-3 col-md-3  col-sm-11 col-xs-12 d-none d-lg-block  overflow-hidden">
                <Card className="mt-5 pt-5 ml-5 pl-5">
                    <div className="d-flex">
                        <Card.Body >
                            <Card.Text >
                            <div style={{marginRight:"20%"}}>
                                <div className="d-flex">
                               <h5 >Top Skills</h5>
                                
                               <button style={{marginRight:"20%", color:"skyblue"}} className="ml-3 mb-1 btn btn-dark">Edit Skills</button>
                               </div>
                               <hr className="mr-4"/>
                               <p><a className="design text-center" href="#" >Website Design</a></p>
                               <p><a className="design" href="#" >Engineering</a></p>
                               <p><a className="design" href="#" >Article Writing</a></p>
                               <p><a className="design" href="#" >C++ Programming</a></p>
                               <p><a className="design" href="#" >HTML5</a></p>
                               <p><a className="text-center ml-2" href="#" >View</a></p>
                               </div>
                            </Card.Text>
                        </Card.Body>
                      </div>
                </Card>
            </div> */}
        </div>
        <div className="mt-5">
            <Footer/>
            </div>
    </div>
}
export default ProfileComponent;