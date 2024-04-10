import React from "react";

const TobBar = () => {
  return (
    <div className="flex justify-end items-center px-4 pt-5 z-1000">
      {/* <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray">WEEKAWAY</h1>
          </div> */}
      <div className="flex flex-wrap">
        <div className="hidden md:flex items-center px-6">
          <p className="text-sm font-bold text-white">9AM-5AM</p>
        </div>
        <div className="md:flex items-center px-6">
          <p className="text-sm text-blue font-bold">+251919191919</p>
        </div>
        {/* <button>Get Us</button> */}
        <div className="flex flex-row">
          <a href="#" className="no-underline hover:underline mr-2">አማርኛ</a>
          <p className="text-black">|</p>
          <a className="no-underline hover:underline ml-2">English</a>
        </div>
      </div>
    </div>

  );
};

export default TobBar;
