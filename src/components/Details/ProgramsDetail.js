import { Card } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import React from "react";
import green from "../../assets/images/green1.JPG";
import second from "../../assets/images/green2.JPG";
import ethiopia from "../../assets/images/Ethiopia.png"
import comingSoon from "../../assets/images/soon.png"
import TobBar from "../TobBar";

function ProgramsDetail() {
  return (
    <>
      <TobBar />
      <section className="container flex flex-col items-center mx-auto space-y-10 px-4 md:px-8 py-10 mt-10 lg:py-20 xl:py-28">
        <div className="flex flex-col space-y-8 items-center">
          <Card className="flex flex-col justify-center items-center bg-green-200 px-10 pb-10 sm:px-20 shadow-2xl rounded-lg">
            <h1 className="comic-sans-medium text-black text-center p-8">
              Grow with Ethiopia: Kids Green Legacy Planting Day!
            </h1>
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-10">
              <div className="h-auto w-full md:w-1/2">
                <Carousel className="h-full rounded-xl">
                  <img src={green} alt="image 1" className="h-full w-full md:h-auto md:w-full rounded-xl md:mt-10 object-cover" />
                  <img src={second} alt="image 2" className="h-full w-full md:h-auto md:w-full rounded-xl md:mt-10 object-cover" />
                </Carousel>
              </div>
              <div className="flex flex-col space-y-8 w-full md:w-1/2">
                <p className="bubblegum-sans-subheader">
                  Join us for a fun-filled day of planting trees and making a difference! This special event is designed for kids of all ages to be a part of Ethiopia's incredible Green Legacy initiative. We'll learn about the importance of trees, explore the amazing biodiversity of Ethiopia, and get our hands dirty planting native seedlings that will help combat climate change and beautify our environment.
                </p>
                <button
                  type="button"
                  className="btn outline-button w-full md:w-auto hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 rounded"
                // onClick={goToFullBlog}
                >
                  Register
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col space-y-8 items-center">
          <Card className="flex flex-col justify-center items-center bg-yellow-100 px-10 pb-10 sm:px-20 shadow-2xl rounded-lg">
            <h1 className="comic-sans-medium text-black text-center p-8">
            Experience Ethiopia Like Never Before! (for Ethiopian diaspora)
            </h1>
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-10">
              <div className="h-auto w-full md:w-1/2">
                {/* <Carousel className="h-full rounded-xl md:mt-10"> */}
                  <img src={ethiopia} alt="image 1" className="h-full w-full md:h-auto md:w-full rounded-xl md:mt-10 object-cover" />
                  {/* <img src={second} alt="image 2" className="h-full object-cover" /> */}
                {/* </Carousel> */}
              </div>
              <div className="flex flex-col space-y-8 w-full md:w-1/2">
                <p className="bubblegum-sans-subheader">
                Learn New Skills and Cultivate Social Connections: Embark on a journey of personal growth and discovery as you engage in diverse volunteer activities. From caring for the elderly and supporting children with disabilities to visiting patients in the hospital, participating in tree planting events, and playing football with Ethiopian youth, Mentorable offers a wealth of opportunities to expand your skills, broaden your perspective, and foster meaningful social connections. Interacting with fellow youth volunteers during your stay provides an additional avenue for developing valuable social skills and building lifelong friendships.
                </p>
                <button
                  type="button"
                  className="btn outline-button w-full md:w-auto hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 rounded"
                // onClick={goToFullBlog}
                >
                  Register
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col space-y-8 items-center">
          <Card className="flex flex-col justify-center items-center bg-orange-100 px-10 py-10 sm:px-20 shadow-2xl rounded-lg">
            <h1 className="comic-sans-medium text-black text-center p-8">
              SummerBiz Startup Camp!
            </h1>
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-10">
              <div className="w-full md:w-1/2">
                {/* <Carousel className="h-full rounded-xl"> */}
                  <img src={comingSoon} alt="image 1" height={100} className="w-full md:w-full rounded-xl object-cover" />
                  {/* <img src={second} alt="image 2" className="h-full object-cover" /> */}
                {/* </Carousel> */}
              </div>
              <div className="flex flex-col space-y-8 w-full md:w-1/2">
                <p className="bubblegum-sans-subheader">
                  Turn your lemonade stand dreams into a summer business reality! This summer camp will equip you with the skills to brainstorm ideas, build a brand, and launch your very own mini-empire. Get ready to be the CEO of summer fun!
                </p>
                <button
                  type="button"
                  className="w-full md:w-auto bg-white hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 rounded"
                // onClick={goToFullBlog}
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

export default ProgramsDetail;
