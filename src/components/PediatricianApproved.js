import React from "react";
import PopupProfile from "./PopupProfile";
import pediatrician from "../assets/images/avatar.jpeg";

function PediatricianApproved() {
  return (
    <figure className="max-w-screen-md mx-auto text-center p-8 space-y-8">
      <div className="flex flex-row justify-center items-start space-x-5">
        <h2 className="mystery-quest-header m-0 text-black">
          Pediatrician - Approved
        </h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.0}
          stroke="green"
          className="w-14 h-14 text-gray-400 dark:text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>
      </div>
      <div className="flex justify-center">
        <img
          className="border-solid border-4 border-green-100 w-50 h-50 rounded-full"
          src={pediatrician}
          alt=""
        />
      </div>
      <blockquote>
        <p className="bubblegum-sans-subheader text-4xl italic font-medium text-black ">
          "Lorem ipsum dolor sit amet. Qui dolor accusantium rem necessitatibus
          totam sit omnis totam quo totam beatae qui praesentium facilis. Aut
          galisum ipsa ut ipsa ratione ea Quis dolores. Qui voluptas dolor cum
          repudiandae similique ut dolore voluptate et odio reiciendis ad
          veritatis rerum."
        </p>
      </blockquote>
      <PopupProfile />
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-green-300 border-0 rounded dark:bg-[#E5588D]" />
        <div className="absolute px-4 -translate-x-1/2 bg-[#faf8f0] left-1/2 dark:bg-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="fuchsia"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>
      </div>
    </figure>
  );
}

export default PediatricianApproved;
