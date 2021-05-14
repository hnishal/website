import React, {useState} from 'react';
import '../css/Signup.css';
import axios from 'axios';



function SignupComponent({ setusername, setemail, setuser_id ,type, settype,user_id}){

    function settingsurl() {
        window.location = 'http://localhost:5000/settings';
    }
    
    const [confirmpwd, setconfirmpwd] = useState("")
    const [myusername, setmyusername] = useState("")
    const [myemail, setmyemail] = useState("")
    const [mypwd, setmypwd] = useState("")
    const [mytype, setmytype] = useState("employer")
    
   
    function checkpwd() {
        return mypwd === confirmpwd
    }

    const user_info = {
        profile: {
            username: myusername,
            email: myemail,
            password: mypwd,
            type:mytype
        }
    }

    function handleClick(event){
        event.preventDefault()
        var emailpatt = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
        var passpatt = new RegExp("^(.*).{8,}$")
        if(emailpatt.test(myemail) && passpatt.test(mypwd))
        {
            // const hire = document.getElementById('hire')
            // const work = document.getElementById('work')
            // console.log(hire.checked)
            // console.log(work.checked)
            // if(hire.checked===true){
            //     localStorage.setItem('type', "employer")
            //     settype("employer")
            // }
            // else{
            //     localStorage.setItem('type', "freelancer")
            //     settype("freelancer")
            // }
            localStorage.setItem('type', mytype)
            settype(mytype)
            console.log(user_info)
            if(checkpwd()){
            axios.post('/api/signup', user_info)
                .then((response) => {
                    console.log(response.data);
                    console.log(response.data.message)
                    if(response.data.result){
                        localStorage.setItem('username', myusername)
                        localStorage.setItem('email', myemail)
                        localStorage.setItem('user_id', response.data.user_id)

                        setusername(myusername)
                        setemail(myemail)
                        console.log(response.data.user_id)
                        setuser_id(response.data.user_id)
                        alert("Signed up");
                        settingsurl();
                    }
                    else{
                        alert("Account already exist")
                    }         
                }).catch((error) => {
                    console.log(error)
                })
                } else {
            
                 alert("Confirm password should be equal to password");
                }
                
            }
    else{
        alert("Pattern is not correct")
    }
}


    return<div class="mt-5">

<section class="register-photo">
     <div class="form-container">
            <div class="image-holder"></div>
            <form method="post">
                <h2 class="text-center"><strong>Create</strong> an account.</h2>
                <div class="form-group"><input class="form-control" type="name" name="username" placeholder="username" required value={myusername} onChange={(event) => setmyusername(event.target.value)}/></div>
                <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" pattern="[a-zA-Z]+@[a-z]+.[a-z]+" required value={myemail} onChange={(event) => setmyemail(event.target.value)}/></div>
                <div class="form-group"><input class="form-control" type="password" name="password" value={mypwd} pattern='[a-zA-Z]{8}' onChange={(event) => setmypwd(event.target.value)} placeholder="Password" required/></div>
                <div class="form-group"><input class="form-control" type="password" name="password-repeat"
                        placeholder="Confirm Password " value={confirmpwd} onChange={(event) => setconfirmpwd(event.target.value)}/></div>

                    <div className="d-flex p-3 ">
                    <div class="form-check ml-auto font-weight-bold">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="hire" value="option1" onChange={(event) => setmytype("employer")}/>
                        <label class="form-check-label" for="exampleRadios1">
                            Hire
                        </label>
                        </div>
                        <div class="form-check mr-auto ml-2 font-weight-bold">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="work" value="option2" onChange={(event) => setmytype("freelancer")}/>
                        <label class="form-check-label" for="exampleRadios2">
                            Work
                        </label>
                        </div>
                    </div>




                <div class="form-group"><button class="btn btn-dark btn-block"  style={{color:"skyblue"}} type="submit" onClick={handleClick} >Sign Up</button></div>
                <div class="d-flex">
                <p>Already have an account</p>
                <a class=" ml-1 " href="./login"> Login here.</a>
                </div>
            </form>
        </div>
    </section>
    </div>
}
export default SignupComponent;

