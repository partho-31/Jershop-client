import { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import SideBar from "../components/dashboard/Menu/SideBar";
import { IoCartOutline, IoFootball } from "react-icons/io5";
import useAuthContext from "../hooks/useAuthContext";
import useCartContext from "../hooks/useCartContext";
import { Link, Links } from "react-router";

const DashNav = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { user, logOut } = useAuthContext();
  const { cart, createOrGetCart } = useCartContext();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth < 640 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen sticky top-0 overflow-hidden">
      {/* Mobile sidebar toggle button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="sm:hidden fixed top-5 left-4 z-50 bg-blue-400 text-white p-2 rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Fixed Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed sm:static z-40 w-64 h-full bg-white shadow-lg transform transition-transform duration-300
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
          }`}
      >
        <div className="p-4 text-center shadow-lg flex items-center justify-center  text-md font-bold text-blue-400">
          <span className="text-3xl">G</span>
          <IoFootball size={40} /> <span className="text-3xl">lazo!</span>
        </div>

        {/* Sidebar Section */}
        <SideBar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Navbar */}
        <header className="bg-white shadow-sm py-1 z-30">
          <div className="px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl ps-10 font-semibold">Dashboard</h1>
            <div className="navbar-end flex gap-2 items-center">
              {/* Cart Dropdown */}
              <div className="dropdown dropdown-end h-10 w-10">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost bg-gray-200 btn-circle"
                >
                  <div className="indicator">
                    <IoCartOutline className="h-5 w-5" />
                    <span className="badge badge-xs border-0 bg-gray-300 indicator-item">
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
              <Link to="/">
                <li>
                  <button className="justify-between">Home</button>
                </li>{" "}
              </Link>
              
              <li>
                <button onClick={logOut}>Sign Out</button>
              </li>
            </ul>
          </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-auto p-4 bg-gray-100">
          {children || (
            <>
              <h2 className="text-xl font-semibold mb-4">Welcome Back!</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white p-4 rounded-lg shadow">
                    Widget {item}
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashNav;
