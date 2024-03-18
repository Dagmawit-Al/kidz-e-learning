import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/images/logoimagekid.jpeg";
import Modal from "./Modal";
import { useUserAuth } from "./Auth/UserAuthContext";
import { useDispatch } from "react-redux";
import {
  setSignInOpen,
  setSignUpOpen,
  setCloseAll,
} from "../redux/slices/authDialogSlice";

const Navbar = () => {
  const TOP_OFFSET = 50;
  const { user } = useUserAuth();
  const [nav, setNav] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);
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

  const handleSignUp = () => {
    dispatch(setSignUpOpen());
    // setShowRegistrationModal(true);
  };

  const handleModal = (values) => {
    setShowRegistrationModal(false);
    // console.log("input values are", values);
  };
  return (
    <div className="flex justify-around w-full absolute sm:w-full min-h-[100px] flex justify-between items-center absolute z-10 text-white mt-[-15px] ">
      <div className="flex items-center justify-around flex-1 fixed w-full">
        <div className="flex cursor-pointer items-center -mx-4">
          {" "}
          <NavLink to="/" className="flex items-center sm:flex items-center">
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
            <NavLink to="/" className="bubblegum-sans-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/storys" className="bubblegum-sans-link">
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className="bubblegum-sans-link">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/programs" className="bubblegum-sans-link">
              Programs
            </NavLink>
          </li>
        </ul>
        <div>
          <button
            onClick={handleSignUp}
            className="opacity-90 bg-button text-black"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex justify-evenly items-center">
        {/* Hamburger Icon */}

        <div
          onClick={handleNavClick}
          className="sm:hidden z-10 text-black absolute right-0"
        >
          <FaBars size={20} className="mr-4 cursor-pointer" />
        </div>
        {/* Hamburger Menu */}
        <div
          onClick={handleNavClick}
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-black left-0 w-full top-0 h-screen bg-logo/80 px-4 py-7 flex flex-col"
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
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li className="text-2xl py-8">
              <a href="#Programs">Programs</a>
            </li>
          </ul>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Navbar;
