import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import book from "../assets/images/book.png";
import profile from "../assets/images/instructor.jpeg";
import profile2 from "../assets/images/instructor2.jpeg";

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
          <div className="border-2 p-4	">
            {chaptersData.map((item, index) => (
              <div className="p-4" key={item.hours + item.rating + index}>
                <NavLink to={`/courses/book/chapter/${item.chapternumber}`}>
                  {" "}
                  <h1 className="font-bold hover:text-greentwo">
                    {item.chaptertitle}
                  </h1>{" "}
                </NavLink>
                <p className="pt-2 flex">
                  {" "}
                  Course {item.chapternumber} {item.hours}hours {item.rating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={stroke > 4 ? "currentColor" : "none"}
                    className="w-6 h-6 text-greentwo"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          id="sample"
          className="flex flex-row sm:w-[25%] border-2 h-[50%] items-center"
        >
          <div className="p-2 flex flex-col items-start">
            <h1 className="font-bold p-4">Instructor</h1>
            <div className="flex items-center  p-4">
              <img
                className="w-16 h-16 rounded-full mx-auto object-cover"
                src={profile}
                alt="John Doe"
              />
              <div className="p-4">
                <h3 class="text-center text-xl text-gray leading-8">
                  Seble Doez
                </h3>
                <p className="text-center">Author, Photographer</p>
              </div>
            </div>
            <div className="flex items-center border-t-2 p-4 ">
              <img
                className="w-16 h-16 rounded-full mx-auto object-cover"
                src={profile2}
                alt="John Doe"
              />
              <div className="p-4">
                <h3 class="text-center text-xl text-gray leading-8">
                  Nahom Dubale
                </h3>
                <p className="text-center">Author, Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
