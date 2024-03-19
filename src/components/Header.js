import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const handleSignUp = () => {};
  return (
    <>
      <div className="flex items-center justify-between m-2 sm:flex items-center justify-between mx-2">
        <NavLink to="/">
          {" "}
          <h1 className=" text-buttoncolor text-2xl pl-4">KiDZ</h1>{" "}
        </NavLink>
        <h1 className="hidden sm:flex justify-center font-bold text-4xl p-4 text-buttoncolor ">
          KidsLearning
        </h1>
        <div>
          <button
            onClick={handleSignUp}
            className="opacity-90 bg-button text-black"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
