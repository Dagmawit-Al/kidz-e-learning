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
    <div className=" md:flex flex-col items-center">
      <h1 className=" w-full text-center text-4xl font-bold font-header">
        Shop our latest videos
      </h1>
      <p className="font-paragraph">
        Our videos introduce children to key life skills that empower them to be
        limitless
      </p>
      <LessonList data={lessonData} />
      <button className=" opacity-80 my-5">Start Courses</button>
    </div>
  );
};

export default Lessons;
