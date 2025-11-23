import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useState } from "react";
import ApiClient from "../services/ApiClient";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await ApiClient.post("auth/users/reset_password/", {
        email: data.email,
      });

      if (response.status === 204) {
        setSuccess(true);
        console.log("Password reset link sent! Check your email.");
      }
      reset();
    } catch (error) {
      console.log("Error sending reset link!", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
        {success ? (
          <div role="alert" className="alert alert-success my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Password reset link sent! Check your email</span>
          </div>
        ) : (
          ""
        )}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-white">
          <h2 className="text-2xl font-bold">Reset Your Password</h2>
          <p className="opacity-90">Enter your email to receive a reset link</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-0 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 animate-pulse">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;