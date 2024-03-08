import React, { useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import bookimage from "../../assets/images/kids-perfect.jpg";
import book1 from "../../assets/images/book-1.png";
import book2 from "../../assets/images/book-2.png";
import book3 from "../../assets/images/booki-3-1.png";
import book5 from "../../assets/images/booki-5-1.png";
import book6 from "../../assets/images/booki-6.png";
import book7 from "../../assets/images/booki-1-1.png";
import book8 from "../../assets/images/booki-2-1.png";

import middlesection from "../../assets/images/BookCover_YoungTrepTeenBizCourseJournal.png";
import { NavLink } from "react-router-dom";

function LessonsDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <div className="flex w-full items-center justify-between m-4">
        <img src={book1} alt="book1" />
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-6xl">Books That Empower</h1>
          <p className="p-2">
            Shop Children’s Books that Inspire Kids to THINK BIG
          </p>
        </div>

        <img src={book2} alt="book2" />
      </div>
      <div className="flex items-center flex-col border-t-2 w-full">
        <div className="flex justify-around p-2 m-2 w-[60%] h-[500px] bg-middlesection ">
          <img
            className="object-cover"
            src={middlesection}
            alt="middlesectionimage"
          />
          <div className="p-4 m-2 flex flex-col w-[50%] justify-around">
            <h1 className="font-bold text-6xl">The Book That Started All</h1>
            <p className="text-gray-light">
              Author, Abel Dawit <br />
              Our books are the perfect supplement for your entrepreneurship or
              financial literacy programs. Schools and enrichment centers around
              the world have experienced that our products even help their
              students in
            </p>
            <div>
              <button className="bg-buttoncolor px-8">Purchase Book</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center flex-col w-full">
        <TabsDefault />
      </div>
    </div>
  );
}

export default LessonsDetail;

export function TabsDefault() {
  const data = [
    {
      label: "ALL",
      value: "all",
      booklist: [
        {
          src: book7,
          id: 1,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        {
          src: book8,
          id: 2,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        {
          src: book3,
          id: 3,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        {
          src: book5,
          id: 4,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        {
          src: book6,
          id: 5,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        {
          src: book3,
          id: 6,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        {
          src: book3,
          id: 7,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
      ],
    },
    {
      label: "TOODLE",
      value: "toodle",
      booklist: [
        {
          src: book7,
          id: 8,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        {
          src: book8,
          id: 9,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        {
          src: book3,
          id: 10,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
      ],
    },
    {
      label: "TEEN",
      value: "teen",
      booklist: [
        {
          src: book7,
          id: 11,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        {
          src: book8,
          id: 12,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
      ],
    },
    {
      label: "KIDS",
      value: "kids",
      booklist: [
        {
          src: book7,
          id: 13,
          des: "some description about book",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
      ],
    },
  ];

  return (
    <Tabs
      className="w-[75%] border-t-2 mt-4 items-center flex flex-col"
      value="all"
    >
      {/* {data.map((item, index) => {
        return <BookList item={item} key={index} />;
      })} */}
      <TabsHeader className="p-4">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, booklist }) => (
          <TabPanel
            key={value}
            value={value}
            className="flex w-[100%] flex-wrap justify-evenly"
          >
            {booklist?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col m-2 p-2 items-center hover:scale-110 "
                >
                  <img src={item.src} alt="imageindex" />
                  <h1 className="font-bold text-xl">{item.des} </h1>

                  <div className="flex p-4">
                    <p>{item.age}&nbsp; </p> <p>{item.page}&nbsp; </p>
                    <p>{item.incluede ? "included" : ""} </p>
                  </div>
                  <NavLink to={`/lessons/book/${item.id}`}>
                    <button className="bg-buttoncolor px-8">Learn More</button>
                  </NavLink>
                </div>
              );
            })}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
