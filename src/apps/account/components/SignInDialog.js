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
import { NavLink, useNavigate } from "react-router-dom";

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

const SignInDialog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => dispatch(setSignInOpen());

  const isSignInOpen = useSelector((state) => state.authDialog.isSignInOpen);
  const isSignUpOpen = useSelector((state) => state.authDialog.isSignUpOpen);

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

          //   sendEmailVerification(user);

          //   const docRef = addDoc(
          //     collection(db, "users", {
          //       firstname: data?.firstname,
          //       lastname: data?.lastname,
          //       email: data?.email,
          //       phoneNumber: data?.phoneNumber,
          //       uid: user?.uid,
          //     })
          //   );

          handleClose();
          handleLogin();
          console.log(user);
          //   setIsLoading(false);
        }, 5000);
      })
      .catch((error) => {
        console.log("error is tiga", error);
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
    console.log("here", e);
    console.log("email", data.email);
    console.log("password", data.password);
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/courses");
        handleClose();
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const loginWithGoogle = async () => {
    console.log("handlegoogle");
    // const response = await signInWithGooglePopup();
    // console.log(response);
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
    dispatch(setCloseAll());
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
    <>
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
    </>
  );
};

export default SignInDialog;
