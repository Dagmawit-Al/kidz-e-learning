import React from "react";
import book from "../assets/images/book.png";
import profile from "../assets/images/Profile.jpeg";

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
          Quiz
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
    </div>
  );
};

export default Book;
