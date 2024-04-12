import React from "react";
import { NavLink } from "react-router-dom";

const Course = ({ data }) => {
  return (
    <NavLink to={`/courses/book/${data.id}`} >
      {/* animate-none md:animate-infinite-scroll  */}
      <div class="relative inline-flex h-[50%]">
      <div class=" m-8 h-[100%] flex flex-col  max-w-sm border border-white bg-yellow-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
          <img class="flex items-center w-[100%] rounded-t-lg"  src={data.src} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="bubblegum-sans-subheader mb-2 text-2xl text-center font-bold tracking-tight text-black dark:text-white">{data.title}{" "}</h5>
          </a>
          {/* <button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> */}
           
          {/* </button> */}
          {/* <p class="mb-3 font-normal text-black dark:text-black">{data.description}{" "}</p> */}
          {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> */}
        </div>
        {/* <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div> */}

      </div>
      {data.status ? (
        <span
        class="absolute rounded-full py-5 px-5 text-xl font-medium content-[''] leading-none grid place-items-center top-[2%] right-[2%] translate-x-1/4 -translate-y-4/4 bg-green-400 text-black min-w-[24px] min-h-[24px]">
        Available <br/> Now!
      </span>
      ) : (
        <span
    class="absolute rounded-full py-5 px-5 text-xl font-medium content-[''] leading-none grid place-items-center top-[2%] right-[2%] translate-x-1/4 -translate-y-4/4 bg-yellow-100 text-black min-w-[24px] min-h-[24px]">
    Coming <br/> Soon!
  </span>
      )}
      {/* <span
    class="absolute rounded-full py-3 px-3 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-1/4 -translate-y-3/4 bg-red-500 text-white min-w-[24px] min-h-[24px]">
    Coming <br/> Soon!
  </span> */}
      </div>
      {/* <div
        id="lessons"
        
        // className=" overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <img
          className="flex justify-center transition ease-in-out delay-150 w-[65%] h-[55%] m-4 object-cover border-4 border-gray shadow-lg cursor-pointer hover:scale-110 rounded-lg "
          src={data.src}
          alt="Course image"
        /> */}
      {/* <p>{data.date.toISOString()}</p> */}
      {/* <h3 className="bubblegum-sans-subheader text-center">
          {data.title}
        </h3>
        <p className="p-2 text-center w-[75%] text-black font-paragraph">
          {data.description}{" "}
        </p>
      </div> */}
    </NavLink>
  );
}

export default Course;
