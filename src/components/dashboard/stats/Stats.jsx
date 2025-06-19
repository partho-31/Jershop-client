import {  FaDollarSign, FaShoppingCart, FaTshirt} from 'react-icons/fa';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { FiPackage } from 'react-icons/fi';

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10 mt-10 mb-4">
      <div className="bg-gray-100 rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
            <FaBangladeshiTakaSign className="text-xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Today's Sales</p>
            <p className="text-2xl font-bold">BDT 1,245</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
            <FaShoppingCart className="text-xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Weekly Sales</p>
            <p className="text-2xl font-bold">BDT 8,450</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
            <FiPackage className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Orders</p>
            <p className="text-2xl font-bold">24</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
            <FaTshirt className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Jerseys</p>
            <p className="text-2xl font-bold">319</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Stats;
