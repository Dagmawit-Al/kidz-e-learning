import React, { useEffect } from "react";
import { useCountries } from "use-react-countries";
import { useDispatch, useSelector } from "react-redux";
import PaymentDetail from "./PaymentDetail";
import Apollo from "./Apollo";
import Commercial from "./Commercial";
import logoImage from "../../assets/images/logoAndText.png";
import Header from "../Header";

import { useNavigate, useLocation, useParams, NavLink } from "react-router-dom";
import { setPathName, listPathName } from "../../redux/slices/locationSlice";

import Telebirr from "./Telebirr";

// function formatCardNumber(value) {
//   const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
//   const matches = val.match(/\d{4,16}/g);
//   const match = (matches && matches[0]) || "";
//   const parts = [];

//   for (let i = 0, len = match.length; i < len; i += 4) {
//     parts.push(match.substring(i, i + 4));
//   }

//   if (parts.length) {
//     return parts.join(" ");
//   } else {
//     return value;
//   }
// }

// function formatExpires(value) {
//   return value
//     .replace(/[^0-9]/g, "")
//     .replace(/^([2-9])$/g, "0$1")
//     .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
//     .replace(/^0{1,}/g, "0")
//     .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
// }

export default function Checkout() {
  const { bookId } = useParams();
  const location = useLocation();
  const { pathname } = useSelector((state) => state.locationslice);
  const navigate = useNavigate();
  const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");

  useEffect(() => { }, []);

  const handlePayment = () => {
    console.log("location pathname", location.pathname);
    navigate(`/book/${bookId}/checkout/learn`);
  };

  return (
    <>
      {/* <Header /> */}
      {/* <NavLink to="/" className="flex items-center sm:flex items-center">
        <img
          href="/"
          src={logoImage}
          alt="Logo"
          className="sm:h-[100px] w-[100px] cursor-pointer rounded-full "
        />
      </NavLink> */}
      <div className="flex flex-col md:flex-row items-center pt-28">
        <PaymentDetail />
        <div className="flex flex-col sm:flex-row w-full items-center justify-evenly mt-8 sm:mt-0">
          <Telebirr handlePayment={handlePayment} />
          {/* <Cards handlePayment={handlePayment} />; */}
          <div className="flex flex-col sm:flex-row sm:w-[35%] mt-8 sm:mt-0">
            {/* <Apollo /> */}
            <Commercial />
          </div>
        </div>
      </div>

    </>
  );
}
