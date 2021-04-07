import React from "react"; 

const Footer = () => { 
return ( 
	<div>
    <footer class="bg-dark text-white border-top border-info">
        <div class="container text-center text-sm-left position-relative py-5">
            <div class="row">
                <div class="col-sm-6 col-md-3">
                    <h3 class="text-info pb-2 border-bottom border-info">Freelancer</h3>
                    <ul class="list-unstyled d-inline-block d-sm-block">
                        <li class="mb-2"><a class="text-light" href="#">Categories</a></li>
                        <li class="mb-2"><a class="text-light" href="#">Projects</a></li>
                        <li class="mb-2"><a class="text-light" href="#">Contests</a></li>
                        <li class="mb-2"><a class="text-light" href="#">Preferred Freelancer</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3">
                    <h3 class="text-info pb-2 border-bottom border-info">About</h3>
                    <ul class="list-unstyled d-inline-block d-sm-block">
                        <li class="mb-2"><a class="text-light" href="#">About us</a></li>
                        <li class="mb-2"><a class="text-light" href="#">How it Works</a></li>
                        <li class="mb-2"><a class="text-light" href="#">Security</a></li>
                        <li class="mb-2"><a class="text-light" href="#">Investor</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3">
                    <h3 class="text-info pb-2 border-bottom border-info">Program</h3>
                    <ul class="list-unstyled d-inline-block d-sm-block">
                        <li class="mb-2"><a class="text-light" href="#">Program Management</a></li>
                        <li class="mb-2"><a class="text-light" href="#">Local Jobs</a></li>
                        <li class="mb-2"><a class="text-light" href="#">Photo Anywhere</a></li>
                        <li class="mb-2"><a class="text-light" href="#">API for Developers</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3">
                    <h3 class="text-info pb-2 border-bottom border-info">Terms</h3>
                    <ul class="list-unstyled d-inline-block d-sm-block">
                        <li class="mb-2"><a class="text-light" href="#">Privacy Policy</a></li>
                        <li class="mb-2"><a class="text-light" href="#">Terms and Conditions</a></li>
                        <li class="mb-2"><a class="text-light" href="#">Copyright Policy</a></li>
                        <li class="mb-2"><a class="text-light" href="#">Fees and Charges</a></li>
                    </ul>
                </div>
            </div>
            <div class="text-center position-absolute w-100 mt-4"><a href="#top"><span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x text-dark"></i>
                             <i class="fa fa-angle-up fa-stack-1x text-white"></i></span></a></div>
        </div>
        <div class="pt-5 pb-4 bg-info text-dark">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-4 text-center text-md-left pb-4">
                        <h2 class="mb-3"><i class="fa fa-diamond"></i>&nbsp;Free to Lance</h2>
                        <p class="mb-1"><i class="fa fa-map-marker fa-fw ml-1"></i>India/English</p>
                        <p class="mb-1"><i class="fa fa-phone fa-fw"></i>&nbsp;+919426386288</p>
                        <p class="mb-1"><i class="fa fa-envelope fa-fw"></i>&nbsp;<a class="text-dark"
                                href="mailto:contact@company.com">contact@company.com</a></p>
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
                                    <div class="input-group-append"><button class="btn btn-dark" type="submit">Go!</button></div>
                                </div>
                            </div>
                        </form>
                        <div><a class="text-dark mx-2 mx-lg-0 ml-lg-3" href="#"><i
                                    class="fa fa-instagram fa-2x"></i></a><a class="text-dark mx-2 mx-lg-0 ml-lg-3"
                                href="#"><i class="fa fa-twitter fa-2x"></i></a><a
                                class="text-dark mx-2 mx-lg-0 ml-lg-3" href="#"><i
                                    class="fa fa-facebook-square fa-2x"></i></a><a
                                class="text-dark mx-2 mx-lg-0 ml-lg-3" href="#"><i
                                    class="fa fa-snapchat-ghost fa-2x"></i></a></div>
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
