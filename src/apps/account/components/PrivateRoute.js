import { React } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoutes = ({ children }) => {
  const firebaseUser = useSelector((state) => state.userData.user);
  const location = useLocation();
  console.log("firebase user is", firebaseUser);

  return firebaseUser === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

export default PrivateRoutes;
