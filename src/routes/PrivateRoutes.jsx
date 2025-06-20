import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuthContext();
  return user ? children : <Navigate to="/" />
};

export default PrivateRoutes;