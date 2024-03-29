import React from "react";
import { TERipple } from "tw-elements-react";
import girl from "../assets/images/img-girl.png";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function SummerCamp() {
  const navigate = useNavigate();

  const handleLearnMoreSummerCamp = () => {
    navigate("/summercamp");
  };
  return (
    <section className=" md:flex flex-col items-center  p-8 space-x-20">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <h2 className="mystery-quest-header mb-2 mt-0 text-4xl font-medium leading-tight text-white">
          Join Our Summer Camp!
        </h2>
        <div className="col-span-2 ...">
          <h4 className="bubblegum-sans-subheader mb-2 mt-0 text-1xl font-small leading-tight text-white">
            "I can'ts" become "I cans" when you hit summer camp. <br /> Learn
            new things this summer at camp. <br /> Dive into your passion at
            summer camp.
          </h4>
        </div>
        <div className="col-span-2 ...">
        <NavLink to="/camp">
          <TERipple rippleColor="light">
            <button

              onClick={handleLearnMoreSummerCamp}
              className="bubblegum-sans-subheader bg-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2  hover:border-black rounded "
              href="#programs"

              className="bubblegum-sans-subheader bg-[#FB9060] text-white"

            >
              Learn More
            </button>
          </TERipple>
          </NavLink>
        </div>
        <div className="row-span-3 ...">
          <img src={girl} className="" alt="" />
        </div>
      </div>
      <div className="inline-flex items-center justify-center w-full pt-10">
        <div className="absolute px-4 -translate-x-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="yellow"
            className="w-24 h-25"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default SummerCamp;
