import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Document, Page } from "react-pdf";
import Tab from "./Tab";
import PdfViewr from "./PdfViewr";
import Worksheet from "./Worksheet";
import Chapters from "./Chapters";

const LearnBook = () => {
  const location = useLocation();
  const { bookId } = useParams();

  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };
  useEffect(() => {
    console.log("location in learn", location.pathname);
    // api("fetchwithid")
  }, []);
  return (
    <div className=" sm:h-full flex flex-col w-full ">
      <div className="sm:h-full flex flex-row justify-between pt-24 w-full">
        <Tab />
        <div>
          <PdfViewr />
        </div>
        <div className="w-[25%] m-8">
          <Chapters />
        </div>
      </div>
      <div id="worksheet" className="w-full ">
        {/* <Worksheet /> */}
      </div>
    </div>
  );
};

export default LearnBook;
