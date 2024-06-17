import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

const PrivateRoute = ({ children }) => {
  const { user } = useGlobalContext();

  let navigate = useNavigate();

  if (!user) {
    return navigate("/");
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
