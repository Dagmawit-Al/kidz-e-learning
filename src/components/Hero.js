import React from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/images/img-banner.png";
import btnart from "../assets/images/btn-art.png";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col  mt-[100px]  ">
      <div className="w-full flex items-center flex-col m-4 p-4">
        <div className="space-y-5 w-full md:w-[50%] w-[45%] items-center m-4 h-full flex flex-col text-black p-4">
          <h1 className="mystery-quest-header font-bold text-white font-header	">
            Empowering kids through entrepreneurship
          </h1>
          <p className="bubblegum-sans-subheader text-white">
            Our books and online programs empower kids aged 6-12 to excel in
            entrepreneurship and in life... all while putting smiles on their
            faces!
          </p>
        </div>
        <div className="flex pt-10">
          <NavLink to="/courses">
            <button className=" bg-button text-black ">Start Courses</button>
          </NavLink>
          <div className="-m-8 p-2">
            <img src={btnart} alt="btnart" />
          </div>
        </div>
      </div>

      <div>
        <img src={heroImage} alt="heroImage" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
