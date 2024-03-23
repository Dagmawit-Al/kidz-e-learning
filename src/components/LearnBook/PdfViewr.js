import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import pdfFile from "../../utils/pdf/Biz_Kids_Lesson_112.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewr() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleNext = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    } else {
      return;
    }
  };

  const handlePrev = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    } else {
      return;
    }
  };
  return (
    <div className="m-8 flex flex-col m-auto h-[1000px] p-8 ">
      <nav className="p-4 justify-between flex ">
        <button
          className="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded"
          onClick={handlePrev}
        >
          prev
        </button>
        <button
          className="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded"
          onClick={handleNext}
        >
          next
        </button>
      </nav>
      <div className=" w-[100%] overflow-y-scroll scroll-smooth h-fit border-4 border-solid border-bodyBack p-2  ">
        <Document
          file={pdfFile}
          onLoadSuccess={handleDocumentLoadSuccess}
          height="100%"
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div className="flex items-center justify-between">
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <nav className="p-4 ">
          <button
            className="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded"
            onClick={handlePrev}
          >
            prev
          </button>
          <button
            className="bg-transparent hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4  hover:border-black rounded"
            onClick={handleNext}
          >
            next
          </button>
        </nav>
      </div>
    </div>
  );
}

export default PdfViewr;
