import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Document, Page } from "react-pdf";
import Tab from "./Tab";

const LearnBook = () => {
  const location = useLocation();
  const { bookId } = useParams();

  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };
  useEffect(() => {
    console.log("location in learn", location.pathname);
  }, []);
  return (
    <div class="h-screen flex flex-col">
      <div class="flex-no-shrink bg-blue text-white p-4">Header</div>
      <div class="flex-1 flex">
        <Tab />
        <div class="flex-1 p-4 overflow-y-scroll">
          <h2>Main content area</h2>
          <p class="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            voluptatibus rem quia est vel, consequuntur soluta nesciunt culpa
            accusantium fugit nisi, commodi error illum beatae ipsum, quam
            distinctio, adipisci. Minima?
          </p>
          <p class="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            voluptatibus rem quia est vel, consequuntur soluta nesciunt culpa
            accusantium fugit nisi, commodi error illum beatae ipsum, quam
            distinctio, adipisci. Minima?
          </p>
        </div>
        <div class="p-4 overflow-y-scroll bg-yellow-lighter">
          <div class="mb-6">Right sidebar</div>
          <div class="mb-6">Right sidebar</div>
          <div class="mb-6">Right sidebar</div>
          <div class="mb-6">Right sidebar</div>
          <div class="mb-6">Right sidebar</div>
          <div class="mb-6">Right sidebar</div>
          <div class="mb-6">Right sidebar</div>
        </div>
      </div>
    </div>
    // <div className="flex flex-row items-center h-screen m-4">
    //   <Tab />
    //   <div className="justify-center flex bg-middlesection w-[50%] h-[75%] ">
    //     pdf section
    //   </div>
    //   <div>Learn book, {bookId}</div>
    // </div>
  );
};

export default LearnBook;
