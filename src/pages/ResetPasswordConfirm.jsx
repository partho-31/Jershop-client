import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import ApiClient from "../services/ApiClient";
import { toast } from "react-toastify";

const ResetPasswordConfirm = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await ApiClient.post(
        "auth/users/reset_password_confirm/",
        {
          uid,
          token,
          new_password: data.new_password,
        }
      );
      if (response.status === 204) {
        setSuccessMsg(true);
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again later.", {
        position: "top-center",
      });
      return { error: error };
    } finally {
      setSuccessMsg(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {successMsg ? (
        <div role="alert" className="alert alert-success">
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
          <span>Your purchase has been confirmed!</span>
        </div>
      ) : (
        " "
      )}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-white">
          <h2 className="text-2xl font-bold">Set New Password</h2>
          <p className="opacity-90">Create a strong new password</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
          {errors.root?.serverError && (
            <div className="p-3 rounded-lg bg-red-100 text-red-700">
              {errors.root.serverError.message}
            </div>
          )}

          <div>
            <label
              htmlFor="new_password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              New Password
            </label>
            <input
              id="new_password"
              type="password"
              {...register("new_password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.new_password ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
              placeholder="••••••••"
            />
            {errors.new_password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.new_password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="re_new_password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm New Password
            </label>
            <input
              id="re_new_password"
              type="password"
              {...register("re_new_password", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("new_password") || "Passwords do not match",
              })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.re_new_password ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
              placeholder="••••••••"
            />
            {errors.re_new_password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.re_new_password.message}
              </p>
            )}
          </div>

          <div className="pt-2">
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
                  Resetting...
                </span>
              ) : (
                "Reset Password"
              )}
            </button>
          </div>
        </form>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            Remember your password?{" "}
            <a
              href="/login"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
