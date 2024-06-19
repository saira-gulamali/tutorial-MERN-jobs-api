import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

const PrivateRoute = ({ children }) => {
  const { user } = useGlobalContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;

  // return (
  //   <Route
  //     {...rest}
  //     render={() => {
  //       return user ? children : <Redirect to="/"></Redirect>;
  //     }}
  //   ></Route>
  // );
};
export default PrivateRoute;
