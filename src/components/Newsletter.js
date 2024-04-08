import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if(email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      //add to firebase
      const docRef = addDoc(collection(db, "emails"), {
        email: email,
        createdAt: serverTimestamp()
      });
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }

  return (
    <section className="bg-green dark:bg-gray-900">
      <div className="rounded-lg py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mystery-quest-header mb-4 text-3xl tracking-tight font-extrabold text-[#F7F9F3] sm:text-4xl dark:text-white">
            Sign up for our newsletter
          </h2>
          <p className="bubblegum-sans-subheader mx-auto mb-8 max-w-2xl font-light text-[#F7F9F3] md:mb-12 sm:text-xl dark:text-gray-400">
            Stay up to date with the latest learning materials, announcements
            and exclusive discounts! <br /> Feel free to sign up with your
            email.
          </p>
          <form action="#" onSubmit={handleSubmit}>
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
                    fill="orange"
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
                  value={email}
                  onChange={handleInput}
                  id="newsletteremail"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bubblegum-sans-subheader py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-button border-[#E5588D] sm:rounded-none sm:rounded-r-lg dark:bg-[#FDB7D1]"
                  disabled={!isEmailValid}
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-center text-black newsletter-form-footer dark:text-gray-300 pt-5">
              We care about the protection of your data.{" "}
              <a
                href="#"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
