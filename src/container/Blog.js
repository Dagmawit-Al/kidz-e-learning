import React from "react";
import { NavLink } from "react-router-dom";

const Blog = ({ data }) => {
  return (
    <NavLink id="blog" to="/blogs">
      <div className="container flex flex-col items-center space-y-3 md:space-y-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <img
          href="/blogs"
          className="w-[75%] h-[75%] m-6 md:m-4 object-cover border-2 border-black shadow-lg cursor-pointer hover:scale-110 rounded-lg "
          src={data.src}
          alt="lesson image"
        />
        {/* <p>{data.date.toISOString()}</p> */}
        <p className="bubblegum-sans-subheader p-2 text-black text-center w-[75%] font-paragraph">
          {data.description}{" "}
        </p>
      </div>
    </NavLink>
  );
};

export default Blog;
