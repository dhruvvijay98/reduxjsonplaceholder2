import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector((state) => state?.loginReducer);

  return isLoggedIn ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
