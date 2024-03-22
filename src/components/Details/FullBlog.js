import React from "react";
import TobBar from "../TobBar";
import Navbar from "../Navbar";
import { Typography } from "@material-tailwind/react";

const FullBlog = () => {
    return (
        <>
            <TobBar />
            <Navbar />
            <section className="container relative flex flex-col justify-start items-center mx-auto space-y-10 px-8 py-10 lg:py-28">
                <Typography
                    variant="h2"
                    color="blue-gray"
                    className="mystery-quest-header leading-relaxed p-5 m-10"
                >
                    Business Plans: A Step-by-Step Guide for Kid Entrepreneurs
                </Typography>

                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg" className="w-full rounded-2xl shadow-4-strong" />
                <div className="relative flex flex-row justify-start space-x-3">
                    <p className="text-white">Filagot Tesfaye</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                    </svg>

                    <p className="text-grey">March 21, 2024</p>
                </div>
            </section>
        </>
    )
}

export default FullBlog;