import React from 'react';
import { Button } from 'react-bootstrap';
const ButtonComponent = () =>
(
    
    <>
    
        <div class="row text-center mt-5 pt-2">
            <div class="col-lg-12 ">
                <div className="mb-5" >
                    <div className=" mb-2 align-center">
                        <h5>Don't have an account</h5><br/>
                        <Button style={{color:"skyblue"}} variant="dark" size="lg"  href="./signup"
                        >
                            Signin
    </Button>{' '}
                    </div>
                    <h5 class="mt-4">Already have an account</h5>
                    <Button style={{color:"skyblue"}} variant="dark" size="lg" class="mt-5 pt-5" href="./login"
                    >
                        Login
    </Button>
                </div>
            </div>
        </div>
    </>

)

export default ButtonComponent;