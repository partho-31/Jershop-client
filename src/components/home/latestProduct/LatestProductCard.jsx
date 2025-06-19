import { RiStarFill, RiStarLine } from "react-icons/ri";


const LatestProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 shadow-lg shadow-gray-400 rounded-md mx-auto">
      {/* Image ( */}
      <div className="w-full h-56 overflow-hidden rounded-xl">
        <img
          src={product.images.image}
          alt="Product"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="text-center space-y-1 w-full">
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">Home Jersey • Player Edition</p>

        {/* Star Rating (manual) */}
        <div className="flex justify-center items-center text-yellow-400 text-2xl">
          {[...Array(5)].map((_,i) =>
              i < product.ratings ? (
                <RiStarFill key={i} className="text-yellow-400" />
              ) : (
                <RiStarLine key={i} className="text-gray-300" />
              )
            )}
        </div>

        {/* Price and CTA */}
        <div className="pb-2">
          <p className="text-xl font-extrabold text-gray-900 mb-3">
            BDT {product.final_price}
          </p>
          <button className="w-full py-1  rounded-full bg-transparent border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition duration-200">
            Quick Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestProductCard;
