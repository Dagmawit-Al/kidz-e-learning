import React from "react";
import { TERipple } from "tw-elements-react";
import girl from "../assets/images/camp.png";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function SummerCamp() {
  const navigate = useNavigate();

  const handleLearnMoreSummerCamp = () => {
    navigate("/camp");
  };
  return ( 
    // space-y-8 p-10 flex flex-col md:flex flex-col items-center 
    <section className="relative flex flex-col justify-center items-center p-8 space-y-8 md:flex-col md:items-center md:space-x-20 md:space-y-10">
      {/* 'Coming soon' banner */}
      <div className="absolute bottom-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/9 md:transform -translate-y-1/4 w-full text-center bg-white bg-opacity-75 text-black font-bold px-4 py-2 rounded z-10">
        Coming soon
      </div>

      <div className="flex flex-col justify-center items-center md:w-2/3">
        <div className="flex flex-row space-x-5">
        {/* <div className="absolute top-1/6 right-3/4 mr-10"> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.0}
            stroke="yellow"
            className="w-24 h-24 mx-auto md:mx-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        {/* </div> */}
        <h2 className="comic-sans-hero mt-0 md:pb-5 comic-sans-medium md:text-5xl font-large leading-tight text-white text-center md:text-center leading-tight md:leading-normal">
          Join Our Summer Camp!
        </h2>
        {/* <div className="absolute top-1/6 left-1/8"> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.0}
            stroke="yellow"
            className="w-24 h-24 mx-auto md:mx-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        {/* </div> */}
        </div>
        <div className="col-span-2">
          <h4 className="bubblegum-sans-subheader ml-5 text-sm leading-normal text-white text-center md:text-center">
            "I can'ts" become "I cans" <br /> when you hit summer camp. <br /> Learn
            new things this summer at camp. <br /> Dive into your passion at
            summer camp.
          </h4>
        </div>
        <div className="flex justify-center md:justify-start">
          {/* <NavLink to="/camp">
        <TERipple rippleColor="light">
          <button className="bubblegum-sans-subheader bg-[#FB9060] text-white py-2 px-4 rounded">
            Learn More
          </button>
        </TERipple>
      </NavLink> */}
        </div>
      </div>

      <div className="hidden md:block md:w-1/3">
        <div className="flex justify-center items-center">
          {/* <img src={girl} width={300} height={300} alt="" /> */}
        </div>
      </div>

      {/* <div className="inline-flex items-center justify-center w-full pt-10">
        <div className="px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="yellow"
            className="w-24 h-24 mx-auto md:mx-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </div>
      </div> */}
    </section>
  );
}

export default SummerCamp;
