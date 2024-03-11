import React from "react";
import { NavLink } from "react-router-dom";
import book from "../assets/images/book.png";
import profile from "../assets/images/Profile.png";

const Book = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col mt-5 h-[700px]">
        <h1 className="flex justify-center font-bold text-4xl p-4 text-buttoncolor -ml-72 ">
          KidsLearning
        </h1>
        <div className="flex justify-around">
          <img className=" w-[25%]  object-cover" src={book} alt="bookimage" />
          <div className=" w-[50%] flex flex-col items-start">
            <h1 className="text-7xl font-bold w-[75%] ">
              Real World Money Lessons
            </h1>
            <div className="photo-wrapper p-2 flex items-center border-t-2 w-full">
              <div className="flex items-center">
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
            </div>
            <div>
              <div className="items-center p-4">
                <h1 className="font-bold text-xl">DIGITAL</h1>
                <p className="font-bold text-xl">$5.84</p>
              </div>
            </div>
            <div className="w-[50%]">
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
      <div className="flex justify-evenly w-[25%] p-4">
        <button
          href="#worksheet"
          class="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded"
        >
          Worksheet
        </button>
        <button
          href="#quiz"
          class="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded"
        >

          Courses

        </button>
        <button
          href="#level"
          class="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded"
        >
          Level
        </button>
        <button
          href="#sample"
          class="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded"
        >
          Sample
        </button>
      </div>

      <div className="flex flex-row justify-around border-t-2 p-8 ">
        <div className="w-[25%]">
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

      <div className="flex flex-row justify-around border-t-2 p-8 ">
        <div className="w-[50%]">
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
            <div className="p-4">
              <NavLink>
                {" "}
                <h1 className="font-bold hover:text-greentwo">
                  Foundations: Data, Data, Everywhere
                </h1>{" "}
              </NavLink>
              <p className="pt-2">
                {" "}
                <span>Course 1</span> <span>18hours</span>{" "}
              </p>
            </div>
            <div className="p-4">
              <NavLink>
                {" "}
                <h1 className="font-bold hover:text-greentwo">
                  Foundations: Data, Data, Everywhere
                </h1>{" "}
              </NavLink>
              <p className="pt-2">
                {" "}
                <span>Course 1</span> <span>18hours</span>{" "}
              </p>
            </div>
            <div className="p-4">
              <NavLink>
                {" "}
                <h1 className="font-bold hover:text-greentwo">
                  Foundations: Data, Data, Everywhere
                </h1>{" "}
              </NavLink>
              <p className="pt-2">
                {" "}
                <span>Course 1</span> <span>18hours</span>{" "}
              </p>
            </div>
            <div className="p-4">
              <NavLink>
                {" "}
                <h1 className="font-bold hover:text-greentwo">
                  Foundations: Data, Data, Everywhere
                </h1>{" "}
              </NavLink>
              <p className="pt-2">
                {" "}
                <span>Course 1</span> <span>18hours</span>{" "}
              </p>
            </div>
            <div className="p-4">
              <NavLink>
                {" "}
                <h1 className="font-bold hover:text-greentwo">
                  Foundations: Data, Data, Everywhere
                </h1>{" "}
              </NavLink>
              <p className="pt-2">
                {" "}
                <span>Course 1</span> <span>18hours</span>{" "}
              </p>
            </div>
            <div className="p-4">
              <NavLink>
                {" "}
                <h1 className="font-bold hover:text-greentwo">
                  Foundations: Data, Data, Everywhere
                </h1>{" "}
              </NavLink>
              <p className="pt-2">
                {" "}
                <span>Course 1</span> <span>18hours</span>{" "}
              </p>
            </div>
            <div className="p-4">
              <NavLink>
                {" "}
                <h1 className="font-bold hover:text-greentwo">
                  Foundations: Data, Data, Everywhere
                </h1>{" "}
              </NavLink>
              <p className="pt-2">
                {" "}
                <span>Course 1</span> <span>18hours</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div id="sample" className=" w-[25%] border-2 h-[50%] items-center">
          <div className="p-2 flex flex-col items-start">
            <h1 className="font-bold p-4">Instructor</h1>
            <div className="flex items-center  p-4">
              <img
                className="w-16 h-16 rounded-full mx-auto object-cover"
                src="data:image/png;base64,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"
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
                src="data:image/png;base64,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"
                alt="John Doe"
              />
              <div className="p-4">
                <h3 class="text-center text-xl text-gray leading-8">
                  Seble Doez
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
