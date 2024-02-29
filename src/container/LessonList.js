import React from "react";
import Lesson from "./Lesson";

const LessonList = ({ data }) => {
  return (
    <div className=" md:flex">
      {data.map((item, index) => {
        return <Lesson key={index + item.description} data={item} />;
      })}
    </div>
  );
};

export default LessonList;
