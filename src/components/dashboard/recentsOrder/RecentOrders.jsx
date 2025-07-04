import {
  FiPackage,
  FiUser,
  FiPhone,
  FiDollarSign,
  FiChevronRight,
} from "react-icons/fi";
import { BsCheckCircle, BsTruck, BsClockHistory } from "react-icons/bs";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useAuthContext from "../../../hooks/useAuthContext";
import { Link } from "react-router";

const RecentOrders = () => {
  const { orders,user } = useAuthContext();

  const getStatusIcon = (status) => {
    switch (status) {
      case "shipped":
        return <BsTruck className="text-blue-500" />;
      case "delivered":
        return <BsCheckCircle className="text-green-500" />;
      case "processing":
        return <BsClockHistory className="text-yellow-500" />;
      default:
        return <BsClockHistory className="text-orange-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-orange-800";
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden w-4/5 mx-auto my-16">
      <div className="px-6 py-4 border-b bg-gray-200 border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
        <span className="text-sm text-gray-500">Last 7 days</span>
      </div>

      <div className="divide-y divide-gray-300">
        {orders.slice(0, 3).map((order, index) => (
          <div
            key={index}
            className="px-6 py-5 hover:bg-gray-100 transition-colors duration-150"
          >
            <div className="grid  md:grid-cols-12 gap-4 items-center">
              <div className="col-span-3 flex items-center space-x-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <FiPackage className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {order.id.slice(0, 8)}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {order.product}
                  </p>
                </div>
              </div>

              <div className="col-span-3 flex items-center space-x-2">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <FiUser className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {order.user.first_name}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiPhone size={14} className="mr-1" />
                    {order.user.phone_number}
                  </div>
                </div>
              </div>

              <div className="col-span-3 flex items-center space-x-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <FaBangladeshiTakaSign className="text-green-600" size={18} />
                </div>
                <div>
                  <p className="font-medium">{order.total_amount}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="col-span-2">
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    order.status
                  )}`}
                >
                  {getStatusIcon(order.status)}
                  <span className="ml-2 capitalize">{order.status}</span>
                </div>
              </div>

              <div className="col-span-1 ">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <FiChevronRight className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-3  flex justify-between items-center">
        <span className="text-xs md:text-sm text-gray-500">
         {user?.is_staff ? `Showing 3 of ${orders?.length} orders` : "Partial view of all entries."} 
        </span>

        <Link to="orders">
          <div className="inline-flex text-xs items-center text-blue-600 hover:text-blue-800 md:font-medium">
            View all orders
            <FiChevronRight size={18} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecentOrders;
