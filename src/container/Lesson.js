import React from "react";

const Lesson = ({ data }) => {
  return (
    <div className="animate-none md:animate-infinite-scroll overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <img
        className="transition ease-in-out delay-150 w-[75%] h-[65%] m-4 object-cover border-4 border-gray shadow-lg cursor-pointer hover:scale-110 rounded-lg "
        src={data.src}
        alt="lesson image"
      />
      {/* <p>{data.date.toISOString()}</p> */}
      <p className="p-2 text-center w-[75%] text-black font-paragraph">
        {data.description}{" "}
      </p>
    </div>
  );
};

export default Lesson;
