import React from "react";
import smiling from "../assets/images/smiling.png";
import love from "../assets/images/love.png";
import challenge from "../assets/images/challenge.png";

function Description() {
  return (
    // text-lg md:text-xl  
    <div className="flex flex-col">
      <h2 className="comic-sans-medium md:text-5xl my-5 text-yellow-100 text-center dark:text-white leading-tight md:leading-normal">
        What happens when kids use our resources?
      </h2>
      <div className="grid grid-cols-1 space-y-10 md:space-y-0 sm:grid-cols-2 md:grid-cols-3 gap-3 p-10 mx-10">
      <div className="max-w-xs mx-auto flex flex-col justify-center items-center bg-yellow-100 p-5 rounded-lg">
              <a href="#">
                <img
                  src={smiling}
                  className="mb-5 rounded-lg"
                  width={120} height={120}
                  alt="Image 1"
                />
              </a>
              <h2 className="mb-2 comic-sans-medium text-xl text-center font-bold leading-tight text-black dark:text-white">
                <p>Increases Confidence</p>
              </h2>
        </div>
        <div className="max-w-xs mx-auto flex flex-col justify-center items-center bg-yellow-100 p-5 rounded-lg">
              <a href="#">
                <img
                  src={love}
                  className="mb-5 rounded-lg"
                  width={100} height={100}
                  alt="Image 1"
                />
              </a>
              <h2 className="mb-2 comic-sans-medium text-xl text-center font-bold leading-tight text-black dark:text-white">
                <p>Love of Learning</p>
              </h2>
        </div>
        <div className="max-w-xs mx-auto flex flex-col justify-center items-center bg-yellow-100 p-5 rounded-lg">
              <a href="#">
                <img
                  src={challenge}
                  className="mb-5 rounded-lg"
                  width={115} height={115}
                  alt="Image 1"
                />
              </a>
              <h2 className="mb-2 comic-sans-medium text-xl text-center font-bold leading-tight text-black dark:text-white">
                <p>Encourages New Challenges</p>
              </h2>
        </div>
        {/* <div className="flex flex-col items-center space-y-5">
          <img src={smiling} width={120} height={120} alt="Smiling" />
          <h3 className="bubblegum-sans-subheader text-yellow-100 text-center">
            Increases Confidence
          </h3>
        </div> */}
        {/* <div className="flex flex-col items-center space-y-7">
          <img src={love} width={100} height={100} alt="Love" />
          <h3 className="bubblegum-sans-subheader text-yellow-100 text-center">
            Love of Learning
          </h3>
        </div> */}
        {/* <div className="flex flex-col items-center space-y-4">
          <img src={challenge} width={115} height={115} alt="Challenge" />
          <h3 className="bubblegum-sans-subheader text-yellow-100 text-center">
            Encourages New Challenges
          </h3>
        </div> */}
      </div>
    </div>
  );
}

export default Description;
