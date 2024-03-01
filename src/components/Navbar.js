import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/images/logoimagekid.jpeg";

const Navbar = () => {
  const TOP_OFFSET = 50;
  const [nav, setNav] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[100px] flex justify-between items-center absolute z-10 text-white  ">
      <div
        className={`${
          showBackground
            ? "bg-red flex items-center justify-around flex-1 fixed w-full top-0 opacity-70"
            : "flex items-center justify-around flex-1 fixed w-full"
        }`}
      >
        <div className="flex cursor-pointer items-center -mx-4">
          {" "}
          <NavLink to="/" className="flex items-center">
            <img
              href="/"
              src={logoImage}
              alt="Logo"
              className="h-8 w-8 cursor-pointer rounded-full "
            />
            <p className=" text-black cursor-pointer pl-2 font-bold">Kidz</p>
          </NavLink>
        </div>
        <ul className="hidden  sm:flex px-4 text-black">
          <li>
            <NavLink to="/">Our Story</NavLink>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <NavLink to="/Programs">Programs</NavLink>
          </li>
        </ul>
        <div>
          <button className=" opacity-70 bg-red ml-30">Sign Up</button>
        </div>
      </div>

      <div className="flex justify-evenly items-center">
        {/* Hamburger Icon */}

        <div onClick={handleNavClick} className="sm:hidden z-10 text-black">
          <FaBars
            size={20}
            className={`${
              showBackground
                ? "mr-4 cursor-pointer fixed top-5 right-0 z-300"
                : "mr-4 cursor-pointer fixed top-10 right-0"
            }`}
          />
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
