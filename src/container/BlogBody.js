import React from "react";
import Blog from "./Blog";

const BlogBody = ({ data }) => {
  return (
    <div className=" md:flex items-center justify-around">
      {data.map((item, index) => {
        return <Blog key={index + item.description} data={item} />;
      })}
    </div>
  );
};

export default BlogBody;
