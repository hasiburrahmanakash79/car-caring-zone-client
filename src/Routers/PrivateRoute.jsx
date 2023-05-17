import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, Loader } = useContext(AuthContext);

  const location = useLocation();
  if (Loader) {
    return <div><h1 className="text-center my-10 text-3xl">Loading...</h1></div>
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default PrivateRoute;
