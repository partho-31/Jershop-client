import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import useCartContext from "../../hooks/useCartContext";
import { toast } from "react-toastify";

const CartItem = () => {
  const { cartItems, deleteCartItem, loading } = useCartContext();

  const deleteItem = async (id) => {
    const response = await deleteCartItem(id);
    if (response.success) {
      toast.success(response.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="md:w-2/3">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-light">
          Your Cart ({cartItems?.length} items)
        </h2>
        <button className="text-sm text-red-400 underline">Remove all</button>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="cart-item bg-white pr-5 rounded-lg shadow-md flex flex-col items-center sm:flex-row gap-6 transition-all duration-200 hover:-translate-y-1"
          >
            <div className="w-full sm:w-32 h-32 bg-[#e8e8e3] flex items-center justify-center">
              <img
                src="https://placehold.co/300x300/e8e8e3/33332d?text=Product"
                alt="Product"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 ms-3">
              <div className="flex justify-between">
                <h3 className="font-medium">{item.product.name}</h3>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="ml-auto text-red-400 hover:text-red-500"
                >
                  {loading ? (
                    <span className="loading loading-spinner text-error"></span>
                  ) : (
                    <FaTrashAlt />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <button className="border border-[#e8e8e3] w-8 h-8 flex items-center justify-center">
                    <FaMinus className="text-xs" />
                  </button>
                  <span className="mx-4">{item.quantity}</span>
                  <button className="border border-[#e8e8e3] w-8 h-8 flex items-center justify-center">
                    <FaPlus className="text-xs" />
                  </button>
                </div>
                <p className="font-medium ">${item.total_cost.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
