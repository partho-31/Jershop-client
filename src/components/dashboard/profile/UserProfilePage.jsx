import { useNavigate } from "react-router";
import useAuthContext from "../../../hooks/useAuthContext";
import { FiEdit2, FiKey, FiUser } from "react-icons/fi";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdCalendarToday,
} from "react-icons/md";

const UserProfilePage = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="sm:w-3/4 mx-auto my-10 ">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Gradient Header */}
        <div className="relative h-40  ">
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Profile Picture */}
          <div className="absolute -bottom-16 left-8 sm:left-12">
            <div className="relative group">
              {user?.image ? (
                <img
                  src={`https://res.cloudinary.com/dvyz3blnz/${user.image}`}
                  alt="User"
                  className="w-32 h-32 rounded-2xl border-4 border-white shadow-xl object-fill object-center transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-32 h-32 rounded-2xl border-4 border-white shadow-xl bg-gray-200 flex items-center justify-center">
                  <FiUser className="text-gray-500 text-5xl" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="sm:pl-12 pt-20 pb-8 px-4 sm:px-8">
          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {user?.first_name} {user?.last_name}
            </h1>
            <div className="flex items-center text-gray-500 mt-1">
              <MdEmail className="mr-2" />
              <span>{user?.email}</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 sm:mb-8">
            <div className="bg-gray-50 px-2 pt-1 sm:p-4 rounded-xl">
              <div className="flex items-center text-gray-500 mb-1">
                <MdPhone className="mr-2" />
                <h3 className="text-sm font-medium">Phone</h3>
              </div>
              <p className="sm:text-lg font-semibold text-gray-800 ml-6">
                {user?.phone_number || "Not provided"}
              </p>
            </div>

            <div className="bg-gray-50 px-2 pt-1 sm:p-4 rounded-xl">
              <div className="flex items-center text-gray-500 mb-1">
                <MdCalendarToday className="mr-2" />
                <h3 className="text-sm font-medium">Member Since</h3>
              </div>
              <p className="text-lg font-semibold text-gray-800 ml-6">
                {new Date(user?.date_joined).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-gray-50 px-2 pt-1 sm:p-4 rounded-xl md:col-span-2">
              <div className="flex items-center text-gray-500 mb-1">
                <MdLocationOn className="mr-2" />
                <h3 className="text-sm font-medium">Address</h3>
              </div>
              <p className="text-lg font-semibold text-gray-800 ml-6">
                {user?.address || "Not provided"}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 mb-4 sm:mt-0 flex flex-row gap-4 flex-wrap sm:flex-nowrap">
            <button
              onClick={() => navigate("edit")}
              className="flex-1 px-2 py-2 border cursor-pointer border-gray-300 text-gray-700 sm:font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FiEdit2 className="text-lg" />
              Edit <span className="hidden sm:inline">Profile</span>
            </button>

            <button
              onClick={() => navigate("/dashboard/passwordChange")}
              className="flex-1 px-2 py-2 border cursor-pointer border-gray-300 text-gray-700 sm:font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FiKey className="text-lg" />
              Change <span className="hidden sm:inline">Password</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
