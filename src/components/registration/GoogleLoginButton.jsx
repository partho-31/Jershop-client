import { useGoogleLogin } from "@react-oauth/google";
import ApiClient from "../../services/ApiClient";
import { useNavigate } from "react-router";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await ApiClient.post("/auth/google/", {
          access_token: tokenResponse.access_token,
        });

        localStorage.setItem("authToken", JSON.stringify(response.data));
        navigate("/");
      } catch (error) {
        console.error("Google login failed:", error);
      }
    },
    scope:
      "openid profile email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
  });

  return (
    <div className="w-full flex justify-center">
      <button onClick={() => login()} className="w-full py-2 bg-white/20 font-bold text-white rounded-lg hover:bg-white/30 transition duration-200">
        Login with Google
      </button>
    </div>
  );
};

export default GoogleLoginButton;
