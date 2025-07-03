import { FaPlus, FaUsers, FaTshirt, FaClock } from "react-icons/fa";
import { Link } from "react-router";

const Actions = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-16 w-3/4 mx-auto">
      <Link to="products/add">
        {" "}
        <button className="bg-white rounded-lg shadow-md p-4 w-full flex flex-col items-center hover:bg-gray-100 transition-colors">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
            <FaPlus className="text-lg" />
          </div>
          <span className="text-sm font-medium text-gray-700">Add Product</span>
        </button>
      </Link>

      <Link to="addCategory">
        {" "}
        <button className="bg-white rounded-lg w-full shadow-md p-4 flex flex-col items-center hover:bg-gray-100 transition-colors">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-2">
            <FaPlus className="text-lg" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            Add Category
          </span>
        </button>
      </Link>

      <Link to="orders">
        {" "}
        <button className="bg-white rounded-lg w-full shadow-md p-4 flex flex-col items-center hover:bg-gray-100 transition-colors">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mb-2">
            <FaClock className="text-lg" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            Order History
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Actions;
