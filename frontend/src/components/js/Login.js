import React,{useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/Login.css';
import axios from 'axios';
const LoginComponent = () => {

    
    function dashboardurl() {
        window.location = 'http://localhost:5000/dashboard';
    }

    const [myusername, setmyusername] = useState("")
    const [mypwd, setmypwd] = useState("")
    const login_info = {
        loginInfo: {
            username: myusername,
            password: mypwd
        }
    }
    function loginrequest(event) {
        event.preventDefault()
        localStorage.setItem('username', myusername)
        localStorage.setItem('pwd',mypwd)
        
        
    
        axios.post('/api/login', login_info)
        .then((response) => {
            console.log(response);   
            if(response.data != false){
                localStorage.setItem('user_id', response.data.user_id)
                localStorage.setItem('email', response.data.email)
                localStorage.setItem('type', response.data.type)
                dashboardurl()
            }  
            else{
                alert("Login unsuccessful")
            }          
        }).catch((error) => {                                   
            console.log(error)
        })
        
    }   

    return (
        <div class="mt-5 pt-5">
            <div class="d-flex flex-column justify-content-center" id="login-box">
                <div class="login-box-header">
                    <h4 style={{ color: "rgb(139,139,139)", marginBottom: "0px", fontWeight: "400", fontSize: "27px" }}>Login</h4>
                </div>
                <div class="login-box-content">
                    <div class="fb-login box-shadow"><a class="d-flex flex-row align-items-center social-login-link" href="#">
                       <i class="fa fa-facebook" style={{ marginLeft: "0px", paddingRight: "20px", paddingLeft: "22px", width: "56px" }}></i>Login with
                Facebook</a></div>
                    <div class="gp-login box-shadow"><a class="d-flex flex-row align-items-center social-login-link"
                        style={{ marginBottom: "10px" }} href="#"><i class="fa fa-google"
                            style={{ color: "rgb(255,255,255)", width: "56px" }}></i>Login with Google+</a></div>
                </div>
                <div class="d-flex flex-row align-items-center login-box-seperator-container">
                    <div class="login-box-seperator"></div>
                    <div class="login-box-seperator-text">
                        <p
                            style={{ marginBottom: "0px", paddingLeft: "10px", paddingRight: "10px", fontWeight: "400", color: "rgb(201,201,201)" }}>
                            or</p>
                    </div>
                    <div class="login-box-seperator"></div>
                </div>
                <div class="email-login" style={{ backgroundColor: "#ffffff" }}><input type="email" class="email-imput form-control" required value={myusername} onChange={(event) => setmyusername(event.target.value)}
                    style={{ marginTop: "10px" }} required="" placeholder="Email" minlength="6" /><input type="password"
                        class="password-input form-control" style={{ marginTop: "10px" }} required="" placeholder="Password" 
                        minlength="6"  required value={mypwd} onChange={(event) => setmypwd(event.target.value)}/></div>
                <div class="submit-row" style={{ marginBottom: "8px", paddingTop: "0px" }}><button
                    class="btn btn-dark btn-block box-shadow " id="submit-id-submit" type="submit" style={{ color: "skyblue" }} onClick={loginrequest}>Login</button>
                    <div class="d-flex justify-content-between">
                        <div class="form-check form-check-inline" id="form-check-rememberMe"><input class="form-check-input"
                            type="checkbox" id="formCheck-1" for="remember" style={{ cursor: "pointer" }} name="check" />

                            <label class="form-check-label" for="formCheck-1">
                                <span class="label-text">Remember Me</span></label>
                        </div><a id="forgot-password-link" href="#">Forgot Password?</a>
                    </div>
                </div>
                <div id="login-box-footer" style={{ padding: "10px 20px", paddingBottom: "23px", paddingTop: "18px" }}>
                    <p style={{ marginBottom: "0px" }}>Don't you have an account?<a id="register-link" href="./signup" >Sign Up!</a></p>
                </div>
            </div>
        </div>
    
    )
}

export default LoginComponent;