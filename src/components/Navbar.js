import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logoImage from "../assets/images/logoimagekid.jpeg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNavClick = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[100px] flex justify-between items-center absolute z-10 text-white  ">
      <div className="flex items-center justify-evenly flex-1">
        <div className="flex cursor-pointer items-center -mx-4">
          {" "}
          <img
            href="/"
            src={logoImage}
            alt="Logo"
            className="h-8 w-8 cursor-pointer rounded-full "
          />
          <p className=" text-black cursor-pointer pl-2 font-bold">Kidz</p>
        </div>
        <ul className="hidden  sm:flex px-4 text-black">
          <li>
            <a href="/">Our Story</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#Products">Products</a>
          </li>
          <li>
            <a href="#Programs">Programs</a>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <div className="mx-4">
          <button className="opacity-90 ">Sign Up</button>
        </div>
        {/* Hamburger Icon */}

        <div onClick={handleNavClick} className="sm:hidden z-10 text-black">
          <FaBars size={20} className="mr-4 cursor-pointer" />
        </div>
        {/* Hamburger Menu */}
        <div
          onClick={handleNavClick}
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-black left-0 w-full top-0 h-screen bg-orange/90 px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center pt-12">
            <li className="text-2xl py-8">
              <a href="/">Our Story</a>
            </li>
            <li className="text-2xl py-8">
              <a href="#Blog">Blog</a>
            </li>
            <li className="text-2xl py-8">
              <a href="#Products">Products</a>
            </li>
            <li className="text-2xl py-8">
              <a href="#Programs">Programs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
