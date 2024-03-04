import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/images/img-banner.png";

const Hero = () => {
  return (
    <div id="hero" className="w-full h-[90vh]">
      <img
        src={heroImage}
        alt="heroImage"
        className="w-full h-full object-cover opacity-75"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-black p-4">
          <h1 className="font-bold text-4xl text-gray-dark font-header	">
            Empowering kids through entrepreneurship
          </h1>
          <p className="text-gray-dark">
            Our books and online programs empower kids aged 6-12 to excel in
            entrepreneurship and in life... all while putting smiles on their
            faces!
          </p>
          <div className="text-white">
            <button className=" bg-gray-light text-black font-bold">
              Register
            </button>
            <NavLink to="/products">
              <button className="opacity-80 bg-red ">Start Courses</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
