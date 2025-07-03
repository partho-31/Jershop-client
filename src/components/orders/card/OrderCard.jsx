import { FaTruck, FaBox, FaReceipt } from "react-icons/fa";

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white w-full max-w-4xl mx-auto rounded-xl shadow-sm overflow-hidden mb-6 px-4 sm:px-6 lg:px-8">
      {/* Order Summary */}
      <div className="py-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <FaReceipt className="text-gray-500" /> Order Summary
        </h2>

        <div className="space-y-4">
          {order?.orderItem?.map((item) => (
            <div className="flex items-start gap-4" key={item.id}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={item.product.images?.[0].image}
                  alt="Product Img"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium mt-1 sm:mt-0">BDT {item.total_cost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Summary */}
        <div className="mt-6 pt-4 border-t border-gray-300 space-y-2">
          <div className="flex justify-between text-sm sm:text-base">
            <span className="text-gray-600">Subtotal</span>
            <span>BDT {order.total_amount}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <span className="text-gray-600">Shipping</span>
            <span className="text-blue-600">Free</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <span className="text-gray-600">Tax</span>
            <span>BDT 20.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-3 mt-3 border-t border-gray-300">
            <span>Total</span>
            <span>BDT {order.total_amount + 20}</span>
          </div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="pb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <FaTruck className="text-gray-500" /> Shipping Information
        </h2>
        <div className="bg-gray-100 px-4 py-3 rounded-lg text-sm sm:text-base">
          <address className="not-italic text-gray-700">
            <p className="font-medium">{order.user.first_name} {order.user.last_name}</p>
            <p>{order.user.address}</p>
            <p>{order.user.phone_number}</p>
          </address>
        </div>
      </div>

      {/* Order Details */}
      <div className="pb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <FaBox className="text-gray-500" /> Order Details
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Order Status</p>
            <p className="font-medium text-yellow-600">{order.status}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Order Date</p>
            <p className="font-medium">{new Date(order.created_at).toLocaleDateString()}</p>
          </div>
        </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Order Number</p>
            <span className="text-xs bg-gray-200 px-3 py-1 rounded-2xl inline-block mt-1">{order.id}</span>
          </div>
      </div>
    </div>
  );
};

export default OrderCard;
