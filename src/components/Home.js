import React from "react";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Hero from "./Hero";
import Lessons from "./Lessons";
import Navbar from "./Navbar";
import PediatricianApproved from "./PediatricianApproved";
import SummerCamp from "./SummerCamp";
import Newsletter from "./Newsletter";
import Divider from "./Divider";
import TobBar from "./TobBar";

function Home() {
  return (
    <>
      <TobBar />
      <Navbar />
      <div className="space-y-10">
        <Hero />
        <Lessons />
        <Blogs />
        <div class="row-span-10 ..."></div>
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
