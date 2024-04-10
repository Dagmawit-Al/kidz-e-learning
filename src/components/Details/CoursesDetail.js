import React, { useEffect, useState } from "react";
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

import Header from "../Header";
import middlesection from "../../assets/images/bookCover.png";
import { NavLink } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setUser, listUser, clearUser } from "../../redux/slices/userSlice";
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
    <div className="md:flex flex-col h-screen pt-24">
      {/* <Header /> */}
      <div className="flex justify-center items-center p-5 sm:mt-20 md:p-10">
        <h1 className="comic-sans-medium text-yellow-100 text-center p-10">Welcome {name}!</h1>
      </div>

      <div className="md:flex items-center flex-col border-t-2 w-full">
        <div className="md:flex justify-around p-5 m-2 w-full md:w-5/6 max-w-6xl">
          <img
            className="object-cover w-full md:w-1/2"
            src={middlesection}
            alt="middlesectionimage"
          />
          <div className="md:p-4 m-2 flex flex-col space-y-5 w-full md:w-1/2 justify-around">
            <h1 className="comic-sans-large font-bold text-6xl text-yellow-100">The Book That Started It All</h1>
            <p className="text-base text-yellow-100">
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
        {/* <TabsDefault /> */}
      </div>
    </div>
  );
}

export default CoursesDetail;

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
      label: "TODDLER",
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
    <Tabs className="md:w-[75%] border-t-2 mt-4 flex flex-col h-full overflow-y-auto">
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
              <div
                key={index}
                className="md:w-[25%] w-full md:h-[25%] h-auto flex flex-col m-2 p-2 items-center hover:scale-110"
              >
                <img src={item.src} alt="imageindex" />
                <h1 className="font-bold text-xl">{item.des}</h1>
                <div className="flex p-4">
                  <p className="roboto-regular text-sm">{item.age}&nbsp;</p>
                  <p className="roboto-regular text-sm">{item.page}&nbsp;</p>
                  <p className="roboto-regular text-sm">{item.incluede ? "included" : ""}</p>
                </div>
                <NavLink to={`/courses/book/${item.id}`}>
                  <button className="btn outline-button hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-2 hover:border-black rounded">
                    Learn More
                  </button>
                </NavLink>
              </div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>


  );
}
