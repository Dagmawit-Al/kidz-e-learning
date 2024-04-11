import React from "react";
import { NavLink } from "react-router-dom";
import background from "../assets/images/kidsImage.png";
import btnart from "../assets/images/btn-art.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const handleStartCourse = () => {
    navigate("/courses");
  };

  return (
    <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center min-h-screen m-7 p-3 md:p-3">
      {/* Container for the hero section into 12 columns */}
      <div className="grid md:grid-cols-12">
        {/* Hero image */}
        <div className="col-span-12 md:col-span-6 place-self-center md:ml-20">
          <h1 className="comic-sans-medium md:text-5xl text-yellow-100 whitespace-pre-line md:leading-relaxed">
            {t('title')}
          </h1>
          <button
            className="mt-8 btn outline-button text-white py-1 px-6 border rounded-2xl"
            onClick={handleStartCourse}>
            {t('startCourses')}
          </button>
        </div>
        {/* Hero content */}
        <div className="col-span-12 md:col-span-6 place-self-center mt-4 md:mt-0">
          <img src={background} alt="Kids" className="max-w-full" />
        </div>
      </div>
    </div>
  );
  // <div id="hero" className="w-full flex flex-row   ">
  //   <div className="flex items-center flex-col p-4">
  //     <div className="space-y-5 h-full flex flex-col text-black p-4">
  {/* <h1 className=" text-white mt-20">
          {t('title')}
          </h1> */}
  {/* <p className="bubblegum-sans-subheader text-white">
          {t('subtitle')}
          </p> */}
  //</div>
  {/* <div className="flex pt-10">
          <NavLink to="/courses">
            <button className=" bg-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2  hover:border-black rounded ">
              {t('startCourses')}
            </button>
          </NavLink>
          <div className="-m-8 p-2">
            <img src={btnart} alt="btnart" />
          </div> */}
  {/* </div> */ }
  //</div>

  //   <div className="flex justify-end mt-10">
  //     <img src={background} alt="heroImage" className="w-[65%]   object-cover" />
  //   </div>
  // </div>


};

export default Hero;
