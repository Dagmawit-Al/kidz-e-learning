import React from "react";

function Tab() {
  return (
    <div className="flex mt-16 sm:flex flex-col items-start h-screen p-2">
      <a href="#courses" className="m-4">
        <button className="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded">
          Chapters
        </button>
      </a>
      <a href="#worksheet" className="m-4">
        <button className="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded">
          Worksheet
        </button>
      </a>
      <a href="#quiz" className="m-4">
        <button className="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded">
          Quiz
        </button>
      </a>
    </div>
  );
}

export default Tab;
