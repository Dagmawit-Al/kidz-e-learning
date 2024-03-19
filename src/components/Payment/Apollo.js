import React from "react";
import apollo from "../../assets/images/apollo.jpeg";

function Apollo() {
  return (
    <div className="sm:photo-wrapper p-2 flex items-center border-t-2">
      <div className="flex items-center">
        <img
          className="object-cover sm:w-[25%] h-[75%] object-cover md:w-[20%] lg:w-[20%] h-[20%] m-4 object-cover rounded-full"
          src={apollo}
          alt="bookimage"
        />
        <div className="sm:p-4">
          <h3 class="text-center sm:text-center text-xl text-gray leading-8">
            Pay with Abyssina Bank
          </h3>
          <p className="text-center text-xs sm:text-center">Apollo</p>
        </div>
      </div>
    </div>
  );
}

export default Apollo;
