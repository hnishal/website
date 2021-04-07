import React, { Profiler } from 'react';
import NavbarComponent from './Navbar';
import CarouselComponent from './Carousel';
import CardComponent from './Card';
import CardComponent2 from './DisableCard';
import ListComponent from './TopSkills';
import CardComponent3 from './HireCard';
import ButtonComponent from './Button';
import Footer from './Footer';
const myStyle = {

    marginTop: "10%"
}
const HomeComponent = () => {
    return (
        <div className="overflow-hidden">
            <NavbarComponent />
            <CarouselComponent />
            <h1 className="text-center " style={myStyle}>TOP CATEGORIES</h1>
            <CardComponent />
            <h1 className="text-center" style={myStyle}>How it Works</h1>
            <CardComponent2 />
            <h1 className="text-center d-none d-lg-block" style={myStyle}>Browse Top Skills</h1>
            <ListComponent />
            <h1 className="text-center" style={myStyle}>Hire Flexibly</h1>
            <CardComponent3 />
            <h1 className="text-center" style={myStyle}>Join Our Community</h1>
            <ButtonComponent />
            <div style={{ backgroundColor: "black" }}>
                <Footer />
            </div>
        </div>

    )
}
export default HomeComponent;