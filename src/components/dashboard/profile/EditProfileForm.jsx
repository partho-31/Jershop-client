import { useForm } from "react-hook-form";

import { useState } from "react";

import { toast } from "react-toastify";
import {
  FiUpload,
  FiUser,
  FiMail,
  FiPhone,
  FiHome,
  FiSave,
} from "react-icons/fi";
import useAuthContext from "../../../hooks/useAuthContext";
import AuthAPiClient from "../../../services/AuthApiClient";
import { useNavigate } from "react-router";

const EditProfileForm = () => {
  const { user, setUser } = useAuthContext();
  const [preview, setPreview] = useState(
    user?.image ? `https://res.cloudinary.com/dvyz3blnz/${user.image}` : null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      phone_number: user?.phone_number || "",
      address: user?.address || "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("email", data.email);
      formData.append("phone_number", data.phone_number);
      formData.append("address", data.address);

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      const res = await AuthAPiClient.patch("/auth/users/me/", formData);
      setUser(res.data);
      toast.success("Profile updated successfully");
      navigate("/dashboard/profile");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
      return { error: error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-3/4 mx-auto my-8 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FiUser className="text-indigo-600" />
        Edit Profile
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Profile Image
          </label>
          <div className="flex items-center gap-4">
            <div className="relative group">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-24 h-24 rounded-full object-fill object-center border-2 border-gray-200"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                  <FiUser className="text-gray-400 text-2xl" />
                </div>
              )}
            </div>
            <label className="cursor-pointer">
              <div className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center gap-2 transition">
                <FiUpload />
                <span>Upload Photo</span>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  {...register("image", {
                    required: true,
                    onChange: (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const previewUrl = URL.createObjectURL(file);
                        setPreview(previewUrl);
                      }
                    },
                  })}
                  className="sr-only"
                />
              </div>
            </label>
          </div>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              {...register("first_name", {
                required: "First name is required",
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.first_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.first_name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              {...register("last_name")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className=" text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            <FiMail className="text-gray-500" />
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
            disabled
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            <FiPhone className="text-gray-500" />
            Phone Number
          </label>
          <input
            {...register("phone_number")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
            <FiHome className="text-gray-500" />
            Address
          </label>
          <input
            {...register("address")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-6 py-3 px-4 flex justify-center items-center gap-2 text-white font-medium rounded-lg transition ${
            isSubmitting ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
              Saving...
            </>
          ) : (
            <>
              <FiSave />
              Save Changes
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
