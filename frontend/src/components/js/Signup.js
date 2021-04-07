import React from 'react';
import '../css/Signup.css';
const SignupComponent =()=>{
    
    return<div class="mt-5">

<section class="register-photo">
     <div class="form-container">
            <div class="image-holder"></div>
            <form method="post">
                <h2 class="text-center"><strong>Create</strong> an account.</h2>
                <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"/></div>
                <div class="form-group"><input class="form-control" type="password" name="password"
                        placeholder="Password"/></div>
                <div class="form-group"><input class="form-control" type="password" name="password-repeat"
                        placeholder="Confirm Password "/></div>
                <div class="form-group">
                    <div class="form-check"><label class="form-check-label"><input class="form-check-input"
                                type="checkbox"/>I agree to the license terms.</label></div>
                </div>
                <div class="form-group"><button class="btn btn-dark btn-block" style={{color:"skyblue"}}type="submit">Sign Up</button></div>
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