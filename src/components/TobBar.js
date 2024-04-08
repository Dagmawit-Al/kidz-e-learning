import React from "react";

const TobBar = () => {
  return (
    <div className="flex justify-end items-center px-4 pt-5 z-1000">
      {/* <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray">WEEKAWAY</h1>
      </div> */}
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <p className="text-sm  font-bold text-white">9AM-5AM</p>
        </div>
        <div className=" md:flex items-center px-6">
          <p className="text-sm text-blue font-bold">+251919191919</p>
        </div>
        {/* <button>Get Us</button> */}
        <a href="#" className="no-underline hover:underline">አማርኛ </a>
        <p> | </p>
        <a> English</a>
      </div>
    </div>
  );
};

export default TobBar;
