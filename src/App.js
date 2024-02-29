import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Lessons from "./components/Lessons";
import SummerCamp from "./components/SummerCamp";
import PediatricianApproved from "./components/PediatricianApproved";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";

const App = () => {
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
};

export default App;
