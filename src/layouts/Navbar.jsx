import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import useCartContext from "../hooks/useCartContext";
import { IoCartOutline, IoFootball } from "react-icons/io5";

const Navbar = () => {
  const { user,logOut } = useAuthContext();
  const { cart, createOrGetCart } = useCartContext();

  return (
    <div className="navbar sticky top-0 z-30 bg-white shadow-lg  sm:px-8 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="hover:text-blue-400">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="products">Products</Link>
            </li>

            <li className="hover:text-blue-400">
              <Link to="about-us">About Us</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="-ml-3 sm:m-0 text-center flex items-center justify-center text-lg font-bold text-blue-400">
          <span className="text-3xl">G</span>
          <IoFootball size={40} /> <span className="text-3xl">lazo!</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex py-1">
        <ul className="menu menu-horizontal font-semibold px-1">
          <li className="hover:text-blue-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to="products">Products</Link>
          </li>

          <li className="hover:text-blue-400">
            <Link to="about-us">About Us</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to="contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      {!user ? (
        <div className="navbar-end space-x-1">
          <Link to="login">
            <button className="flex items-center text-md gap-1 px-2 py-1 text-black/70 rounded-lg hover:bg-gray-300 transition duration-200">
              <FaSignInAlt />
              <span className="hidden sm:inline"> Login</span>
            </button>
          </Link>
          <Link to="registration">
            <button className="flex items-center text-md gap-1 px-2 py-1 text-black/70 rounded-lg hover:bg-gray-300 transition duration-200">
              <FaUserPlus />
              <span className="hidden sm:inline"> SignUp</span>
            </button>
          </Link>
        </div>
      ) : (
        <div className="navbar-end flex gap-2 items-center">
          {/* Cart Dropdown */}
          <div className="dropdown dropdown-end h-10 w-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-gray-200 btn-circle"
            >
              <div className="indicator text-blue-400">
                <IoCartOutline className="h-5 w-5" />
                <span className="badge badge-xs border-0 bg-gray-300 text-blue-400 indicator-item">
                  {cart?.total_items || 0}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  Items: {cart?.total_items || 0}
                </span>
                <span className="text-info">
                  Subtotal: {cart?.total_amount || 0}
                </span>
                <Link to="/cart">
                  <div className="card-actions">
                    <button
                      className="btn btn-primary btn-block"
                      onClick={createOrGetCart}
                    >
                      View cart
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* User Avatar Dropdown */}
          <div className="dropdown dropdown-end h-10 w-10">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 border border-gray-400 rounded-full">
                <img
                  alt="User avatar"
                  src={`https://res.cloudinary.com/dvyz3blnz/${user.image}`}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link to="dashboard">
                <li>
                  <button className="justify-between">Dashboard</button>
                </li>{" "}
              </Link>
              
              <li>
                <button onClick={logOut}>Sign Out</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
