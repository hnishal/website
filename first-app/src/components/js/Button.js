import React from 'react';
import { Button } from 'react-bootstrap';
const ButtonComponent = () =>
(
    <>
        <div class="row text-center mt-5 pt-2">
            <div class="col-lg-12 ">
                <div className="mb-5" >
                    <div className=" mb-2 align-center">
                        <Button style={{color:"skyblue"}} variant="dark" size="lg">
                            Hire a Pro
    </Button>{' '}
                    </div>
                    <Button style={{color:"skyblue"}} variant="dark" size="lg">
                        Apply to Open Roles
    </Button>
                </div>
            </div>
        </div>
    </>

)
export default ButtonComponent;