import React from "react";
import lesson1image from "../assets/images/cover.png";
import lesson2image from "../assets/images/cover.jpeg";
import lesson3image from "../assets/images/cover.jpeg";
import lesson4image from "../assets/images/cover.jpeg";

import CourseList from "../container/CourseList";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Course from "../container/Course";

const Courses = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const courseData = [
    {
      src: lesson1image,
      id: 25,
      date: new Date(),
      title: t("course1"),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
      status: true
    },
    {
      src: lesson1image,
      id: 26,
      date: new Date(),
      title: t("course2"),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
      status: false,
    },
    {
      src: lesson1image,
      id: 27,
      date: new Date(),
      title: t("course3"),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
      status: false,
    },
    {
      src: lesson1image,
      id: 28,
      date: new Date(),
      title: t("course4"),
      description:
        "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
      status: false,
    },
    // {
    //   src: lesson1image,
    //   id: 30,
    //   date: new Date(),
    //   description:
    //     "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    // },
    // {
    //   src: lesson1image,
    //   id: 31,
    //   date: new Date(),
    //   description:
    //     "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    // },
    // {
    //   src: lesson1image,
    //   id: 32,
    //   date: new Date(),
    //   description:
    //     "some description about lessons and adding some other descriptions related to this one without limit just add some values and texts",
    // },
  ];

  const handleStartCourse = () => {
    navigate("/courses");
  };

  const dupSlides = [...courseData];
  return (

    <div id="products" className="pt-10 space-y-8 md:flex flex-col items-center space-y-8">
      <h1 className="mystery-quest-header w-full text-yellow-100 text-center text-4xl font-bold font-header leading-tight md:leading-normal">
        {t('shopTitle')}
      </h1>
      <p className="text-xl text-yellow-100 font-paragraph m-5">
        {t('shopSubtitle')}
      </p>

      {/* Course cards with motion animation */}
      {/* <motion.div
        className="flex flex-wrap justify-center"
        animate={{
          x: ['0%', '-100%'],
          transition: {
            ease: 'linear',
            duration: 15,
            repeat: Infinity,
          }
        }}
      > */}
        <div className="flex flex-col md:flex-row">
        {dupSlides.map((slide, index) => (
          <div key={index} className="flex justify-center items-center md:w-full  px-5">
            <Course key={index + slide.description} data={slide} />
          </div>
        ))}
        </div>
      {/* </motion.div> */}

      {/* Start courses button */}
      <div className="flex justify-center">
        <button
          onClick={handleStartCourse}
          className="btn outline-button bg-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 rounded"
        >
          {t('startCourses')}
        </button>
      </div>

      {/* Separator */}
      <div className="relative w-full my-8 pt-10">
        <hr className="w-full h-1 my-8 bg-white border-0 rounded dark:bg-[#E5588D]" />
        <div className="absolute left-1/2 transform -translate-x-1/2 dark:bg-gray-900 p-1">
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
