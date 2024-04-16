import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ChapterSummaryCard from "../ChapterSummaryCard";
import { useUserAuth } from "../Auth/UserAuthContext";
import { useDispatch, useSelector } from "react-redux";

import {
  setSignInOpen,
  setSignUpOpen,
  setCloseAll,
} from "../../redux/slices/authDialogSlice";

import { setPathName, listPathName } from "../../redux/slices/locationSlice";

import Signup from "../Modal";
import Header from "../Header";
import TobBar from "../TobBar";

function Chapter(props) {
  const { bookId } = useParams();
  console.log("bookid is", bookId);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useUserAuth();
  let USER = true;
  const [openSignup, setOpenSignup] = useState(false);
  const { chapternumber } = useParams();
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const { pathname } = useSelector((state) => state.locationslice);
  // useEffect(() => {
  //   console.log("chapternumber", chapternumber);
  // }, []);
  // useEffect(() => {
  //   console.log("pathname is", pathname);
  // }, [pathname]);
  //   useEffect(() => {
  //       const unsubscribe = fetch("api/chapternumber", (value, err)=>)
  //   }, []);

  const handlePurchase = () => {
    console.log("user is", user ? user?.email : null);
    if (user) {
      navigate(`/book/${bookId}/checkout`);
    } else {
      dispatch(setSignInOpen());
    }
  };

  const handleCheckoutPageRoute = () => {
    console.log("handleCheckoutpageclicked");
  };

  return (
    <>
    {/* <TobBar/> */}
    <div className="w-[100%] sm:flex flex-col">
      {/* <Header /> */}
      <div className="h-full m-4 sm:flex flex-col mt-40">
        <div className="sm:flex justify-around md:flex flex-between p-2">
          <div className="sm:w-full sm:max-w-[50%] flex flex-col justify-between">
            <h1 className="comic-sans-large sm:text-2xl font-bold w-full border-b-2 pb-2">
              Foundation: Real World Money Lessons, chapter {chapternumber}
            </h1>
            <div className="sm:photo-wrapper p-2">
              <p className="roboto-medium-italic text-lg sm:text-center border-b-2">
                This course is part of Google Data Analytics Professional Certificate
              </p>
              <p className="comic-sans-small sm:w-[75%]">
                The Real World Money Lessons Digital Academy is an interactive and practical guide to financial literacy for kids and teens. We break down terms and concepts related to money so that kids can understand them and see how they work in the real world.
              </p>
            </div>
            <div className="p-4">
              <button
                onClick={handlePurchase}
                className="bg-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2  hover:border-black rounded"
              >
                Purchase Course
              </button>
            </div>
          </div>
          <ChapterSummaryCard handlePurchaseButton2={handlePurchase} />
        </div>
      </div>

      <div className="mt-4 sm:flex flex-row border-t-2 p-8">
        <div className="w-full sm:w-[30%]">
          <h1 className="font-bold text-lg">What you'll learn</h1>
          <ul className="list-disc list-inside">
            <li>Gain an immersive understanding of the practices and processes used by a junior or associate data analyst in their day-to-day job</li>
            <li>Understand how to clean and organize data for analysis, and complete analysis and calculations using spreadsheets, SQL and R programming</li>
            <li>Learn key analytical skills (data cleaning, analysis, & visualization) and tools (spreadsheets, SQL, R programming, Tableau)</li>
            <li>Learn how to visualize and present data findings in dashboards, presentations and commonly used visualization platforms</li>
          </ul>
        </div>
      </div>

      <div id="courses" className="sm:flex flex-row justify-start border-t-2 p-8">
        <div className="sm:w-full sm:max-w-[50%] flex flex-col">
          <h1 className="font-bold text-lg">Professional Certificate - 8 course series</h1>
          <p className="comic-sans-small p-4 text-gray">
            Prepare for a new career in the high-growth field of data analytics, no experience or degree required. Get professional training designed by Google and have the opportunity to connect with top employers.
            <span className="font-bold block mt-2">
              There are 483,000 open jobs in data analytics with a median entry-level salary of $92,000.¹
            </span>
          </p>
        </div>
      </div>
      {/* 
  <Signup
    showRegistrationModal={showRegistrationModal}
    handleshowRegistrationModal={setShowRegistrationModal}
    showLoginModal={showLoginModal}
    handleshowLoginModal={setShowLoginModal}
  /> */}
    </div>
    </>
  );
}

export default Chapter;
