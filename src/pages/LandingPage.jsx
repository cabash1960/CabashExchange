import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Why from "../Components/Why";
import Solutions from "../Components/Solutions";
import Create from "../Components/Create";
import Testimonial from "../Components/Testimonial";

const LandingPage = () => {
  return (
    <div className="font-poppins"> 
      <div className="bg-gray-950">
        <Hero />
      </div>
      <div id="products" className="bg-gray-900">
        <About />
      </div>
      <div id="features" className="bg-gray-950">
        <Why />
      </div>
      <div id="solutions" className="bg-gray-900">
        <Solutions />
      </div>
      <div className="bg-gray-950">
        <Create />
      </div>
      <div className="bg-gray-900">
        <Testimonial />
      </div>
    </div>
  );
};

export default LandingPage;
