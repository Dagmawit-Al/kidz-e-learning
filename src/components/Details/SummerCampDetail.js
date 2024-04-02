import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import TobBar from "../TobBar";
import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const SummerCampDetail = () => {

    return (
        <>
            <TobBar />
            <section className="container flex flex-col items-center mx-auto md:w-[75%] w-[45%] mt-10 space-y-10 px-8 py-10 lg:py-20">
                <Typography
                    variant="h2"
                    color="blue-gray"
                    className="mystery-quest-header leading-normal pt-8"
                >
                    The Ultimate Experience <br />For Kids Aged 6-12
                </Typography>
                <iframe
                    className=" rounded-lg"
                    src="https://www.youtube.com/embed/viHILXVY_eU?si=kG9IYX4r3tKBqeeG"
                    title="YouTube video player"
                    width="100%"
                    height={500}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
                <NavLink to="">
                    <button className=" bg-button text-black ">Register Now</button>
                </NavLink>
            </section>
        </>
    )
}

export default SummerCampDetail;