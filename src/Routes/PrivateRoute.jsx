import { useContext } from "react";
import { Authcontext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}}></Navigate>;
};

export default PrivateRoute;
