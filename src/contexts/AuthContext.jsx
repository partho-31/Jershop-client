import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const data = useAuth();
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
