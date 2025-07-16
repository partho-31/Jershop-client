import  { useEffect } from "react";
import {  useNavigate, useParams } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import { toast } from "react-toastify";

const ActivateAcc = () => {
const {uid,token} = useParams() 
const navigate = useNavigate()
const {activeAccViaEmail} = useAuthContext()

 useEffect(() => {
  const activateAccount = async () => {
    try {
      const response = await activeAccViaEmail(uid, token);
      
      if (response.success) {
        navigate("/login");
        toast.success(response.message, {
          position: "top-center",
        });
      } else {
        navigate("/registration");
        toast.error("Something went wrong! Please try again", {
          position: "top-center",
        });
      }
    } catch (error) {
      return { "error":error }
    }
  };

  if (uid && token) {
    activateAccount();
  }
}, [uid, token, activeAccViaEmail, navigate]);

  return (
    <div className="h-lvh">
    </div>
  );
};

export default ActivateAcc;