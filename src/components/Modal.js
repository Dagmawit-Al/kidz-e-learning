import React, { useState } from "react";

const Modal = ({ showmodal, handleshowmodal }) => {
  //   const [showModal, setShowModal] = useState();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const handleSubmit = () => {
    handleshowmodal(values);
    setValues({ firstname: "", lastname: "", email: "", phone: "" });
  };

  const handleInput = (e) => {
    console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button> */}
      {showmodal ? (
        <>
          <div className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" relative w-[100%] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-red-50	 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-light rounded-t ">
                  <h3 className="text-2xl text-black font-semibold">
                    General Info
                  </h3>
                  <button
                    className=" border-0 text-black float-right"
                    onClick={handleshowmodal}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block font-bold py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input
                      name="firstname"
                      value={values.firstname}
                      onChange={handleInput}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleInput}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleInput}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Phone number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      value={values.phone}
                      onChange={handleInput}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleshowmodal}
                  >
                    Close
                  </button>
                  <button
                    className="text-black active:bg-yellow-700 uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
