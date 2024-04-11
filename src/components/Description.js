import React from "react";
import smiling from "../assets/images/smiling.png";
import love from "../assets/images/love.png";
import challenge from "../assets/images/challenge.png";

function Description() {
  return (
    <div className="flex flex-col">
      <h2 className="mystery-quest-header text-yellow-100 text-center dark:text-white">
        What happens when kids use our resources ?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-10 mx-10">
        <div className="flex flex-col items-center space-y-5">
          <img src={smiling} width={120} height={120} alt="Smiling" />
          <h3 className="bubblegum-sans-subheader text-yellow-100 text-center">
            Increases Confidence
          </h3>
        </div>
        <div className="flex flex-col items-center space-y-7">
          <img src={love} width={100} height={100} alt="Love" />
          <h3 className="bubblegum-sans-subheader text-yellow-100 text-center">
            Love of Learning
          </h3>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src={challenge} width={115} height={115} alt="Challenge" />
          <h3 className="bubblegum-sans-subheader text-yellow-100 text-center">
            Encourages New Challenges
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Description;
