import React from "react";

const TobBar = () => {
  return (
    <div className="flex justify-end items-center px-4 pt-2">
      {/* <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray">WEEKAWAY</h1>
      </div> */}
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <p className="text-sm text-blue font-bold">9AM-5AM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <p className="text-sm text-blue font-bold">+251919191919</p>
        </div>
        {/* <button>Get Us</button> */}
      </div>
    </div>
  );
};

export default TobBar;
