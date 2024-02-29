import React from "react";
import { TERipple } from "tw-elements-react";
import kids from "../assets/images/summer_camp.jpeg";

function SummerCamp() {
  return (
    <section className=" md:flex flex-col items-center p-8 space-x-20">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <h2 className="rock-salt-regular mb-2 mt-0 text-4xl font-medium leading-tight text-green">
          Join Our Summer Camp!
        </h2>
        <div class="col-span-2 ...">
          <h4 className="font-paragraph mb-2 mt-0 text-1xl font-small leading-tight text-black">
            "I can'ts" become "I cans" when you hit summer camp. <br /> Learn
            new things this summer at camp. <br /> Dive into your passion at
            summer camp.
          </h4>
        </div>
        <div class="col-span-2 ...">
          <TERipple rippleColor="light">
            <button href="#Programs">Learn More</button>
          </TERipple>
        </div>
        <div class="row-span-3 ...">
          <img src={kids} className="rounded-full" alt="" />
        </div>
      </div>
    </section>
  );
}

export default SummerCamp;
