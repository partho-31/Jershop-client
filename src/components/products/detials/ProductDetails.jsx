import {
  FaAlignLeft,
  FaBolt,
  FaBox,
  FaCalendarAlt,
  FaCheckCircle,
  FaCreditCard,
  FaHashtag,
  FaInfoCircle,
  FaMinus,
  FaPlus,
  FaShieldAlt,
  FaShoppingCart,
  FaTag,
  FaTruck,
  FaUndo,
  FaWarehouse,
} from "react-icons/fa";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import useCartContext from "../../../hooks/useCartContext";
import { toast } from "react-toastify";

const ProductDetails = ({ product, rating }) => {
  const { addCartItems, loading } = useCartContext();

  const handleAddToCart = async (id, quantity) => {
    const response = await addCartItems(id, quantity);
    if (response.success) {
      toast.success("Item added to the cart!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden p-4 sm:p-6 hover:shadow-md transition duration-300">
        {/* Title & Rating */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-gray-900 mb-1">{product?.name}</h1>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) =>
                i < product?.ratings ? (
                  <RiStarFill key={i} className="text-yellow-400" />
                ) : (
                  <RiStarLine key={i} className="text-gray-300" />
                )
              )}
              <span className="text-gray-600 text-sm">({rating} reviews)</span>
            </div>
          </div>
          <span className="bg-green-100 text-green-800 hidden text-xs font-semibold px-3 py-1 rounded-full sm:flex items-center mt-2 sm:mt-0">
            <FaCheckCircle className="mr-1" /> <span>In Stock</span>
          </span>
        </div>

        {/* Price Section */}
        <div className="mb-3">
          <div className="flex flex-wrap items-center text-xl sm:text-2xl font-semibold text-gray-900 gap-3">
            <span>BDT {product?.final_price}</span>
            <span className="text-gray-500 line-through text-base">
              {product?.price}
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full text-center flex items-center">
              <FaTag className="mr-1" /> {product?.discount}% OFF
            </span>
          </div>
          <p className="text-sm text-green-600 mt-1 flex items-center">
            <FaInfoCircle className="mr-1" /> Extra 5% off on card payments
          </p>
        </div>

        {/* Description */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-2">
            <FaAlignLeft className="mr-2 text-blue-500" /> Description
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {product?.description}
          </p>
        </div>

        {/* Grid Info */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              <FaBox className="inline mr-1" /> Category
            </h3>
            <p className="text-gray-800 font-medium mt-1">
              {product?.category?.name}
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-xs  text-gray-500 uppercase tracking-wider">
              <FaWarehouse className="inline mr-1" />Remaining
            </h3>
            <p className="text-gray-800 font-medium mt-1">
              {product?.remaining} in pices
            </p>
          </div>

          {/* Quantity */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <label
              htmlFor="quantity"
              className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1"
            >
              <FaHashtag className="inline mr-1" /> Quantity
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-max">
              <button className=" py-1 bg-gray-100 hover:bg-gray-200 transition-colors">
                <FaMinus className="text-gray-600" />
              </button>
              <span className="px-4 text-gray-700">1</span>
              <button className=" py-1 bg-gray-100 hover:bg-gray-200 transition-colors">
                <FaPlus className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              <FaCalendarAlt className="inline mr-1" /> Added On
            </h3>
            <p className="text-gray-800 text-sm mt-1">{new Date(product?.created_at).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Buy/Add Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-6">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
            <FaBolt className="mr-2" /> Buy Now
          </button>
          <button
            onClick={() => handleAddToCart(product.id, 1)}
            disabled={loading}
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
          >
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <span className="flex items-center">
                <FaShoppingCart className="mr-2" /> Add to Cart
              </span>
            )}
          </button>
        </div>

        {/* Extra Info */}
        <div className="border-t border-gray-200 pt-4">
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-gray-600">
              <FaShieldAlt className="text-blue-400 mr-2" />
              <span>2 Year Manufacturer Warranty</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaTruck className="text-blue-400 mr-2" />
              <span>Free & Fast Delivery on orders over $50</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaUndo className="text-blue-400 mr-2" />
              <span>30-day Hassle-free Returns</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaCreditCard className="text-blue-400 mr-2" />
              <span>Secure Payment Options</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
