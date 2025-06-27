import { useCallback, useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import AuthAPiClient from "../services/AuthApiClient";
import { useNavigate } from "react-router";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getToken = () => {
    const token = localStorage.getItem("authToken");
    return token ? JSON.parse(token) : null;
  };

  const [authToken, setAuthToken] = useState(getToken());

  const registration = async (data) => {
    setLoading(true);
    try {
      await ApiClient.post("/auth/users/", data);
    } catch (error) {
      console.log(error, "Registration Failed");
    } finally {
      setLoading(false);
    }
    return { success: true, message: "Registration successful" };
  };

  const activeAccViaEmail = async (uid, token) => {
    try {
      await ApiClient.post("/auth/users/activation/", { uid, token });
      return { success: true, message: "Account active successful" };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Activation failed" };
    }
  };

  const userProfile = useCallback(async () => {
    if (!authToken) return;
    setLoading(true);
    try {
      const response = await AuthAPiClient.get("/auth/users/me/");
      setUser(response.data);
    } catch (error) {
      console.log("Error while fetching user", error);
    } finally {
      setLoading(false);
    }
  }, [authToken]);

  const logIn = async (data) => {
    setLoading(true);
    try {
      const response = await ApiClient.post("/auth/jwt/create/", data);
      setAuthToken(response.data);
      localStorage.setItem("authToken", JSON.stringify(response.data));
      await userProfile();
      navigate("/");
    } catch (error) {
      console.log("Error while fetching token", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async () => {
    setLoading(true);
    try {
      const response = await AuthAPiClient.delete("/auth/users/me/");
      console.log(response);
    } catch (error) {
      console.log("Error while deleting user", error);
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    localStorage.removeItem("authToken");
    setUser(null);
    setAuthToken(null);
  };

  const forgetPassword = async (data) => {
    setLoading(true);
    try {
      await ApiClient.post("/auth/users/reset_password/", data);
      return {
        success: true,
        message: "A mail has sent to your email .Please check!",
      };
    } catch (error) {
      console.log("Error while making request for reset pass", error);
    } finally {
      setLoading(false);
    }
  };

  const setPassword = async (data) => {
    try {
      const response = await AuthAPiClient.post(
        "/auth/users/set_password/",
        data
      );
      console.log(response);
    } catch (error) {
      console.log("Error while setting new pass", error);
    }
  };

  const fetchOrder = async () => {
    setLoading(true);
    try {
      const response = await AuthAPiClient.get("/api/order/");
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userProfile();
    fetchOrder();
  }, [userProfile]);

  return {
    user,
    orders,
    registration,
    activeAccViaEmail,
    userProfile,
    logIn,
    logOut,
    setPassword,
    forgetPassword,
    deleteAccount,
    loading,
  };
};

export default useAuth;
