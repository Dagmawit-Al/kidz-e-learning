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
import { clearPathName } from "../redux/slices/locationSlice";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const TOP_OFFSET = 50;
  // const userFirebase = useSelector((state) => state.userData.userFirebase);

  const { t } = useTranslation();

  const [nav, setNav] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const firebaseUser = useSelector((state) => state.userData.user);
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
      // alert("An error occured while fetching user data");
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserName();
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
    dispatch(clearUser());
    dispatch(clearPathName());
    navigate("/");
    // setShowRegistrationModal(true);
  };

  const handleModal = (values) => {
    setShowRegistrationModal(false);
    // console.log("input values are", values);
  };
  return (
    <div className="flex justify-around w-full absolute sm:w-full min-h-[70px] flex justify-between items-center absolute z-10 text-white mb-10">      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <NavLink to="/">
          <img
            src={logoImage}
            alt="Logo"
            className="h-190 w-190 sm:h-[190px] w-[190px] rounded-full mr-4"
          />
        </NavLink>
        <ul className="hidden md:flex space-x-8">
          <li>
            <NavLink to="/" className="bubblegum-sans-link text-white">
              {t('home')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/story" className="bubblegum-sans-link text-white">
              {t('ourStory')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className="bubblegum-sans-link text-white">
              {t('blog')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="bubblegum-sans-link text-white">
              {t('courses')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/programs" className="bubblegum-sans-link text-white">
              {t('events')}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        {user && firebaseUser ? (
          <button
            onClick={handleLogOut}
            className="btn outline-button border rounded-2xl text-white"
          >
            {t('logOut')}
          </button>
        ) : (
          <>
            <button
              onClick={handleSignIn}
              className="btn outline-button border rounded-2xl text-white"
            >
              {t('signIn')}
            </button>
            <button
              onClick={handleSignUp}
              className="btn outline-button border rounded-2xl text-white"
            >
              {t('signUp')}
            </button>
          </>
        )}
        <div className="md:hidden">
          <FaBars
            size={20}
            className="text-white cursor-pointer"
            onClick={handleNavClick}
          />
        </div>
      </div>
    </div>
    <div
          onClick={handleNavClick}
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-black left-0 w-full top-0 h-screen bg-logo/80 px-4 py-7 mt-5 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center pt-12">
            <li className="text-2xl py-8">
              <a href="/story">Our Story</a>
            </li>
            <li className="text-2xl py-8">
              <a href="/blogs">Blog</a>
            </li>
            <li className="text-2xl py-8">
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li className="text-2xl py-8">
              <a href="/programs">Programs</a>
            </li>
          </ul>
        </div>
      {/* {nav && (
        <div className="flex justify-evenly items-center md:hidden  ">
          <ul className="space-y-4">
            <li>
              <NavLink to="/storys" onClick={handleNavClick}>
                {t('ourStory')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" onClick={handleNavClick}>
                {t('blog')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" onClick={handleNavClick}>
                {t('courses')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/programs" onClick={handleNavClick}>
                {t('events')}
              </NavLink>
            </li>
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
