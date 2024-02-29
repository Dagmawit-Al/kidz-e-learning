import React from "react";

const Blog = ({ data }) => {
  return (
    <div className="flex flex-col items-center [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <img
        className="w-[65%] h-[65%] m-4 object-cover border-2 border-black shadow-lg cursor-pointer hover:scale-110 rounded-lg "
        src={data.src}
        alt="lesson image"
      />
      {/* <p>{data.date.toISOString()}</p> */}
      <p className="p-2 text-black w-[65%] font-paragraph">
        {data.description}{" "}
      </p>
    </div>
  );
};

export default Blog;
