import React from "react";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Hero from "./Hero";
import Lessons from "./Lessons";
import Navbar from "./Navbar";
import PediatricianApproved from "./PediatricianApproved";
import SummerCamp from "./SummerCamp";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="space-y-10">
        <Hero />
        <Lessons />
        <Blogs />
        <div class="row-span-10 ..."></div>
        <SummerCamp />
        <PediatricianApproved />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
