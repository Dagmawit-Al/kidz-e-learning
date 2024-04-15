import React from "react";
import { useNavigate } from "react-router-dom";
import diaspora from "../assets/images/diasporaEvent.jpg"

function DiasporaEvent() {
    const navigate = useNavigate();

    const handleGoToEvents = () => {
        navigate("/programs");
    };
    return (
        <div id="blogs" className="space-y-8 p-12 md:p-20 m-10 md:flex flex-col items-center bg-yellow-100 border border-yellow-100 shadow-2xl rounded-lg">
            <h1 className="comic-sans-medium md:text-5xl text-black text-4xl text-center font-bold font-header leading-tight md:leading-normal">
                Experience Ethiopia Like Never Before! <br />(for Ethiopian diaspora)
            </h1>
            <p className="bubblegum-sans-subheader text-black text-center">
                Learn New Skills and Cultivate Social Connections...
            </p>
            <div className="h-auto w-full md:w-1/2">
                {/* <Carousel className="h-full rounded-xl md:mt-10"> */}
                <img src={diaspora} alt="image 1" className="h-full w-full md:h-auto md:w-full rounded-xl md:mt-10 object-cover" />
                {/* <img src={second} alt="image 2" className="h-full object-cover" /> */}
                {/* </Carousel> */}
              </div>
            <button
                className="flex justify-center mt-10 md:mt-15 items-center md:items-center m-10 btn outline-button text-white py-1 px-6 border rounded-2xl"
                onClick={handleGoToEvents}
            >
                Learn More
            </button>
        </div>
    );
}

export default DiasporaEvent;