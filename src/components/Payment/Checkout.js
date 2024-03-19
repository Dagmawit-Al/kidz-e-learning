import React, { useEffect } from "react";
import { useCountries } from "use-react-countries";
import { useDispatch, useSelector } from "react-redux";
import PaymentDetail from "./PaymentDetail";
import Apollo from "./Apollo";
import Commercial from "./Commercial";
import telebirr from "../../assets/images/telebirr.png";
import Header from "../Header";
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
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { setPathName, listPathName } from "../../redux/slices/locationSlice";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

export default function Checkout() {
  const { bookId } = useParams();
  const location = useLocation();
  const { pathname } = useSelector((state) => state.locationslice);
  const navigate = useNavigate();
  const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");

  useEffect(() => {}, []);

  const handlePayment = () => {
    console.log("location pathname", location.pathname);
    navigate(`/book/${bookId}/checkout/learn`);
  };

  return (
    <>
      <Header />
      <div>
        <div className="flex w-full items-center justify-evenly">
          <Cards handlePayment={handlePayment} />;
          <PaymentDetail />
          {/* <Cards handlePayment={handlePayment} />; */}
        </div>
        <div className="flex">
          <Apollo />
          <Commercial />
        </div>
      </div>
    </>
  );
}

const Cards = ({ handlePayment }) => {
  const { bookId } = useParams();
  const location = useLocation();
  const { pathname } = useSelector((state) => state.locationslice);
  const navigate = useNavigate();
  const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");
  return (
    <div>
      <Card className="items-center w-full h-[100%] m-4">
        <CardHeader
          color="gray"
          floated={false}
          shadow={false}
          className="m-4 grid place-items-center px-4 py-8 text-center w-[75%]"
        >
          <div className="mb-4 h-20 p-6 text-white">
            <img alt="paypal " className="w-14 " src={telebirr} />
          </div>
          <Typography className="w-full" variant="h5" color="white">
            Checkout
          </Typography>
        </CardHeader>
        <CardBody>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0 ">
              <Tab
                className="font-bold"
                value="paypal"
                onClick={() => setType("paypal")}
              >
                Pay with Telebirr
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-visible"
              animate={{
                initial: {
                  x: type === "card" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "card" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="card" className="p-0">
                <form className="mt-12 flex flex-col gap-4">
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium "
                    >
                      Phone Number
                    </Typography>

                    <Input
                      maxLength={19}
                      value={formatCardNumber(cardNumber)}
                      onChange={(event) => setCardNumber(event.target.value)}
                      icon={
                        <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                      }
                      placeholder="+251 9121 29759"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <div className="my-3">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Your Email
                    </Typography>
                    <Input
                      type="email"
                      placeholder="name@mail.com"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />

                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Holder Name
                    </Typography>
                    <Input
                      placeholder="name@mail.com"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <Button
                    className="text-black"
                    onClick={handlePayment}
                    size="lg"
                  >
                    Pay Now
                  </Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
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
