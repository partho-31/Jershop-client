import { FaTruck, FaBox, FaReceipt } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="bg-white w-1/2 mx-auto rounded-xl shadow-sm overflow-hidden">
      {/* Order Summary */}
      <div className="p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <FaReceipt className="text-gray-500" /> Order Summary
        </h2>

        <div className="space-y-2">
          {/* Order Item */}
          <div className="flex items-start">
            <div className="w-14 h-14 bg-gray-100 rounded-md overflow-hidden mr-4">
              <img
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=200&q=80"
                alt="Linen Shirt"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Linen Shirt</h3>
                  <p className="text-sm text-gray-500">Size: Medium</p>
                </div>
                <p className="font-medium">$89.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="mt-3 pt-3 border-t-3 border-gray-400 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>$218.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="text-blue-600">Free</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax</span>
            <span>$17.44</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-3 mt-3 border-t-3 border-gray-400">
            <span>Total</span>
            <span>$235.44</span>
          </div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="px-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <FaTruck className="text-gray-500" /> Shipping Information
        </h2>
        <div className="bg-gray-200 px-4 py-2 rounded-lg">
          <address className="not-italic text-gray-700">
            <p className="font-medium">John Doe</p>
            <p>1234 Minimal St.</p>
            <p>Dhaka, Bangladesh 1205</p>
          </address>
        </div>
      </div>

      {/* Order Details */}
      <div className="px-8 py-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <FaBox className="text-gray-500" /> Order Details
        </h2>
        <div className="grid grid-cols-2 items-center gap-4">
          <div>
            <p className="text-sm text-gray-500">Order Number</p>
            <span className="font-medium bg-gray-200 px-3 rounded-2xl">#MIN456789</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">Order Date</p>
            <p className="font-medium">June 15, 2025</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Order Status</p>
            <p className="font-medium text-yellow-600">Processing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
