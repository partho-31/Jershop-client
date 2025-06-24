import { RiStarFill, RiStarLine } from "react-icons/ri";

const LatestProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
      <div className="flex flex-col md:flex-row">
        {/* Product Image - Takes full height on desktop */}
        <div className="md:w-1/2 h-80 md:h-auto overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <img
            src={product?.images}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Product Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            {/* Category Tag */}
            <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full mb-4">
              {product?.category?.name} • Player Edition
            </span>

            {/* Product Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {product.name}
            </h3>

            {/* Star Rating */}
            <div className="flex items-center mb-4">
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
                ({product.reviewCount || "0"} reviews)
              </span>
            </div>

            {/* Product Description - You might want to add this */}
            <p className="text-gray-600 mb-6">
              Premium quality jersey with moisture-wicking fabric and
              embroidered logos.
            </p>
          </div>

          {/* Price and CTA */}
          <div>
            <div className="flex items-center mb-6">
              <p className="text-3xl font-extrabold text-gray-900">
                BDT {product.final_price}
              </p>

              <span className="ml-2 text-lg text-gray-500 line-through">
                BDT {product.price}
              </span>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 py-3 px-6 rounded-lg bg-gray-900 text-white font-bold hover:bg-gray-800 transition duration-200 flex items-center justify-center">
                <span>Add to Cart</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProductCard;
