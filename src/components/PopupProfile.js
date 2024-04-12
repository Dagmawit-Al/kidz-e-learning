import React from "react";
import pediatrician from "../assets/images/DrKal.jpg";

function PopupProfile() {
  return (
    <div>
      <button
        data-popover-target="popover-right"
        data-popover-placement="bottom"
        type="button"
        className="text-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-gray-100 dark:focus:ring-gray-200"
      >
        Credentials
      </button>

      <div
        data-popover
        id="popover-right"
        role="tooltip"
        className="absolute z-10 invisible inline-block 
                  w-3/4 text-sm text-gray-500 transition-opacity 
                  duration-300 bg-[#5FDFF0] border border-gray-200 rounded-lg 
                  shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 
                  dark:border-gray-600 space-y-8"
      >
        <div className="  p-3">
          <div className="flex items-center flex-col  mb-2">
            <a href="#">
              <img
                className="w-20 h-20 mt-8 md:mt-10 rounded-full"
                src={pediatrician}
                alt=""
              />
            </a>

          </div>
          <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a>Dr. Kalkidan Tesfaye</a>
          </p>
          <p className="mb-3 text-sm font-normal">Pediatrician</p>
          <p className="roboto-regular mb-4 text-black text-sm">

            Dr. Kalkidan is a highly experienced medical doctor specializing in pediatrics and child health.
            She has held key leadership positions at prestigious hospitals and academic institutions,
            including Yaye Hospital, Kadisco General Hospital, and Addis Ababa University School of Medicine.
            With a deep commitment to children's health, she is currently pursuing a master's degree in public
            health to address pediatric challenges in resource-limited settings. <br /><br />
            Beyond her professional roles, Dr. Kalkidan is dedicated to fostering children's development
            and well-being. She actively volunteers for medical campaigns and leads the pediatrics charity
            wing at St. Paul Hospital Millennium Medical College.
            In addition, she has founded a non-profit organization focused on improving the lives of
            underprivileged children, demonstrating her passion for making a positive impact in her community.
          </p>
          <div className="ml-3">
            <a href="https://www.facebook.com/kalkidan.tesfaye.75">
              <button
                type="button"
                src="https://www.facebook.com/kalkidan.tesfaye.75"

                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-2 inline-block rounded-full bg-[#1877f2] p-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
            </a>
            <a href="https://www.instagram.com/kanty.kal?igsh=MXd5dHJidmYxN2kzYw==">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-2 inline-block rounded-full bg-[#c13584] p-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
            </a>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="mb-2 inline-block rounded-full bg-[#0077b5] p-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>
          </div>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  );
}

export default PopupProfile;
