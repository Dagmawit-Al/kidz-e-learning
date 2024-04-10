import React from "react";

function Testimony() {
  return (
    <div className="flex flex-col items-center sm:space-y-10">
      <h2 className="mystery-quest-header text-center font-extrabold text-white dark:text-white">
        Testimony
      </h2>
      <div className="sm:flex flex-col sm:flex-row sm:justify-between justify-center space-y-5 sm:space-y-0 sm:space-x-20 px-10">
        <iframe
          className="rounded-lg sm:w-3/5"
          src="https://www.youtube.com/embed/viHILXVY_eU?si=kG9IYX4r3tKBqeeG"
          width="100%"
          height={350}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="bubblegum-sans-subheader text-white">
            "This platform will give your children the necessary tools to make
            it <br />
            in this global economy.
            <br />I highly recommend Kidz E-Learning."
          </h1>
          <p className="bubblegum-sans-subheader text-white">
            - Mr. John Doe, Author of book
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
