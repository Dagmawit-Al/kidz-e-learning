import React from "react";
import PopupProfile from "./PopupProfile";
import pediatrician from "../assets/images/DrKal.jpg";

function PediatricianApproved() {
  return (
    <figure className="mx-auto md:flex flex-col items-center bg-white text-center p-8 space-y-8">
      {/* space-y-8 p-10 md:flex flex-col items-center bg-white */}
      <div className="flex flex-row justify-center items-start space-x-5">
        <h2 className="comic-sans-hero m-3 text-black md:whitespace-nowrap">
          Pediatrician - Approved
        </h2>
      </div>
      <div className="flex justify-center">
        <img
          className="border-solid border-4 border-green-100 rounded-full"
          width={200}
          height={200}
          src={pediatrician}
          alt=""
        />
      </div>
      <blockquote>
        <p className="bubblegum-sans-subheader flex justify-center items-center md:m-15 text-4xl italic font-medium text-black ">
          "I firmly believe that entrepreneurship education nurtures not just young minds
          but whole individuals, fostering creativity, problem-solving skills, and resilience
          essential for navigating life's challenges. Encouraging our children to explore
          entrepreneurship not only ignites their potential for innovation but also empowers
          them to shape their futures with confidence and purpose."
          <br />
        </p>
        <div className="flex flex-row justify-center space-x-1 m-8">
          <p className="bubblegum-sans-subheader flex justify-center items-center text-4xl italic font-medium text-black ">- Dr. Kalkidan Tesfaye</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="green"
            className="w-6 h-6 flex text-center text-gray-400 dark:text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
        </div>
      </blockquote>

      <PopupProfile />
      <div className="flex flex-row flex justify-center items-center w-full">
        {/* <hr className="w-64 h-1 my-8 bg-green-300 border-0 rounded dark:bg-[#E5588D]" /> */}
        {/* <div className="absolute px-4 -translate-x-1/2 left-1/2 dark:bg-gray-900"> */}
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="green" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="green" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="green" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="green" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="green" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>

        {/* </div> */}
      </div>
    </figure>
  );
}

export default PediatricianApproved;
