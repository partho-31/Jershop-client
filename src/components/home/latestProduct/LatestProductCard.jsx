import { RiStarFill, RiStarLine } from "react-icons/ri";
import useCartContext from "../../../hooks/useCartContext";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";

const LatestProductCard = ({ product }) => {
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
    <div
      data-aos="fade-right"
      data-aos-delay="300"
      className="w-full max-w-5xl mt-10 mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:-translate-y-1"
    >
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 w-full h-60 md:h-auto relative">
          <img
            src={product?.images?.at(-1)?.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
          />
        </div>

        {/* Product Content */}
        <div className="md:w-1/2 w-full p-4 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            {/* Product Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600 mb-1 sm:mb-3">
              {product.name}
            </h3>

            {/* Star Rating */}
            <div className="flex items-center mb-2 sm:mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) =>
                  i < product.ratings ? (
                    <RiStarFill key={i} className="text-yellow-400 w-5 h-5" />
                  ) : (
                    <RiStarLine key={i} className="text-gray-300 w-5 h-5" />
                  )
                )}
              </div>
              <span className="text-sm text-gray-500">
                ({product?.reviews?.length || "0"} reviews)
              </span>
            </div>

            {/* Product Description */}
            <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-6">
              Premium quality jersey with moisture-wicking fabric and
              embroidered logos. Perfect for loyal fans and collectors.
            </p>
          </div>

          {/* Price and CTA */}
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-500">
                BDT {product.final_price}
              </p>
              <span className="ml-3 text-lg text-gray-400 line-through">
                BDT {product.price}
              </span>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => handleAddToCart(product.id, 1)}
                disabled={loading}
                className="flex-1 bg-blue-400 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProductCard;
