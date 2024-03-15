import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Chapter(props) {
  const { chapternumber } = useParams();
  useEffect(() => {
    console.log("chapternumber", chapternumber);
  }, []);
  //   useEffect(() => {
  //       const unsubscribe = fetch("api/chapternumber", (value, err)=>)
  //   }, []);

  useEffect(() => {}, []);
  return (
    <div className="sm:flex flex-col w-full h-screen">
      <div className="h-screen m-4 sm:flex flex-col mt-5 h-[700px]">
        <h1 className="flex justify-center font-bold text-4xl p-4 text-buttoncolor ">
          KidsLearning
        </h1>
        <div className="sm:flex justify-around">
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
              <button className="bg-buttoncolor">Purchase</button>
            </div>
          </div>
          <SimpleCard />
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
    </div>
  );
}

export default Chapter;

export function SimpleCard() {
  return (
    <Card>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Course
        </Typography>
        <Typography>
          This course is part of Google Data Analytics Professional Certificate
        </Typography>
        <Typography variant="h2" className="border-t-2 pt-2 mt-2 text-xl">
          Beginner level
        </Typography>
        <Typography>Recommended experience</Typography>
        <Typography variant="h2" className="border-t-2 pt-2 mt-2 text-xl">
          18 hours(approximately)
        </Typography>
        <Typography variant="h2" className="border-t-2 pt-2 mt-2 text-xl">
          Flexible schedule
        </Typography>
        <Typography>Learn at your own pace</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <button className="bg-buttoncolor">Purchase</button>
      </CardFooter>
    </Card>
  );
}
