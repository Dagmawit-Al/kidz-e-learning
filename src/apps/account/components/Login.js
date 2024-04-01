import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setSignInOpen } from "../../../redux/slices/authDialogSlice";
import { setPathName } from "../../../redux/slices/locationSlice";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.state.path;
  // console.log("path in login", path);
  // useEffect(() => {
  //   dispatch(setSignInOpen(path));
  //   // dispatch(setPathName())
  // }, [path]);
  dispatch(setPathName(path));
  if (path) {
    dispatch(setSignInOpen());
  }
  return <></>;
};

export default Login;
