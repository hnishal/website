// import React, { useState, useEffect } from 'react';
// import { Card } from 'react-bootstrap';
// import axios from 'axios';
// import image18 from '../../image/18.jpg';
// import '../css/Profile.css';
// import Footer from './Footer';
// import NavComponent from './Nav';
// const EditProfileComponent = () => {

//     const [firstname, setfirstname] = useState("")
//   const [lastname, setlastname] = useState("")
//   const [firstline, setfirstline] = useState("")
//   const [city, setcity] = useState("")
//   const [state, setstate] = useState("")
//   const [zip, setzip] = useState(0)
//   const [country, setcountry] = useState("")
//   const [phoneno,setphoneno]=useState(0)
//   const [edu_country,setedu_country]=useState("")
//   const [university,setuniversity]=useState("")
//   const [degree,setdegree]=useState("")
//   const [start_year,setstart_year]=useState(0)
//   const [end_year,setend_year]=useState(0)

//   function settingrequest(event) {
//       event.preventDefault()

//       const setting_info = {
//         info  : {
//             user_id:Number(user_id),
//               first_name:firstname,
//               last_name:lastname
//           }
//       }
//       console.log(setting_info)
//       axios.post('/api/add_user_info', setting_info)
//       .then((response) => {
//           console.log(response);               
//       }).catch((error) => {                                   
//           console.log(error)
//       })
//       profileurl();
//   }  
//   function passwordurl(event) {
//      event.preventDefault();
//     window.location = 'http://localhost:5000/password';
//   }

//     return <div class="overflow-hidden">
//          <div>
//         <NavComponent/>
//     </div>
        
//         <div className="row">
//             <div className=" ml-2 col-lg-8  col-md-11  col-sm-11 col-xs-12 sm-mt-2">
//                 <Card className="mt-5 pt-5 ml-2 pl-5">
//                     <div className="d-flex m-5">
//                         <Card.Body >
//                             <Card.Img id="img-18" variant="top" src={image18} />
//                         </Card.Body>

//                         <div className="col-md-7 col-lg-7"><br />

//                             <div className="d-inline">

//                             </div>
//                             {profile !== {} ? <div>
//                                 {profile.first_name+" "} {profile.last_name}<br/>
//                                 {profile.firstline}<br/>
//                                {profile.city}<br/>
//                                {profile.state}<br/>
//                                {profile.country}<br/>
//                                {profile.zipcode}<br/>
//                             </div>: <div></div>
//                             }
//                         </div>
//                         <button style={{marginRight:"20%", color:"skyblue"}} className=" button btn btn-dark mr-5 ">Edit Profile</button>
//                     </div>
//                 </Card>
//             </div>
//             <div className=" ml-5 col-lg-3 col-md-3  col-sm-10 col-xs-12 d-none d-lg-block ">
//                 <Card className="mt-5 pt-5 ml-5 pl-5">
//                     <div className="d-flex">
//                         <Card.Body >
//                             <Card.Text >
//                             <div >
//                                <h5>Verify</h5>
//                                </div>
//                                <div >
//                                <hr className="mr-3"/>
//                                <p>Preferred Freelancer <a href="#" >Join</a></p>
//                                <p>Identity Verified</p>
//                                <p>Payment Verified <a href="#" >Verify</a></p>
//                                <p>Phone verified <a href="#" >Verify</a></p>
//                                <p>Preferred Freelancer <a href="#" >Verify</a></p>
//                                <p>Facebook Connected <a href="#" >Connect</a></p>
//                                </div>
//                             </Card.Text>
//                         </Card.Body>
//                       </div>
//                 </Card>
//             </div>
            
//         </div>
//         <div className="mt-5">
//             <Footer/>
//             </div>
//     </div>
// }
// export default EditProfileComponent;


