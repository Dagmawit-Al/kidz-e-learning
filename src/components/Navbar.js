import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import logoImage from "../assets/images/logoAndText.png";
import textLogo from "../assets/images/text_logo_transparent_720.png";

import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import Modal from "./Modal";
import { useUserAuth } from "./Auth/UserAuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  setSignInOpen,
  setSignUpOpen,
  setCloseAll,
} from "../redux/slices/authDialogSlice";
import { clearUser } from "../redux/slices/userSlice";

const Navbar = () => {
  const TOP_OFFSET = 50;
  // const userFirebase = useSelector((state) => state.userData.userFirebase);

  const [nav, setNav] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [user, loading, error] = useAuthState(auth);
  const [users, setUsers] = useState(user);

  const [name, setName] = useState("");
  const [uid, setUID] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.firstname);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    // fetchUserName();
    const handleScroll = () => {
      // console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUID(user.uid);
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setUsers(user);
  }, [user]);

  const handleNavClick = () => {
    setNav(!nav);
  };

  const handleSignUp = () => {
    dispatch(setSignUpOpen());
    // setShowRegistrationModal(true);
  };

  const handleSignIn = () => {
    console.log("sign in is clicked");
    dispatch(setSignInOpen());
    // setShowRegistrationModal(true);
  };

  const handleLogOut = () => {
    auth.signOut();

    dispatch(setCloseAll());
    navigate("/");
    // setShowRegistrationModal(true);
  };

  const handleModal = (values) => {
    setShowRegistrationModal(false);
    // console.log("input values are", values);
  };
  return (
    <div className="flex justify-around pt-10 w-[100%] absolute sm:w-full min-h-[70px] flex justify-between items-center absolute z-10 text-white ">
      <div className=" sm:flex items-center justify-around flex-1 fixed w-full h-[70px]">
        <div className="flex cursor-pointer items-center ">
          {" "}
          <NavLink to="/" className=" sm:flex items-center">
            <img
              href="/"
              src={logoImage}
              alt="Logo"
              className="sm:h-[190px] w-[190px] cursor-pointer rounded-full "
            />
          </NavLink>
        </div>
        <ul className="hidden  sm:flex px-4 text-black">
          <li>
            <NavLink to="/" className="bubblegum-sans-link text-white">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/storys" className="bubblegum-sans-link text-white">
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className="bubblegum-sans-link text-white">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="bubblegum-sans-link text-white">
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/programs" className="bubblegum-sans-link text-white">
              Programs
            </NavLink>
          </li>
        </ul>
        <div className=" sm:mr-2 ">
          {user ? (
            <button
              onClick={handleLogOut}
              className=" bg-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2  hover:border-black rounded "
            >
              Log Out
            </button>
          ) : (
            <>
              <button
                onClick={handleSignIn}
                className=" bg-button hover:bg-middlesection text-black hover:text-black py-2 px-2  hover:border-black rounded "
              >
                Sign In
              </button>
              <button
                onClick={handleSignUp}
                className=" bg-button hover:bg-middlesection text-black hover:text-black py-2 px-2  hover:border-black rounded "
              >
                Sign Up
              </button>
            </>
          )}
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
      {/* <Modal /> */}
    </div>
  );
};

export default Navbar;
