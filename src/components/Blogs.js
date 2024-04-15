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
    <div id="blogs" className="space-y-8 p-10 md:flex flex-col items-center bg-white">
      <div className="flex justify-center items-center dark:bg-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={"orange"}
            className="w-24 h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
      <h1 className="comic-sans-medium md:text-5xl text-black text-4xl text-center font-bold font-header leading-tight md:leading-normal">
        Latest Articles And Updates
      </h1>
      <p className="bubblegum-sans-subheader text-black text-center">
        Entertaining and educational weekly posts that inspire kids the reach for
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
