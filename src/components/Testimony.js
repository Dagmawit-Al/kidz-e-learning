import React from "react";
import { useNavigate } from "react-router-dom";

function Testimony() {
  const navigate = useNavigate();

  const handleStartCourse = () => {
    navigate("/courses");
  };
  return (
    <div className="flex flex-col items-center space-y-10 md:space-y-10">
      <h2 className="comic-sans-medium md:text-5xl text-center font-extrabold text-yellow-100 dark:text-yellow-100">
        Helping Parents and Teachers
      </h2>
      <div className="sm:flex flex-col items-center sm:flex-row sm:justify-between justify-center space-y-8 sm:space-y-0 sm:space-x-20 px-10 flex md:items-center">
        <video className="relative w-full md:w-1/2 h-[50%] rounded-lg" width="640" height="264" src="MentorableAdVideo .mp4" loop controls>
          {/* <source src="MentorableAdVideo.mp4" type="video/mp4"> */}
            {/* Your browser does not support the video tag. I suggest you upgrade your browser. */}
          {/* </source> */}
        </video>
        {/* <iframe 
        className="flex  justify-center items-center"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/tNezK4xqXxw?si=zCNMF2t4z4d7DQga" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="comic-sans-medium leading-loose text-center text-yellow-100">
          We are Mentorable kids. <br/> Come, let us learn business. Exploring the adventure of the business world 
          <br/>..... 
          <br/>
          </h1>
          <button className="btn outline-button text-lg" onClick={handleStartCourse}>START HERE TODAY </button>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
