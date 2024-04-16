import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import book2 from "../../assets/images/climateCover.png";
import book3 from "../../assets/images/financialCover.jpg";
import book4 from "../../assets/images/socialCover.jpg";

import Header from "../Header";
import middlesection from "../../assets/images/cover.png";
import { NavLink } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setUser, listUser, clearUser } from "../../redux/slices/userSlice";
// import { Card}
import { motion } from "framer-motion";

function CoursesDetail() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const firebaseUser = useSelector((state) => state.userData.user);
  console.log("firebase user in coursedetail", firebaseUser);
  const [uid, setUID] = useState("");
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      console.log("DOCS", doc);
      const data = doc.docs[0].data();
      console.log("DATA", data);
      dispatch(setUser(data));
      setName(data.firstname);
      console.log("NAME:", data.firstname);
    } catch (err) {
      console.error(err);
      // alert("An error occured while fetching user data");
    }
  };

  const handleLogOut = () => {
    auth.signOut();
    dispatch(clearUser());
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUID(user.uid);
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
    fetchUserName();
  }, [user]);

  // useEffect(() => {
  //   dispatch(clearUser());
  // }, []);

  return (
    <div className="md:flex flex-col pt-10">
      {/* <Header /> */}
      <div className="flex justify-center items-center p-5 sm:mt-15 md:p-2 mt-20">
        <h1 className="comic-sans-medium text-yellow-100 text-center p-10">Welcome {name}!</h1>
      </div>

      {/* <Card className="flex flex-col md:flex-row bg-transparent w-full p-6 md:p-10 space-y-6 md:space-y-3 md:space-x-12 items-center">
        <img
          src={middlesection}
          className="rounded-2xl shadow-4-strong w-full md:w-1/2 h-[50%] h-auto"
          alt="Blog Image"
        />
        <div className="flex flex-col w-full space-y-3 md:w-1/2 md:space-y-5 items-center md:items-start">
          <a
            href="/blogs/fullBlog"
            className="comic-sans-medium font-bold text-yellow-100 text-center md:text-left"
            title="Business Plans: A Step-by-Step Guide for Kid Entrepreneurs"
          >
            Revolutionizing Children's Electronic Engagement
          </a>
          <div className="flex flex-row space-x-3 text-yellow-100 text-sm">
            <p className="roboto-regular-italic text-yellow-100 text-sm">Filagot Tesfaye</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="roboto-regular-italic text-yellow-100 text-sm">April 10, 2024</p>
          </div>
          <p className="bubblegum-sans-subheader text-yellow-100 text-center md:text-left">
            In today's digital age, it's no secret that electronics play a significant role in the lives
            of children. From smartphones and tablets to laptops and gaming consoles,
            technology has become an integral part of daily life for many kids. However, [...]
          </p>
          <button
            type="button"
            className="btn outline-button m-2 md:w-full bg-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 md:py-2 md:px-6 hover:border-black rounded"
            // onClick={goToFullBlog}
          >
            Read
          </button>
        </div>
      </Card> */}

      <div className="flex items-center flex-col md:flex items-center flex-row border-t-4 border-black w-full h-auto">
        <div className="md:flex justify-around p-5 m-2 w-full md:w-5/6 max-w-6xl">
          <img
            className="object-cover "
            width="30%"
            height={100}
            src={middlesection}
            alt="middlesectionimage"
          />
          <div className="md:p-4 m-2 flex flex-col space-y-5 w-full md:w-1/2 justify-around">
            <h1 className="comic-sans-large font-bold text-6xl text-yellow-100">The Book That Started It All</h1>
            <p className="comic-sans-small text-base text-yellow-100">
              Author: Filagot Tesfaye <br />
            </p>
            <p className="roboto-medium text-xl text-yellow-100">
              Our books are the perfect supplement for your entrepreneurship or
              financial literacy programs. Schools and enrichment centers around
              the world have experienced that our products even help their
              students in
            </p>
            <div>
              <NavLink to={`/courses/book/${1}`}>
                <button className="btn outline-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2 hover:border-black rounded">
                  Purchase Book
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex items-center flex-col w-full">
        <TabsDefault />
      </div>
    </div>
  );
}

export default CoursesDetail;

export function TabsDefault() {
  const data = [
    {
      label: "AVAILABLE NOW",
      value: "availableNow",
      booklist: [
        {
          src: middlesection,
          id: 1,
          des: "Become a mini-mogul! This book shows you how to turn your ideas into cash.",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        // {
        //   src: book8,
        //   id: 2,
        //   des: "some description about book",
        //   age: "6-12 years",
        //   page: "64 pages",
        //   incluede: true,
        // },
        // {
        //   src: book3,
        //   id: 3,
        //   des: "some description about book",
        //   age: "6-12 years",
        //   page: "64 pages",
        //   incluede: true,
        // },
        // {
        //   src: book5,
        //   id: 4,
        //   des: "some description about book",
        //   age: "6-12 years",
        //   page: "64 pages",
        //   incluede: true,
        // },
        // {
        //   src: book6,
        //   id: 5,
        //   des: "some description about book",
        //   age: "6-12 years",
        //   page: "64 pages",
        //   incluede: true,
        // },
        // {
        //   src: book3,
        //   id: 6,
        //   des: "some description about book",
        //   age: "6-12 years",
        //   page: "64 pages",
        //   incluede: true,
        // },
        // {
        //   src: book3,
        //   id: 7,
        //   des: "some description about book",
        //   age: "6-12 years",
        //   page: "64 pages",
        //   incluede: true,
        // },
      ],
    },
    {
      label: "UPCOMING",
      value: "upcoming",
      booklist: [
        {
          src: book2,
          id: 8,
          des: "Explore how we can be kind to our planet and have fun while doing it!",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        {
          src: book3,
          id: 9,
          des: "Turn your piggy bank into a pro and watch your savings grow!",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
        {
          src: book4,
          id: 10,
          des: "Make friends, build teamwork, and be a social superstar with this awesome guide!",
          age: "6-12 years",
          page: "64 pages",
          incluede: true,
        },
      ],
    },
    // {
    //   label: "TEEN",
    //   value: "teen",
    //   booklist: [
    //     {
    //       src: book7,
    //       id: 11,
    //       des: "some description about book",
    //       age: "6-12 years",
    //       page: "64 pages",
    //       incluede: true,
    //     },
    //     {
    //       src: book8,
    //       id: 12,
    //       des: "some description about book",
    //       age: "6-12 years",
    //       page: "64 pages",
    //       incluede: true,
    //     },
    //   ],
    // },
    // {
    //   label: "KIDS",
    //   value: "kids",
    //   booklist: [
    //     {
    //       src: book7,
    //       id: 13,
    //       des: "some description about book",
    //       age: "6-12 years",
    //       page: "64 pages",
    //       incluede: true,
    //     },
    //   ],
    // },
  ];

  return (
    <Tabs
      className="md:w-[75%] border-t-2 border-black mt-4 flex flex-col h-full overflow-y-auto"
      TabInd
      value="availableNow">
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
      <TabsBody className="flex-grow">
        {data.map(({ value, booklist }) => (
          <TabPanel key={value} value={value} className="flex flex-wrap justify-center">
            {booklist?.map((item, index) => (
              // <div
              //   key={index}
              //   className="flex flex-row w-full mt-10 grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-3"
              // >
 <div key={index} 
 className="md:w-[25%] w-full md:h-[25%] h-auto flex flex-col m-2 p-2 items-center hover:scale-110">
        {/* <img
          // href="/blogs"
          className="w-[75%] h-[75%] m-6 md:m-4 object-cover border-2 border-black shadow-lg cursor-pointer hover:scale-110 rounded-lg "
          src={item.src}
          alt="lesson image"
        />  */}
        {/* <p>{data.date.toISOString()}</p> */}
        {/* // <p className="bubblegum-sans-subheader p-2 text-black text-center w-[75%] font-paragraph">
        //   {item.des}{" "}
        // </p> */}
      {/* </div> */}
                <img src={item.src} alt="imageindex" />
                <p className="comic-sans-small text-yellow-100 text-center font-bold text-xl">{item.des}</p>
                <div className="flex p-4">
                  <p className="roboto-regular text-yellow-100 text-sm">{item.age}&nbsp;</p>
                  <p className="roboto-regular text-yellow-100 text-sm">{item.page}&nbsp;</p>
                  <p className="roboto-regular text-yellow-100 text-sm">{item.incluede ? "included" : ""}</p>
                </div>
                {value === "availableNow" ? (
                  <NavLink to={`/courses/book/${item.id}`}>
                  <button className="btn outline-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2 hover:border-black rounded">
                    Learn More
                  </button>
                </NavLink>
                ) : (
                  <NavLink to={`/courses/book/${item.id}`}>
                  <button className="btn outline-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2 hover:border-black rounded" disabled>
                    Coming Soon!
                  </button>
                </NavLink>
                )}
                
              </div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>


  );
}
