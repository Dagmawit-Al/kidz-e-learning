import { Card } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import React, { useState } from "react";
import green from "../../assets/images/green1.JPG";
import second from "../../assets/images/green2.JPG";
import ethiopia from "../../assets/images/diasporaEvent.jpg"
import comingSoon from "../../assets/images/soon.png"
import TobBar from "../TobBar";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function ProgramsDetail() {
  const [showDiasporaModal, setShowDiasporaModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubscribeClicked, setisSubscribeClicked] = useState(false);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      //add to firebase
      const docRef = addDoc(collection(db, "diasporaEventSubscriptions"), {
        email: email,
        createdAt: serverTimestamp()
      });
      setisSubscribeClicked(true);
      // alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }

  return (
    <>
      <TobBar />
      <section className="container flex flex-col items-center mx-auto space-y-10 px-4 md:px-8 py-10 mt-10 lg:py-20 xl:py-28">
        <div className="flex flex-col space-y-8 items-center">
          <Card className="flex flex-col justify-center items-center bg-yellow-100 px-10 pb-10 sm:px-20 shadow-2xl rounded-lg">
            <h1 className="comic-sans-medium text-black text-center p-8">
              Experience Ethiopia Like Never Before! (for Ethiopian diaspora)
            </h1>
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-10">
              <div className="h-auto w-full md:w-1/2">
                {/* <Carousel className="h-full rounded-xl md:mt-10"> */}
                <img src={ethiopia} alt="image 1" className="h-full w-full md:h-auto md:w-full rounded-xl md:mt-10 object-cover" />
                {/* <img src={second} alt="image 2" className="h-full object-cover" /> */}
                {/* </Carousel> */}
              </div>
              <div className="flex flex-col space-y-8 w-full md:w-1/2">
                <p className="bubblegum-sans-subheader">
                  Learn New Skills and Cultivate Social Connections: Embark on a journey of personal growth and discovery as you engage in diverse volunteer activities. From caring for the elderly and supporting children with disabilities to visiting patients in the hospital, participating in tree planting events, and playing football with Ethiopian youth, Mentorable offers a wealth of opportunities to expand your skills, broaden your perspective, and foster meaningful social connections. Interacting with fellow youth volunteers during your stay provides an additional avenue for developing valuable social skills and building lifelong friendships.
                </p>
                <TERipple
                  // className="btn outline-button w-full md:w-auto hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 rounded" 
                  rippleColor="white">
                  <button
                    type="button"
                    className="btn outline-button w-full md:w-auto hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 rounded"
                    onClick={() => setShowDiasporaModal(true)}
                  >
                    Register
                  </button>
                </TERipple>
              </div>
            </div>
          </Card>
        </div>

        <TEModal show={showDiasporaModal} setShow={setShowDiasporaModal}>
          <TEModalDialog>
            <TEModalContent>
              <TEModalHeader>
                {/* <!--Modal title--> */}
                <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                  Register here and we'll contact you as soon as possible with the details!
                </h5>
                {/* <!--Close button--> */}
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={() => setShowDiasporaModal(false)}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </TEModalHeader>
              {/* <!--Modal body--> */}
              <TEModalBody>
                <form action="#"
                  onSubmit={handleSubmit}
                >
                  <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                    <div className="relative w-full">
                      <label
                        for="email"
                        className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Email address
                      </label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-[#FDB7D1] dark:text-gray-400"
                          fill="black"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <input
                        className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter your email"
                        type="email"
                        // value={email}
                        onChange={handleInput}
                        id="newsletteremail"
                        required
                      />
                    </div>
                    <div>
                      {
                        isSubscribeClicked ?
                          (<button
                            type="submit"
                            className="bubblegum-sans-subheader py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-green-200 sm:rounded-none sm:rounded-r-lg dark:bg-[#FDB7D1]"
                            disabled={!isEmailValid}
                          >
                            Subscribed!
                          </button>)
                          :
                          (<button
                            type="submit"
                            className="bubblegum-sans-subheader py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-yellow-100 sm:rounded-none sm:rounded-r-lg dark:bg-[#FDB7D1]"
                            disabled={!isEmailValid}
                          >
                            Subscribe
                          </button>)
                      }
                    </div>
                  </div>
                </form>
              </TEModalBody>
              <TEModalFooter>
                <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                    onClick={() => setShowDiasporaModal(false)}
                  >
                    Close
                  </button>
                </TERipple>
                {/* <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Save changes
                  </button>
                </TERipple> */}
              </TEModalFooter>
            </TEModalContent>
          </TEModalDialog>
        </TEModal>
        <div className="flex flex-col space-y-8 items-center">
          <Card className="flex flex-col justify-center items-center bg-green-200 px-10 pb-10 sm:px-20 shadow-2xl rounded-lg">
            <h1 className="comic-sans-medium text-black text-center p-8">
              Grow with Ethiopia: Kids Green Legacy Planting Day!
            </h1>
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-10">
              <div className="h-auto w-full md:w-1/2">
                <Carousel className="h-full rounded-xl">
                  <img src={green} alt="image 1" className="h-full w-full md:h-auto md:w-full rounded-xl md:mt-10 object-cover" />
                  <img src={second} alt="image 2" className="h-full w-full md:h-auto md:w-full rounded-xl md:mt-10 object-cover" />
                </Carousel>
              </div>
              <div className="flex flex-col space-y-8 w-full md:w-1/2">
                <p className="bubblegum-sans-subheader">
                  Join us for a fun-filled day of planting trees and making a difference! This special event is designed for kids of all ages to be a part of Ethiopia's incredible Green Legacy initiative. We'll learn about the importance of trees, explore the amazing biodiversity of Ethiopia, and get our hands dirty planting native seedlings that will help combat climate change and beautify our environment.
                </p>
                {/* <button
                  type="button"
                  className="btn outline-button w-full md:w-auto hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 rounded"
                // onClick={goToFullBlog}
                >
                  Register
                </button> */}
                <button
                  type="button"
                  className="w-full md:w-auto bg-white hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 rounded"
                // onClick={goToFullBlog}
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col space-y-8 items-center">
          <Card className="flex flex-col justify-center items-center bg-orange-100 px-10 py-10 sm:px-20 shadow-2xl rounded-lg">
            <h1 className="comic-sans-medium text-black text-center p-8">
              SummerBiz Startup Camp!
            </h1>
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-10">
              <div className="w-full md:w-1/2">
                {/* <Carousel className="h-full rounded-xl"> */}
                <img src={comingSoon} alt="image 1" height={100} className="w-full md:w-full rounded-xl object-cover" />
                {/* <img src={second} alt="image 2" className="h-full object-cover" /> */}
                {/* </Carousel> */}
              </div>
              <div className="flex flex-col space-y-8 w-full md:w-1/2">
                <p className="bubblegum-sans-subheader">
                  Turn your lemonade stand dreams into a summer business reality! This summer camp will equip you with the skills to brainstorm ideas, build a brand, and launch your very own mini-empire. Get ready to be the CEO of summer fun!
                </p>
                <button
                  type="button"
                  className="w-full md:w-auto bg-white hover:bg-middlesection text-black font-semibold hover:text-black py-2 px-4 rounded"
                // onClick={goToFullBlog}
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

export default ProgramsDetail;
