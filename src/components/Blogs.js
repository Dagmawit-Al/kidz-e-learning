import React from "react";
import blogimage1 from "../assets/images/blogimage1.jpg";
import blogimage2 from "../assets/images/blogimage2.jpg";
import blogimage3 from "../assets/images/blogimage3.jpg";
import BlogBody from "../container/BlogBody";

const Blogs = () => {
  const blogData = [
    {
      src: blogimage1,
      date: Date.now(),
      description:
        "Kids and Intellectual Property: A Teaching Guide for Parents of Kidpreneurs",
    },
    {
      src: blogimage2,
      date: Date.now(),
      description:
        "The Psychology of Entrepreneurship for Kids: Fostering a Growth Mindset",
    },
    {
      src: blogimage3,
      date: Date.now(),
      description:
        "STEM and Entrepreneurship: How Kidpreneurs are Leading the Way",
    },
  ];
  return (
    <div className=" md:flex  flex-col items-center ">
      <h1 className=" w-full  text-4xl text-center font-bold font-header">
        Latest Articles And Updates
      </h1>
      <p className="font-paragraph">
        Entertaining and educational weekly posts that inspire kids te reach for
        the stars.
      </p>
      <BlogBody data={blogData} />
      {/* <LessonList data={lessonData} />
      <button className=" opacity-80 my-5">Start Courses</button> */}
      {/* <h1>Header</h1> */}
      {/* <p>parapgraph</p> */}
      {/* 3 images in column */}
      {/* date */}
      {/* some description */}
    </div>
  );
};

export default Blogs;
