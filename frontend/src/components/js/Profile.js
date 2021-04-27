import React, { useState, useEffect } from 'react';
import {  Card} from 'react-bootstrap';
import axios from 'axios';
import image18 from '../../image/18.jpg';
import '../css/Profile.css';
import Footer from './Footer';
import NavComponent from './Nav';
const ProfileComponent = ({user_id}) => {
    const [profile, setprofile] = useState(localStorage.getItem('profile') || {});
        console.log(user_id)
        let id = Number(user_id);
    
    useEffect(() => {
        axios.put(`/api/view_profile/${id}`)
       .then((response)=> {
           localStorage.setItem('profile', JSON.parse(response.data))
           setprofile(JSON.parse(response.data))
           console.log("Response data:", JSON.parse(response.data));
       }).catch((error)=>{
         console.log(error)
       })
        

       console.log("Profile is: ", profile)
    console.log("Profile type is: ", typeof(profile))


       console.log("Username", profile.username)
    }, [])
       
    function editProfileurl(event) {
        event.preventDefault();
       window.location = 'http://localhost:5000/editProfile';
     }

    return <div class="overflow-hidden">
         <div>
        <NavComponent/>
    </div>
        
        <div className="row">
            <div className="ml-5 pl-5 mr-5 pr-5 col-lg-6  col-md-11  col-sm-11 col-xs-12 sm-mt-2">
                <Card className="mt-5 pt-5 ml-2 pl-5">
                    <div className="d-flex m-5">

                        <div className="col-md-7 col-lg-7 mb-5" style={{marginLeft:"auto" , marginRight:"auto"}}><br />

                            <div className="d-inline">

                            </div>
                            {profile !== {} ? <div >
                                {profile.first_name+" "} {profile.last_name}<br/>
                                {profile.firstline}<br/>
                               {profile.city}<br/>
                               {profile.state}<br/>
                               {profile.country}<br/>
                               {profile.zipcode}<br/>
                            </div>: <div></div>
                            }
                        </div>
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
        </div>
        <div className="mt-5">
            <Footer/>
            </div>
    </div>
}
export default ProfileComponent;


