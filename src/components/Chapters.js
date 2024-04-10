import React from "react";
import { NavLink } from "react-router-dom";

const Chapters = ({ id, chaptersData }) => {
  return (
    <>
      <div className="border-2 p-4">
        <h1 className="comic-sans-medium font-bold text-xl sm:text-2xl">
          Professional Certificate - 8 course series
        </h1>
        <p className="comic-sans-small text-xl p-4 text-gray">
          Prepare for a new career in the high-growth field of data analytics, no
          experience or degree required. Get professional training designed by Google
          and have the opportunity to connect with top employers.
          <span className="comic-sans-small text-xl font-bold block">
            There are 483,000 open jobs in data analytics with a median entry-level
            salary of $92,000.¹
          </span>
        </p>
        {chaptersData.map((item, index) => (
          <div className="p-4" key={item.hours + item.rating + index}>
            <NavLink to={`/courses/book/${id}/chapter/${item.chapternumber}`}>
              <h1 className="font-bold hover:text-greentwo text-lg sm:text-xl">
                {item.chaptertitle}
              </h1>
            </NavLink>
            <p className="comic-sans-small pt-2 flex items-center">
              Course {item.chapternumber} | {item.hours} hours{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-greentwo ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </div>
        ))}
      </div>

    </>
  );
};

export default Chapters;
