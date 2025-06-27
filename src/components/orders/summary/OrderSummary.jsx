import { Link } from "react-router";
import useCartContext from "../../../hooks/useCartContext";
import AuthAPiClient from "../../../services/AuthApiClient";
import { useState } from "react";

const OrderSummary = () => {
  const { cart } = useCartContext();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    const total = cart?.total_amount + 20;
    setLoading(true);
    try {
      const response = await AuthAPiClient.post("/api/payment/initiate/", {
        total_amount: total,
      });
      if (response.data.payment_url) {
        window.location.href = response.data.payment_url;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
  };

  return (
    <div className="md:w-1/3">
      <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
        <h2 className="text-lg font-light mb-4">Order Summary</h2>
        <div className="space-y-3 border-b border-[#e8e8e3] pb-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span>{cart?.total_amount || 0}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tax</span>
            <span>$20.00</span>
          </div>
        </div>
        <div className="flex justify-between py-4 font-medium">
          <span>Total</span>
          <span>${cart?.total_amount + 20}</span>
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-[#33332d] text-white py-3 rounded hover:bg-opacity-90 transition"
        >
          {loading ? "Checking..." : "Checkout"}
        </button>
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            or{" "}
            <Link to="products">
              <p className="underline">continue shopping</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
