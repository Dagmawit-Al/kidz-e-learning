import React from "react";
import { TERipple } from "tw-elements-react";
import pediatrician from "../assets/images/female_icon.png";

function PediatricianApproved() {
  return (
    <figure class="max-w-screen-md mx-auto text-center p-8 space-y-8">
      <h2 className="rock-salt-regular mb-2 mt-0 text-4xl font-medium leading-tight text-black">
        Pediatrician Approved
      </h2>

      <svg
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
      </svg>
      <blockquote>
        <p class="text-2xl italic font-medium text-black font-paragraph ">
          "Lorem ipsum dolor sit amet. Qui dolor accusantium rem necessitatibus
          totam sit omnis totam quo totam beatae qui praesentium facilis. Aut
          galisum ipsa ut ipsa ratione ea Quis dolores. Qui voluptas dolor cum
          repudiandae similique ut dolore voluptate et odio reiciendis ad
          veritatis rerum."
        </p>
      </blockquote>
      <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <img
          class="w-6 h-6 rounded-full"
          src={pediatrician}
          alt="profile picture"
        />
        <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
          <cite class="pe-3 font-medium text-black">Dr. Kalkidan Tesfaye</cite>
          <cite class="ps-3 text-sm text-black">M.D</cite>
        </div>
      </figcaption>
    </figure>
  );
}

export default PediatricianApproved;
