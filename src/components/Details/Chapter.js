import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChapterSummaryCard from "../ChapterSummaryCard";
import { useUserAuth } from "../Auth/UserAuthContext";
import Signup from "../Modal";
import Header from "../Header";

function Chapter(props) {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  let USER = true;
  const [openSignup, setOpenSignup] = useState(false);
  const { chapternumber } = useParams();
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  useEffect(() => {
    console.log("chapternumber", chapternumber);
  }, []);
  //   useEffect(() => {
  //       const unsubscribe = fetch("api/chapternumber", (value, err)=>)
  //   }, []);

  const handlePurchaseButton = (e) => {
    console.log("purchase button clicked", e);
    // setOpenSignup(true);
    if (!USER) {
      setShowRegistrationModal(true);
    } else {
      navigate("/checkout");
    }
    // user ? handleCheckoutPageRoute() : setOpenSignup(true);
  };

  const handleCheckoutPageRoute = () => {
    console.log("handleCheckoutpageclicked");
  };

  return (
    <div className="sm:flex flex-col w-full h-screen">
      <Header />
      <div className="h-screen m-4 sm:flex flex-col mt-5 h-[700px]">
        {/* <h1 className="flex justify-center font-bold text-4xl p-4 text-buttoncolor ">
          KidsLearning
        </h1> */}
        <div className="sm:flex justify-around p-2">
          <div className="sm:w-[50%] flex flex-col justify-between">
            <h1 className="sm:text-2xl font-bold w-[75%] border-b-2">
              Foundation: Real World Money Lessons, chapter {chapternumber}
            </h1>
            <div className="sm:photo-wrapper p-2 flex flex-col w-full">
              <div className="flex items-center">
                <div>
                  <p className="text-center text-xs sm:text-center border-b-2 m-2">
                    This course is part of Google Data Analytics Professional
                    Certificate
                  </p>
                </div>
              </div>
              <div className="sm:w-[50%]">
                <p>
                  The Real World Money Lessons Digital Academy is an interactive
                  and practical guide to financial literacy for kids and teens.
                  We break down terms and concepts related to money so that kids
                  can understand them and see how they work in the real world.
                </p>
              </div>
            </div>

            <div className="p-4">
              <button onClick={handlePurchaseButton} className="bg-buttoncolor">
                Purchase Course
              </button>
            </div>
          </div>
          <ChapterSummaryCard />
        </div>
      </div>

      <div className="mt-4 sm:flex flex-row border-t-2 p-8 ">
        <div className="w-[100%] sm:w-[30%] ">
          <h1>What you'll learn</h1>
          <ul>
            <li>
              Gain an immersive understanding of the practices and processes
              used by a junior or associate data analyst in their day-to-day job
            </li>
            <li>
              Understand how to clean and organize data for analysis, and
              complete analysis and calculations using spreadsheets, SQL and R
              programming
            </li>
            <li>
              Learn key analytical skills (data cleaning, analysis, &
              visualization) and tools (spreadsheets, SQL, R programming,
              Tableau)
            </li>
            <li>
              Learn how to visualize and present data findings in dashboards,
              presentations and commonly used visualization platforms
            </li>
          </ul>
        </div>
      </div>

      <div
        id="courses"
        className="sm:flex flex-row justify-start border-t-2 p-8  "
      >
        <div className=" sm:w-[50%] flex flex-col">
          <h1 className="font-bold">
            Professional Certificate - 8 course series
          </h1>
          <p className="p-4 text-gray">
            Prepare for a new career in the high-growth field of data analytics,
            no experience or degree required. Get professional training designed
            by Google and have the opportunity to connect with top employers.
            <span className="font-bold">
              There are 483,000 open jobs in data analytics with a median
              entry-level salary of $92,000.¹
            </span>
          </p>
        </div>
      </div>

      <Signup
        showRegistrationModal={showRegistrationModal}
        handleshowRegistrationModal={setShowRegistrationModal}
        showLoginModal={showLoginModal}
        handleshowLoginModal={setShowLoginModal}
      />
    </div>
  );
}

export default Chapter;
