import React from "react";
import lesson1image from "../assets/images/kids-perfect.jpg";
import lesson2image from "../assets/images/booki-5-1.png";
import lesson3image from "../assets/images/booki-3-1.png";
import lesson4image from "../assets/images/booki-6.png";

import CourseList from "../container/CourseList";

const Courses = () => {
  const courseData = [
    {
      src: lesson1image,
      id: 25,
      date: new Date(),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    },
    {
      src: lesson2image,
      id: 26,
      date: new Date(),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    },
    {
      src: lesson3image,
      id: 27,
      date: new Date(),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    },
    {
      src: lesson4image,
      id: 28,
      date: new Date(),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    },
    {
      src: lesson1image,
      id: 30,
      date: new Date(),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    },
    {
      src: lesson1image,
      id: 31,
      date: new Date(),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    },
    {
      src: lesson1image,
      id: 32,
      date: new Date(),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    },
  ];
  return (
    <div id="products" className="pt-10 space-y-8 md:flex flex-col items-center">
      <h1 className="mystery-quest-header w-full text-white text-center text-4xl font-bold font-header">
        Shop our latest Courses
      </h1>
      <p className="bubblegum-sans-subheader text-white font-paragraph">
        Our Courses introduce children to key life skills that empower them to
        be limitless
      </p>
      <CourseList data={courseData} />
      <button className=" opacity-80 my-5 bg-button text-black">
        Start Courses
      </button>

      <div class="inline-flex items-center justify-center w-full my-8 pt-10">
        <hr class="w-64 h-1 my-8 bg-[#7E60CC] border-0 rounded dark:bg-[#E5588D]" />
        <div class="absolute px-4 -translate-x-1/2 bg-[#7E60CC] left-1/2 dark:bg-gray-900">
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
      </div>
    </div>
  );
};

export default Courses;
