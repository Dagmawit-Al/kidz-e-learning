import { Card } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import React from "react";
import green from "../../assets/images/green1.JPG";
import second from "../../assets/images/green2.JPG";

function ProgramsDetail() {
  return (
    <>
      <section className="container flex flex-col items-center justify-center mx-auto space-y-10 px-8 py-20 lg:py-28">
        <div className="flex flex-col space-y-8 items-center">
          <Card className="flex flex-col justify-center items-center px-20">
            <h1
              class="bubblegum-sans-subheader text-green-500 text-green p-8"
              href="/blogs/fullBlog"
            >
              Grow with Ethiopia: Kids Green Legacy Planting Day!
            </h1>
            <div className="flex flex-row space-x-10">
              <div className="h-500 w-500 mt-10">
                <Carousel className="h-auto max-w-md rounded-xl">
                  <img
                    src={green}
                    alt="image 1"
                    className="h-auto max-w-md"
                  />
                  <img
                    src={second}
                    alt="image 2"
                    className="h-auto max-w-md object-cover"
                  />
                </Carousel>
              </div>
              <div className="flex flex-col space-y-10  mb-10">
                <p className="bubblegum-sans-subheader">
                  Join us for a fun-filled day of planting trees and making a difference! This special event is designed for kids of all ages to be a part of Ethiopia's incredible Green Legacy initiative. We'll learn about the importance of trees, explore the amazing biodiversity of Ethiopia, and get our hands dirty planting native seedlings that will help combat climate change and beautify our environment.
                </p>
                <a
                  type="button"
                  className="w-20 items-center bg-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2 hover:cursor-pointer hover:border-black rounded "
                // onClick={goToFullBlog}
                >
                  Register
                </a>
              </div>
            </div>

          </Card>
        </div>

        <div className="flex flex-col space-y-8 items-center">
          <Card className="flex flex-col justify-center items-center px-20">
            <h1
              class="bubblegum-sans-subheader text-orange-500 text-green p-8"
              href="/blogs/fullBlog"
            >
              SummerBiz Startup Camp!
            </h1>
            <div className="flex flex-row space-x-10">
              <div className="h-500 w-500">
                <Carousel className="h-auto max-w-md rounded-xl">
                  <img
                    src={green}
                    alt="image 1"
                    className="h-auto max-w-md"
                  />
                  <img
                    src={second}
                    alt="image 2"
                    className="h-auto max-w-md object-cover"
                  />
                </Carousel>
              </div>
              <div className="flex flex-col space-y-10  mb-10">
                <p className="bubblegum-sans-subheader">
                  Turn your lemonade stand dreams into a summer business reality! This summer camp will equip you with the skills to brainstorm ideas, build a brand, and launch your very own mini-empire. Get ready to be the CEO of summer fun!                </p>
                <a
                  type="button"
                  className="w-20 items-center bg-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2 hover:cursor-pointer hover:border-black rounded "
                // onClick={goToFullBlog}
                >
                  Register
                </a>
              </div>
            </div>

          </Card>
        </div>
      </section>
    </>
  )
}

export default ProgramsDetail;
