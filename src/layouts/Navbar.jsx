import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import useFetchCart from "../hooks/useFetchCart";

const Navbar = () => {
  const { user } = useAuthContext();
  const {createOrGetCart,cart} = useFetchCart()
    
  return (
    <div className="navbar bg-white py-4 shadow-lg  sm:px-8 ">
      <div className="navbar-start py-1">
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="products">Products</Link>
            </li>

            <li>
              <Link to="about-us">About Us</Link>
            </li>
            <li>
              <Link to="contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <p className=" text-gray-700 text-lg lg:text-2xl font-bold lg:ml-5">
          JerseyBari
        </p>
      </div>
      <div className="navbar-center hidden lg:flex py-1">
        <ul className="menu menu-horizontal font-semibold px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>

          <li>
            <Link to="about-us">About Us</Link>
          </li>
          <li>
            <Link to="contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      {!user ? (
        <div className="navbar-end space-x-1">
          <Link to="login">
            <button className="flex items-center text-md gap-1 px-2 py-1 text-black/70 rounded-lg hover:bg-gray-300 transition duration-200">
              <FaSignInAlt />
              Login
            </button>
          </Link>
          <Link to="registration">
            <button className="flex items-center text-md gap-1 px-2 py-1 text-black/70 rounded-lg hover:bg-gray-300 transition duration-200">
              <FaUserPlus />
              SignUp
            </button>
          </Link>
        </div>
      ) : (
        <div className="navbar-end  flex gap-1 md:gap-1">
          <div className="flex-none">
            <div className="dropdown dropdown-end h-12 w-12">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost bg-gray-200 btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-xs border-0 bg-gray-300 indicator-item">
                    {cart?.total_items}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold"> Items: {cart?.total_items}</span>
                  <span className="text-info">Subtotal: {cart?.total_amount}</span>
                  <Link to="cart"><div className="card-actions">
                    <button className="btn btn-primary btn-block" onClick={createOrGetCart}>
                      View cart
                    </button>
                  </div></Link>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar bg-gray-200"
              >
                <div className="w-12 h-12 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={`https://res.cloudinary.com/dvyz3blnz/${user.image}`}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/dashboard" className="justify-between">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
