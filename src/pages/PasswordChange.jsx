import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AuthAPiClient from "../services/AuthApiClient";

const PasswordChange = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await AuthAPiClient.post("/auth/users/set_password/", {
        current_password: data.oldPassword,
        new_password: data.newPassword,
      });
      reset();
      toast.success("Password change successfully!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Something went wrong! Please try again later", {
        position: "top-center",
      });
      return { error: error };
    }
  };

  return (
    <div className="sm:m-10 my-10 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 sm:w-3/4 sm:p-8 p-4 bg-white rounded-xl shadow-lg"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Change Password</h2>
          <p className="text-gray-600 mt-1">
            Secure your account with a new password
          </p>
        </div>

        {/* Current Password Field */}
        <div className="space-y-1">
          <label
            htmlFor="oldPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Current Password
          </label>
          <div className="relative">
            <input
              id="oldPassword"
              type="password"
              {...register("oldPassword", {
                required: "Current password is required",
              })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.oldPassword ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm`}
              disabled={isSubmitting}
              placeholder="Enter current password"
            />
          </div>
          {errors.oldPassword && (
            <p className="text-red-500 text-sm mt-1 animate-fade-in">
              {errors.oldPassword.message}
            </p>
          )}
        </div>

        {/* New Password Field */}
        <div className="space-y-1">
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <div className="relative">
            <input
              id="newPassword"
              type="password"
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                validate: (value) =>
                  value !== getValues("oldPassword") ||
                  "New password must be different",
              })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm`}
              disabled={isSubmitting}
              placeholder="Enter new password"
            />
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1 animate-fade-in">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-1">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === getValues("newPassword") || "Passwords don't match",
              })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm`}
              disabled={isSubmitting}
              placeholder="Confirm new password"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1 animate-fade-in">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
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
              Updating Password...
            </span>
          ) : (
            "Change Password"
          )}
        </button>
      </form>
    </div>
  );
};

export default PasswordChange;
