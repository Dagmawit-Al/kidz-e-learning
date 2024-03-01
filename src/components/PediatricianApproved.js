import React from "react";
import { TERipple } from "tw-elements-react";
import pediatrician from "../assets/images/female_icon.png";

function PediatricianApproved() {
  return (

    <div class="min-h-screen bg-gray-200 flex justify-center items-center">
   
   <div class="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
      <div id="header" class="flex"> 
         <img alt="mountain" class="w-45 rounded-md border-2 border-gray-300" src={"https://picsum.photos/seed/picsum/200"} />
         <div id="body" class="flex flex-col ml-5">
            <h4 id="name" class="text-xl font-semibold mb-2">Pediatrician-Approved</h4>
            
            <p id="job" class="text-2xl italic font-medium text-black font-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="flex mt-5">
               <img alt="avatar" class="w-6 rounded-full border-2 border-gray-300" src={pediatrician} />
               {/* <button data-popover-target="popover-left" data-popover-placement="left" type="button" class="text-white mb-3 me-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dr. Kalkidan Tesfaye</button> */}
               {/* <a href="#" class="text-blue-600 underline dark:text-blue-500 hover:no-underline" data-popover-target="popover-bottom" data-popover-placement="bottom">John Doe</a> */}
               
               {/* <button data-popover-target="popover-bottom" data-popover-placement="bottom" type="button" class="text-white mb-3 me-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bottom popover</button>
<div data-popover id="popover-bottom" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover bottom</h3>
    </div>
    <div class="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div> */}

            </div>
         </div>
      </div>
   </div>
   
</div>


    // <figure class="max-w-screen-md mx-auto text-center p-8 space-y-8">
    //   <h2 className="rock-salt-regular mb-2 mt-0 text-4xl font-medium leading-tight text-black">
    //     Pediatrician Approved
    //   </h2>

      
    //   <blockquote>
    //     <p class="text-2xl italic font-medium text-black font-paragraph ">
    //       "Lorem ipsum dolor sit amet. Qui dolor accusantium rem necessitatibus
    //       totam sit omnis totam quo totam beatae qui praesentium facilis. Aut
    //       galisum ipsa ut ipsa ratione ea Quis dolores. Qui voluptas dolor cum
    //       repudiandae similique ut dolore voluptate et odio reiciendis ad
    //       veritatis rerum."
    //     </p>
    //   </blockquote>
    //   <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        /* <img
          class="w-6 h-6 rounded-full"
          src={pediatrician}
          alt="profile picture"
        /> */
        /* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.0}
        stroke="green"
        className="w-20 h-20 mx-auto mb-3 text-gray-400 dark:text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg> */
    //     <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
    //       <cite class="pe-3 font-medium text-black">Dr. Kalkidan Tesfaye</cite>
    //       <cite class="ps-3 text-sm text-black">M.D</cite>
    //     </div>
    //   </figcaption>
    // </figure>



  );
}

export default PediatricianApproved;
