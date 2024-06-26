import React from "react";
import cbe from "../../assets/images/cbe.jpeg";

function Commercial() {
  return (
    <div className="sm:photo-wrapper p-2 flex items-center m-2">
      <div className="flex items-center">
        <img
          className="object-cover sm:w-[25%] h-[75%] object-cover md:w-[20%] lg:w-[20%] m-4 rounded-full"
          src={cbe}
          alt="bookimage"
        />
        <div className="sm:p-4">
          <h3 className="text-center sm:text-center text-xl text-white leading-8">
            Pay with Commercial Bank
          </h3>
          <p className="text-center text-xs sm:text-center text-white">
            CBE, mobile banking
          </p>
        </div>
      </div>
    </div>

  );
}

export default Commercial;
