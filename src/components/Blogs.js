import React from "react";
import blogimage1 from "../assets/images/Blog1.jpg";
import blogimage2 from "../assets/images/Blog2.jpg";
import blogimage3 from "../assets/images/Blog3.jpg";
import BlogBody from "../container/BlogBody";

const Blogs = () => {
  const blogData = [
    {
      src: blogimage1,
      date: Date.now(),
      description:
        "Revolutionizing Children's Electronic Engagement",
    },
    {
      src: blogimage2,
      date: Date.now(),
      description:
        "Entrepreneurship: A Path to Economic Empowerment in Developing Countries",
    },
    {
      src: blogimage3,
      date: Date.now(),
      description:
        "Why Kids Should Learn About Entrepreneurship and Business Early On",
    },
  ];
  return (
    <div id="blogs" className="space-y-8 p-10 md:flex  flex-col items-center ">
      <h1 className="mystery-quest-header w-full text-white text-4xl text-center font-bold font-header leading-tight md:leading-normal">
        Latest Articles And Updates
      </h1>
      <p className="bubblegum-sans-subheader text-white">
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
