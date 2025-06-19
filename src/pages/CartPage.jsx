import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import OrderSummary from "../components/orders/summary/OrderSummary";
import CartItem from "../components/cart/CartItem";

const CartPage = () => {
  return (
    <div className="bg-gray-100 text-black/60 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 md:p-8 font-[Inter,sans-serif]">
        {/* Main Content */}
        <main className="flex flex-col md:flex-row gap-8">
          {/* Cart Items Section */}
          <CartItem />
          {/* Order Summary */}
          <OrderSummary />,
        </main>
      </div>
    </div>
  );
};

export default CartPage;
