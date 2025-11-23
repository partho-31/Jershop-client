import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  return (
    <div className="text-center mb-8 flex justify-center items-center h-lvh">
      <div>
        <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
          <FaCheckCircle className="text-4xl text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 ">Order Confirmed!</h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Your order has been placed successfully.
        </p>

        {/* CTA Button  */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center"
          >
            Back to Home
          </a>
          <a
            href="/dashboard/orders"
            className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center"
          >
            View Order History
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
