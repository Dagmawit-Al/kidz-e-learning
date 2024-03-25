import React from "react";

function Testimony() {
  return (
    <div className="flex flex-col items-center sm:space-y-10 ">
      <h2 className="mystery-quest-header text-center font-extrabold text-white dark:text-white">
        Testimony
      </h2>
      <div className="sm:flex flex-row justify-between space-x-20 px-10">
        <iframe
          className=" rounded-lg"
          src="https://www.youtube.com/embed/viHILXVY_eU?si=kG9IYX4r3tKBqeeG"
          width="75%"
          height={350}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="flex flex-col grid justify-items-end text-white space-y-18">
          <h1 className="bubblegum-sans-subheader mt-20">
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
