import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import book from "../assets/images/cover.png";
import logoImage from "../assets/images/logoAndText.png";
import profile from "../assets/images/Filagot pic.jpg";
import profile2 from "../assets/images/instructor2.jpeg";
import Chapters from "./Chapters";
import Header from "./Header";
import Profile from "./Profile";
import chaptersData from "../chapters.json";

import { setSignInOpen } from "../redux/slices/authDialogSlice";

import { useDispatch, useSelector } from "react-redux";
import { useUserAuth } from "./Auth/UserAuthContext";
import Modal from "./Modal";

const Book = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookId } = useParams();
  const { user } = useUserAuth();
  console.log("id", bookId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [stroke, setStroke] = useState(4.8);

  const handlePurchase = () => {
    console.log("user is", user ? user?.email : null);
    if (user) {
      navigate(`/book/${bookId}/checkout`);
    } else {
      dispatch(setSignInOpen());
    }
  };

  const handleStartCourses = () => {
    navigate(`/course/${bookId}`);
  };
  return (
    <div className="container flex flex-col items-center mx-auto space-y-10 px-4 sm:px-8 py-10 lg:py-20 xl:py-28">
      <div className="m-4 sm:flex flex-col h-[700px] mt-20">
        <div className="sm:flex justify-around">
          <img
            className="object-cover sm:w-[25%] h-[100%] object-cover sm:w-[60%] md:w-[60%] lg:w-[25%] mb-4 sm:mb-0 rounded-2xl"
            src={book}
            alt="bookimage"
          />
          <div className="sm:w-[40%] flex flex-col items-start">
            <h1 className="comic-sans-large font-bold text-yellow-100 mb-4">
              Business for Kids
            </h1>
            <div className="sm:photo-wrapper p-2 flex items-center border-t-2 w-full mb-4">
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full mx-auto object-cover"
                src={profile}
                alt="John Doe"
              />
              <div className="sm:p-4">
                <h3 className="text-yellow-100 text-center sm:text-left text-xl text-gray leading-8">
                  Filagot Tesfaye
                </h3>
                <p className="text-yellow-100 text-center sm:text-left text-xs sm:text-sm">
                  Author
                </p>
                </div>
              </div>
            </div>
            <div className="flex items-center p-4 mb-4">
              <h1 className="font-bold text-xl mr-2">DIGITAL</h1>
              <p className="font-bold text-xl">$5.84</p>
            </div>
            <p className="text-sm mb-4">
              The Real World Money Lessons Digital Academy is an interactive and
              practical guide to financial literacy for kids and teens. We break
              down terms and concepts related to money so that kids can understand
              them and see how they work in the real world.
            </p>
            <div className="p-4">
              <button
                onClick={handlePurchase}
                className="btn outline-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 rounded"
              >
                Purchase Course
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:flex flex-row justify-between border-t-2 p-8">
        <div className="sm:w-[40%]">
          <h1 className="text-lg font-bold">What you'll learn</h1>
          <ul className="mt-2 list-disc list-inside">
            <li>
              Gain an immersive understanding of the practices and processes used
              by a junior or associate data analyst in their day-to-day job
            </li>
            <li>
              Understand how to clean and organize data for analysis, and complete
              analysis and calculations using spreadsheets, SQL and R programming
            </li>
            <li>
              Learn key analytical skills (data cleaning, analysis, & visualization)
              and tools (spreadsheets, SQL, R programming, Tableau)
            </li>
            <li>
              Learn how to visualize and present data findings in dashboards,
              presentations and commonly used visualization platforms
            </li>
          </ul>
        </div>
        <div id="sample" className="w-[50%]">
          <video className="h-full w-full rounded-lg" controls>
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div
        id="courses"
        className="sm:flex flex-row justify-between border-t-2 p-8"
      >
        <div className="sm:w-[40%] flex flex-col">
          <Chapters id={bookId} chaptersData={chaptersData} />
        </div>
        <div className="sm:w-[30%] flex flex-col items-start m-2 p-4">
          <div id="sample" className="flex flex-row sm:w-[100%] items-center mt-2">
            <Profile />
          </div>
          <div className="p-4">
            <button
              onClick={handlePurchase}
              className="btn outline-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 hover:border-black rounded"
            >
              Purchase Course
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Book;
