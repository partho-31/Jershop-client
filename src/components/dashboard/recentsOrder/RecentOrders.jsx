import {
  FiPackage,
  FiUser,
  FiPhone,
  FiDollarSign,
  FiChevronRight,
} from "react-icons/fi";
import { BsCheckCircle, BsTruck, BsClockHistory } from "react-icons/bs";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const RecentOrders = () => {
  const orders = [
    {
      id: "JER-1001",
      customer: "Alex Morgan",
      product: "Home Jersey 2023",
      phone: "(555) 123-4567",
      amount: 89.99,
      status: "shipped",
      date: "2023-06-15",
    },
    {
      id: "JER-1002",
      customer: "Jamie Smith",
      product: "Away Jersey 2023",
      phone: "(555) 987-6543",
      amount: 79.99,
      status: "processing",
      date: "2023-06-14",
    },
    {
      id: "JER-1003",
      customer: "Taylor Johnson",
      product: "Training Kit",
      phone: "(555) 456-7890",
      amount: 59.99,
      status: "delivered",
      date: "2023-06-12",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "shipped":
        return <BsTruck className="text-blue-500" />;
      case "delivered":
        return <BsCheckCircle className="text-green-500" />;
      case "processing":
        return <BsClockHistory className="text-yellow-500" />;
      default:
        return <BsClockHistory className="text-gray-500" />;
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
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden w-4/5 mx-auto my-16">
      <div className="px-6 py-4 border-b bg-gray-200 border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
        <span className="text-sm text-gray-500">Last 7 days</span>
      </div>

      <div className="divide-y divide-gray-300">
        {orders.map((order) => (
          <div
            key={order.id}
            className="px-6 py-5 hover:bg-gray-100 transition-colors duration-150"
          >
            <div className="grid  md:grid-cols-12 gap-4 items-center">
              <div className="col-span-3 flex items-center space-x-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <FiPackage className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{order.id}</p>
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
                  <p className="font-medium text-gray-800">{order.customer}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiPhone size={14} className="mr-1" />
                    {order.phone}
                  </div>
                </div>
              </div>

              <div className="col-span-3 flex items-center space-x-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <FaBangladeshiTakaSign className="text-green-600" size={18} />
                </div>
                <div>
                  <p className="font-medium">{order.amount}</p>
                  <p className="text-xs text-gray-500">{order.date}</p>
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
          Showing {orders.length} of 24 orders
        </span>
        <a
          href="#"
          className="inline-flex text-xs items-center text-blue-600 hover:text-blue-800 md:font-medium"
        >
          View all orders
          <FiChevronRight  size={18} />
        </a>
      </div>
    </div>
  );
};

export default RecentOrders;
