import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import book from "../assets/images/book.png";
import profile from "../assets/images/instructor.jpeg";
import profile2 from "../assets/images/instructor2.jpeg";
import Chapters from "./Chapters";
import Profile from "./Profile";

const chaptersData = [
  {
    chaptertitle: "Foundations: Data, Data, Everywhere",
    chapternumber: 1,
    hours: 18,
    rating: 4.5,
  },
  {
    chaptertitle: "Foundations: Data, Data, Everywhere",
    chapternumber: 2,
    hours: 10,
    rating: 4.5,
  },
  {
    chaptertitle: "Foundations: Data, Data, Everywhere",
    chapternumber: 3,
    hours: 12,
    rating: 4.5,
  },
  {
    chaptertitle: "Foundations: Data, Data, Everywhere",
    chapternumber: 4,
    hours: 16,
    rating: 4.6,
  },
  {
    chaptertitle: "Foundations: Data, Data, Everywhere",
    chapternumber: 5,
    hours: 15,
    rating: 4.5,
  },
  {
    chaptertitle: "Foundations: Data, Data, Everywhere",
    chapternumber: 6,
    hours: 10,
    rating: 4.7,
  },
  {
    chaptertitle: "Foundations: Data, Data, Everywhere",
    chapternumber: 7,
    hours: 12,
    rating: 4,
  },
  {
    chaptertitle: "Foundations: Data, Data, Everywhere",
    chapternumber: 8,
    hours: 8,
    rating: 4.5,
  },
];

const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [stroke, setStroke] = useState(4.8);
  return (
    <div className="sm:flex flex-col w-full h-screen">
      <div className="h-screen m-4 sm:flex flex-col mt-5 h-[700px]">
        <h1 className="flex justify-center font-bold text-4xl p-4 text-buttoncolor ">
          KidsLearning
        </h1>
        <div className="sm:flex justify-around">
          <img
            className="object-cover sm:w-[25%] h-[100%] object-cover sm:w-[50%] md:w-[50%] lg:w-[25%]"
            src={book}
            alt="bookimage"
          />
          <div className="sm:w-[50%] flex flex-col items-start">
            <h1 className="sm:text-7xl font-bold w-[75%] ">
              Real World Money Lessons
            </h1>
            <div className="sm:photo-wrapper p-2 flex items-center border-t-2 w-full">
              <div className="flex items-center">
                <img
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                  src={profile}
                  alt="John Doe"
                />
                <div className="sm:p-4">
                  <h3 class="text-center sm:text-center text-xl text-gray leading-8">
                    Seble Doez
                  </h3>
                  <p className="text-center text-xs sm:text-center">
                    Author, Photographer
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="items-center p-4">
                <h1 className="font-bold text-xl">DIGITAL</h1>
                <p className="font-bold text-xl">$5.84</p>
              </div>
            </div>
            <div className="sm:w-[50%]">
              <p>
                The Real World Money Lessons Digital Academy is an interactive
                and practical guide to financial literacy for kids and teens. We
                break down terms and concepts related to money so that kids can
                understand them and see how they work in the real world.
              </p>
            </div>
            <div className="p-4">
              <button className="bg-buttoncolor">Purchase</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-16 sm:flex w-[25%] p-4">
        <a href="#courses">
          <button class="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded">
            Courses
          </button>
        </a>
        <button
          href="#worksheet"
          class="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded"
        >
          Worksheet
        </button>

        <button
          href="#level"
          class="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded"
        >
          Quiz
        </button>
      </div>

      <div className="mt-4 sm:flex flex-row justify-around border-t-2 p-8 ">
        <div className="sm:w-[25%]">
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
        <div id="sample" className=" w-[50%]">
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
        className="sm:flex flex-row justify-around border-t-2 p-8 "
      >
        <div className=" sm:w-[50%] flex flex-col">
          <Chapters chaptersData={chaptersData} />
        </div>
        <div
          id="sample"
          className="flex flex-row sm:w-[25%] border-2 h-[50%] items-center mt-2"
        >
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Book;
