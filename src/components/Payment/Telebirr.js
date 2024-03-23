import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import telebirr from "../../assets/images/telebirr.png";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Telebirr = ({ handlePayment }) => {
  const { userFirebase } = useSelector((state) => state.userData);
  const { bookId } = useParams();
  const location = useLocation();
  const { pathname } = useSelector((state) => state.locationslice);
  const navigate = useNavigate();
  // const { countries } = useCountries();
  const [type, setType] = useState("card");
  const [phoneNumber, setPhoneNumber] = useState(userFirebase?.phoneNumber);
  const [email, setEmail] = useState(userFirebase?.email);
  const [name, setName] = useState(userFirebase?.firstname);
  // const [cardExpires, setCardExpires] = React.useState("");

  //   const handlePayment = () => {
  //     console.log("location pathname", location.pathname);
  //     navigate(`/book/${bookId}/checkout/learn`);
  //   };

  console.log("userFirebase", userFirebase);
  return (
    <div className="w-[45%] flex items-center">
      <Card className="items-center w-full h-[100%] bg-gray m-4">
        <CardHeader
          color="gray"
          floated={false}
          shadow={true}
          className="m-4 grid place-items-center px-4 py-8 text-center w-[75%]"
        >
          <div className="mb-4 h-20 p-6 text-white">
            <img alt="telebirr " className="w-14 " src={telebirr} />
          </div>
          <Typography className="w-full" variant="h5" color="white">
            Checkout
          </Typography>
        </CardHeader>
        <CardBody>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0 ">
              {/* <Tab className="font-bold text-white" value="Telebirr">
                Pay with Telebirr
              </Tab> */}
              <Typography className="font-bold text-white flex justify-center w-full">
                Pay with Telebirr
              </Typography>
            </TabsHeader>
            <TabsBody className="!overflow-x-hidden !overflow-y-visible">
              <TabPanel value="card" className="p-0">
                <form className="mt-12 flex flex-col gap-4">
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium text-white "
                    >
                      Phone Number
                    </Typography>
                    <input
                      type="number"
                      name="phonenumber"
                      id="phone"
                      class="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="0912121212"
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                  </div>

                  <div className="my-3">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium text-white"
                    >
                      Your Email
                    </Typography>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="name@gmail.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />

                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 mt-2 font-medium text-white"
                    >
                      Holder Name
                    </Typography>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      class="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Name Last"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <Button
                    className="text-white"
                    onClick={handlePayment}
                    size="lg"
                  >
                    Pay Now
                  </Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60 text-white"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4 text-white" />{" "}
                    Payments are secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default Telebirr;
