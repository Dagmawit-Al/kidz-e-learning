import React from "react";
import book from "../../assets/images/book.png";
import profile from "../../assets/images/instructor.jpeg";

const PaymentDetail = () => {
  return (
    <div className="h-full m-4 ml-8 sm:flex flex-col w-full sm:w-[70%] items-center">
      <div className="sm:flex justify-around">
        {/* <img
          className="object-cover sm:w-[35%] h-full object-cover"
          src={book}
          alt="bookimage"
        /> */}
        <div className="sm:w-[65%] flex flex-col items-start">
          <h1 className="comic-sans-small sm:text-3xl font-bold w-full">
            Real World Money Lessons
          </h1>
          <div className="sm:photo-wrapper p-2 flex items-center border-t-2 w-full">
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full mx-auto object-cover"
                src={profile}
                alt="John Doe"
              />
              <div className="sm:p-4">
                <h3 className="text-center sm:text-center text-xl text-gray leading-8">
                  Seble Doez
                </h3>
                <p className="text-center text-xs sm:text-center">
                  Author, Photographer
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="items-center p-4">
              <h1 className="font-bold text-xl">DIGITAL</h1>
              <p className="font-bold text-xl">58.4 ETB</p>
            </div>
          </div>
          <img
          className="object-cover sm:w-[35%] md:w-[50%] h-full object-cover"
          src={book}
          alt="bookimage"
        />
          {/* <div className="sm:w-full">
            <p className="comic-sans-small">
              The Real World Money Lessons Digital Academy is an interactive and
              practical guide to financial literacy for kids and teens. We break
              down terms and concepts related to money so that kids can understand
              them and see how they work in the real world.
            </p>
          </div> */}
        </div>
      </div>
    </div>

  );
};

export default PaymentDetail;
