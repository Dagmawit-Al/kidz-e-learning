import React from "react";
import video from "../assets/videos/mentorableVideo.mp4"
import { TECarousel, TECarouselItem } from "tw-elements-react";

const MentorableVideo = () => {
    return (
        <>
        <div>
      <video controls className="w-[100%] h-[50%]">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
            {/* <TECarousel className="m-10" ride="carousel">
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <TECarouselItem
                        className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <video className="w-full" autoPlay muted>
                            <source
                                src="https://tecdn.b-cdn.net/img/video/Tropical.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </TECarouselItem>

                </div>
            </TECarousel> */}

{/* <TECarousel showControls showIndicators crossfade className="h-[50%]" ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video className="w-full" autoPlay loop muted>
              <source
                src={video}
                type="video/mp4"
              />
            </video>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video className="w-full" autoPlay loop muted>
              <source
                src="https://tecdn.b-cdn.net/img/video/forest.mp4"
                type="video/mp4"
              />
            </video>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <video className="w-full" autoPlay loop muted>
              <source
                src="https://tecdn.b-cdn.net/img/video/Agua-natural.mp4"
                type="video/mp4"
              />
            </video>
          </TECarouselItem>
        </div>
      </TECarousel> */}
        </>
    )
}

export default MentorableVideo;