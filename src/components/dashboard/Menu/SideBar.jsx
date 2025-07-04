import {
  FaHeadset,
  FaHistory,
  FaHome,
  FaKey,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router";
import useAuthContext from "../../../hooks/useAuthContext";
import { BsEnvelopeArrowDown } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiPackage } from "react-icons/fi";

const SideBar = () => {
  const { logOut, user } = useAuthContext();
  return (
    <div className="w-full py-4  text-black/70 px-5 ">

      <nav className="space-y-2">
        {/* Dashboard  */}
        <Link to="/dashboard">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-400">
            <MdDashboard className="text-lg" />
            <span>Dashboard</span>
          </div>
        </Link>

        {/* Home  */}
        <Link to="/">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-400 ">
            <FaHome className="text-lg" />
            <span>Home</span>
          </div>
        </Link>

        {/* Profile View  */}
        <Link to="profile">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-400">
            <FaUser className="text-lg" />
            <span>Profile</span>
          </div>
        </Link>
        
        {/* Add Category   */}
        {user?.is_staff && (
        <Link to="addCategory">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-400">
            <IoMdAddCircleOutline className="text-xl" />
            <span>Add Categories</span>
          </div>
        </Link>)}

        {/* Add Products   */}
        {user?.is_staff && (
        <Link to="products/add">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-400">
            <IoMdAddCircleOutline className="text-xl" />
            <span>Add Products</span>
          </div>
        </Link>)}

        {/* Orders History  */}
        <Link to="orders">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-400">
            <FiPackage className="text-lg" />
            <span>Orders</span>
          </div>
        </Link>

        {/* Change Password  */}
        <Link to="passwordChange">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-400">
            <FaKey className="text-lg" />
            <span>Change Password</span>
          </div>
        </Link>

        {/* Forgot Password  */}
        <Link to="/forgetPassword">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-400">
            <FaQuestionCircle className="text-lg" />
            <span>Forgot Password</span>
          </div>
        </Link>

        {/* Sign Out  */}
        <div
          onClick={logOut}
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-400"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Sign Out</span>
        </div>

        <div className="pt-6 border-t border-black border-opacity-30 mt-6" />

        {/* Contact Inbox  */}
        {user?.is_staff && (
        <Link to="contact/messages">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-400">
            <BsEnvelopeArrowDown className="text-lg" />
            <span>Messages</span>
          </div>
        </Link>)}

        {/* Support or Help  */}
        <Link to="/contact-us">
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-400">
          <FaHeadset className="text-lg" />
          <span>Support / Help</span>
        </div></Link>
      </nav>
      
    </div>
  );      
};

export default SideBar;