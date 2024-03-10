import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

function Testimony() {
    return (


        <div className=' space-y-10 aspect-video ' >
            <h2 class="mt-0 text-3xl text-center tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
                Testimony
            </h2>
            <div class="flex flex-row  ">
                {/* <div class=""> */}


                    <iframe
                        className=' rounded-lg'
                        src="https://www.youtube.com/embed/viHILXVY_eU?si=kG9IYX4r3tKBqeeG"
                        width="50%"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
            </div>
        </div>
    )
}

export default Testimony;