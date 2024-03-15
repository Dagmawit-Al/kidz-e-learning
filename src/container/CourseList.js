import React from "react";
import Course from "./Course";

const CourseList = ({ data }) => {
  return (
    <div className=" md:flex">
      {data.map((item, index) => {
        return <Course key={index + item.description} data={item} />;
      })}
    </div>
  );
};

export default CourseList;
