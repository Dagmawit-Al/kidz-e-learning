import React from "react";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Hero from "./Hero";
import Courses from "./Courses";
import Navbar from "./Navbar";
import PediatricianApproved from "./PediatricianApproved";
import SummerCamp from "./SummerCamp";
import Newsletter from "./Newsletter";
import Divider from "./Divider";
import TobBar from "./TobBar";
import Testimony from "./Testimony";
import Description from "./Description";

function Home() {
  return (
    <>
      <TobBar />
      {/* <Navbar /> */}
      <div className="space-y-10 h-full">
        <Hero />
        <Courses />
        <Blogs />
        <Description />
        <div className="row-span-10 ..."></div>
        <Testimony />
        <SummerCamp />
        <PediatricianApproved />
        <Divider />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}

export default Home;
