import React from "react";
import Course from "./Course";
import { motion } from "framer-motion";

const CourseList = ({ data }) => {
  const dupSlides = [...data, ...data];
  return (
    // <div className=" md:flex">
    //   {data.map((item, index) => {
    //     return <Course key={index + item.description} data={item} />;
    //   })}
    // </div>

    <motion.div
      className="flex"
      animate={{
        x: ['0%', '-100%'],
        transition: {
          ease: 'linear',
          duration: 15,
          repeat: Infinity,
        }
      }}
    >
      {dupSlides.map((slide, index) => {
        <div key={index} className="flex-shrink-0" style={{ width: `${100 / data.length}%` }}>
          <div className="flex items-center justify-center h-full py-4 border-y border-textColorPrimary">
            <Course key={index + slide.description} data={slide} />
          </div>
        </div>
        // return ;
      })}
    </motion.div>
  );
};

export default CourseList;
