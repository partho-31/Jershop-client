
const OrderSummary = () => {
  return (
    <div className="md:w-1/3">
      <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
        <h2 className="text-lg font-light mb-4">Order Summary</h2>
        <div className="space-y-3 border-b border-[#e8e8e3] pb-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span>$218.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tax</span>
            <span>$17.44</span>
          </div>
        </div>
        <div className="flex justify-between py-4 font-medium">
          <span>Total</span>
          <span>$235.44</span>
        </div>
        <button className="w-full bg-[#33332d] text-white py-3 rounded hover:bg-opacity-90 transition">
          Checkout
        </button>
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            or{" "}
            <a href="#" className="underline">
              continue shopping
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
