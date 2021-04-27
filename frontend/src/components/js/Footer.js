import React from "react"; 

const Footer = () => { 

    function newsletter(){
        document.getElementById("newsletter").innerHTML="subscribed";
    }

return ( 
	<div>
    <footer class="bg-dark text-white border-top border-info">
        <div class="pt-5 pb-4 bg-info text-dark">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-4 text-center text-md-left pb-4">
                        <h2 class="mb-3"><i class="fa fa-diamond"></i>&nbsp;Free to Lance</h2>
                        <p class="mb-1"><i class="fa fa-map-marker fa-fw ml-1"></i>India/English</p>
                        <p class="mb-1"><i class="fa fa-phone fa-fw"></i>&nbsp;+919426386288</p>
                        <p class="mb-1"><i class="fa fa-envelope fa-fw"></i>&nbsp;<a class="text-dark"
                                href="#">freetolance@gmail.com</a></p>
                    </div>
                    <div class="col-md-6 col-lg-4 text-center text-md-left pb-4">
                        <p class="my-3">Freelancer ® is a registered Trademark of Freelancer Technology Private Limited  & Freelancer Online India 
                        Private Limited </p>
                    </div>
                    <div class="col-lg-4 text-center text-lg-right pb-4">
                        <h3 class="mb-0">Follow us</h3>
                        <p class="mb-2">Subscribe to our newsletter</p>
                        <form class="d-flex justify-content-center justify-content-lg-end">
                            <div class="form-group w-75">
                                <div class="input-group">
									<input class="form-control" type="text" required="" placeholder="Your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$"
                                        inputmode="email"/>
                                    <div class="input-group-append"><button class="btn btn-dark" id="newsletter" onClick={newsletter} type="submit">Go!</button></div>
                                </div>
                            </div>
                        </form>
                        <div>
                               </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center text-lg-left py-2 small bg-dark text-info font-italic">
            <div class="container">
                <p class="m-0">@ Free to Lance ~ All rights reserved</p>
            </div>
        </div>
    </footer>
	</div>
); 
}; 
export default Footer; 
