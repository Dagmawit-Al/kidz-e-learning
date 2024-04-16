import React from "react";
import profile from "../assets/images/Filagot pic.jpg";
import profile2 from "../assets/images/instructor2.jpeg";

const Profile = () => {
  return (
    <>
      <div className="p-2 flex flex-col items-start">
        <h1 className="font-bold p-4">Instructor</h1>
        <div className="flex items-center  p-4">
          <img
            className="w-16 h-16 rounded-full mx-auto object-cover"
            src={profile}
            alt="John Doe"
          />
          <div className="p-4">
            <h3 className="text-center text-xl text-gray leading-8">
              Filagot Tesfaye
            </h3>
            <p className="text-center">Author</p>
          </div>
        </div>
        {/* <div className="flex items-center border-t-2 p-4 ">
          <img
            className="w-16 h-16 rounded-full mx-auto object-cover"
            src={profile2}
            alt="John Doe"
          />
          <div className="p-4">
            <h3 className="text-center text-xl text-gray leading-8">
              Nahom Dubale
            </h3>
            <p className="text-center">Author, Photographer</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Profile;
