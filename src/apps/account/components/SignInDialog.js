import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { addDoc, collection } from "firebase/firestore";

import { auth, signInWithGooglePopup, db } from "../../../firebase";
// import { db } from "../../../firebase";

import {
  setSignInOpen,
  setSignUpOpen,
  setCloseAll,
} from "../../../redux/slices/authDialogSlice";
import { listPathName } from "../../../redux/slices/locationSlice";
import { setUser } from "../../../redux/slices/userSlice";
import Modal from "./Modal";

const SignInDialog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => dispatch(setSignInOpen());

  const isSignInOpen = useSelector((state) => state.authDialog.isSignInOpen);
  const isSignUpOpen = useSelector((state) => state.authDialog.isSignUpOpen);
  const pathname = useSelector((state) => state.locationslice);

  // console.log("path in dialog", pathname);

  const onSignInSubmit = (data) => {};

  const signupWithUsernameAndPassword = async (e, email, password, data) => {
    e.preventDefault();
    setIsLoading(true);
    // const user = userCredential.user;
    // const userArray = [...e.target.elements];
    // console.log(userArray);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setTimeout(() => {
          const user = userCredential.user;
          dispatch(setUser());

          sendEmailVerification(user);
          const { firstname, lastname, email, phoneNumber } = data;

          const docRef = addDoc(collection(db, "users"), {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phoneNumber: phoneNumber,
            uid: user?.uid,
          });

          console.log("docRef", docRef);

          // handleClose();

          handleLogin();
          // navigate(pathname);

          // handleClose();

          console.log(user);
          //   setIsLoading(false);
        }, 5000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    // setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      //   setValues({
      //     firstname: "",
      //     lastname: "",
      //     email: "",
      //     phone: "",
      //     password: "",
      //   });
      console.log("Registered!");
      handleClose();
    } catch {
      //   console.log(firstname);
    }
  };

  const loginWithUsernameAndPassword = async (e, data) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (pathname) {
          dispatch(setUser());
          navigate(pathname.pathname);
          handleClose();
          return;
          // navigate(pathname?.pathname);
          // handleClose();
        } else {
          navigate("/courses");
          handleClose();
        }
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const loginWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  const onSignUpSubmit = (data) => {};

  const handleOpenSignIn = (e) => {
    e.preventDefault();
    // setFirebaseError(null);
    dispatch(setSignInOpen());
  };

  const handleOpenSignUp = (e) => {
    e.preventDefault();
    // setFirebaseError(null);
    dispatch(setSignUpOpen());
  };

  const handleClose = () => {
    console.log(
      "inside handleclose",
      "pathname",
      pathname,
      "locatio",
      location
    );
    if (location?.pathname === "/login") {
      navigate("/");
      dispatch(setCloseAll());
    }
    dispatch(setCloseAll());
    // if (location.pathname === "/login") {
    //   navigate("/");
    // } else {
    //   console.log("else ", pathname.pathname);
    //   navigate(pathname.pathname);
    // }
    // navigate("/");
  };

  const handleLogin = () => {
    dispatch(setSignInOpen());
    // handleshowLoginModal(true);
    // handleshowRegistrationModal(false);
  };

  const isDialogOpen = isSignInOpen || isSignUpOpen;

  //   useEffect(() => {
  //     dispatch(setCloseAll());
  //   }, []);

  return (
    // <Dialog className="w-[550px] " size="xs" open={isDialogOpen}>
    <Modal open={isDialogOpen} onClose={handleClose}>
      <Card className="mx-auto max-w-[30rem] mt-8  ">
        <CardBody className="flex flex-col gap-4">
          {isSignInOpen && (
            <>
              <Typography variant="h4" color="blue-gray">
                Sign In
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your email and password to Sign In.
              </Typography>
            </>
          )}

          {isSignUpOpen && (
            <>
              <Typography variant="h4" color="blue-gray">
                Sign Up
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your email and password to Sign Up.
              </Typography>
            </>
          )}
          {isSignInOpen && (
            <SignInForm
              handleOpenSignUp={handleOpenSignUp}
              onSubmit={onSignInSubmit}
              openModal={isDialogOpen}
              handleClose={handleClose}
              loginWithUsernameAndPassword={loginWithUsernameAndPassword}
              loginWithGoogle={loginWithGoogle}
            />
          )}
          {isSignUpOpen && (
            <SignUpForm
              handleSubmit={handleSubmit}
              signupWithUsernameAndPassword={signupWithUsernameAndPassword}
              handleOpenSignIn={handleOpenSignIn}
              openModal={isDialogOpen}
              handleClose={handleClose}
              //   loginWithUsernameAndPassword={loginWithUsernameAndPassword}
              loginWithGoogle={loginWithGoogle}
              onSubmit={onSignUpSubmit}
            />
          )}

          <Typography>
            {isSignInOpen && (
              <Typography variant="small" className="mt-4 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                  onClick={handleOpenSignUp}
                >
                  Sign Up
                </Typography>
              </Typography>
            )}

            {isSignUpOpen && (
              <Typography variant="small" className=" flex justify-center">
                Already have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                  onClick={handleOpenSignIn}
                >
                  Log in
                </Typography>
              </Typography>
            )}
          </Typography>
        </CardBody>
      </Card>
    </Modal>

    // </Dialog>
  );
};

export default SignInDialog;
