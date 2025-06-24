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



const ProductDetails = ({ product }) => {
  const {addCartItems, loading} = useCartContext()

  return (
    <div className="lg:w-1/2">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product?.name}
            </h1>
            <div className="flex items-center mb-1">
              {[...Array(5)].map((_, i) =>
                i < product?.ratings ? (
                  <RiStarFill key={i} className="text-yellow-400" />
                ) : (
                  <RiStarLine key={i} className="text-gray-300" />
                )
              )}
              <span className="text-gray-600 text-sm font-medium">
                {product?.ratings} (42 reviews)
              </span>
            </div>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center">
            <FaCheckCircle className="mr-1" /> In Stock
          </span>
        </div>

        <div className="mb-6">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-gray-900">BDT {product?.final_price}</span>
            <span className="text-lg text-gray-500 line-through ml-2">
               {product?.price}
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-semibold ml-3 px-2 py-0.5 rounded-full">
              <FaTag className="inline mr-1" /> {product?.discount}% OFF
            </span>
          </div>
          <div className="text-sm text-green-600 mt-1 flex items-center">
            <FaInfoCircle className="mr-1" /> Extra 5% off on card payments
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <FaAlignLeft className="mr-2 text-blue-500" /> Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
           {product?.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              <FaBox className="inline mr-1" /> Category
            </h3>
            <p className="text-gray-800 font-medium mt-1">{product?.category.name}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              <FaWarehouse className="inline mr-1" /> Availability
            </h3>
            <p className="text-gray-800 font-medium mt-1">{product?.stock} in stock</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <label
              htmlFor="quantity"
              className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1"
            >
              <FaHashtag className="inline mr-1" /> Quantity
            </label>
            <div className="flex border  border-gray-300 rounded-lg overflow-hidden w-2/4">
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">
                <FaMinus className="text-gray-600" />
              </button>
              {/* <input
                type="number"
                id="quantity"
                value="1"
                min="1"
                max="45"
                className="w-12 text-center border-0 focus:ring-0 bg-white"
              /> */}1
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">
                <FaPlus className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              <FaCalendarAlt className="inline mr-1" /> Added On
            </h3>
            <p className="text-gray-800 font-medium mt-1">June 14, 2023</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
            <FaBolt className="mr-2" /> Buy Now
          </button>
          <button onClick={() => {
                addCartItems(product.id, 1);
              }}
              disabled={loading} className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
            <FaShoppingCart className="mr-2" /> Add to Cart
          </button>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <FaShieldAlt className="text-blue-400 mr-2 w-4 h-4" />
              <span>2 Year Manufacturer Warranty</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <FaTruck className="text-blue-400 mr-2 w-4 h-4" />
              <span>Free & Fast Delivery on orders over $50</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <FaUndo className="text-blue-400 mr-2 w-4 h-4" />
              <span>30-day Hassle-free Returns</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <FaCreditCard className="text-blue-400 mr-2 w-4 h-4" />
              <span>Secure Payment Options</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
