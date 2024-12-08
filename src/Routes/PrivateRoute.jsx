// src/Routes/PrivateRoute.jsx
import { useContext } from "react";
import { Authcontext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user && user.email === "mr9374247@gmail.com") {
    // Check if the user is an admin
    return children;
  }

  return <Navigate to="/admin/login" state={{ from: location }} />;
};

export default PrivateRoute;
