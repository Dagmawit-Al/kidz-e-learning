import React from "react";
import lesson1image from "../assets/images/lessons1.jpg";
import lesson2image from "../assets/images/lessons2.jpg";
import lesson3image from "../assets/images/lessons3.jpg";

import LessonList from "../container/LessonList";

const Lessons = () => {
  const lessonData = [
    {
      src: lesson1image,
      date: new Date(),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    },
    {
      src: lesson2image,
      date: new Date(),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    },
    {
      src: lesson3image,
      date: new Date(),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    },
    {
      src: lesson3image,
      date: new Date(),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    },
  ];
  return (
    <div id="products" className=" md:flex flex-col items-center">
      <h1 className=" w-full text-center text-4xl font-bold font-header">
        Shop our latest videos
      </h1>
      <p className="font-paragraph">
        Our videos introduce children to key life skills that empower them to be
        limitless
      </p>
      <LessonList data={lessonData} />
      <button className=" opacity-80 my-5">Start Courses</button>

      <div class="inline-flex items-center justify-center w-full my-8">
        <hr class="w-64 h-1 my-8 bg-green-700 border-0 rounded dark:bg-[#E5588D]" />
        <div class="absolute px-4 -translate-x-1/2 bg-[#faf8f0] left-1/2 dark:bg-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="w-24 h-24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
        </div>
      </div>

    </div>
  );
};

export default Lessons;
