import { FaTag } from "react-icons/fa";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div  className="card bg-white shadow-md hover:shadow-lg hover:border-blue-400 transition-shadow duration-300 flex-shrink-0 w-full h-[270px] rounded-xl border border-gray-100 relative">
        <figure className="h-36 w-full overflow-hidden rounded-t-xl">
          <img
            src={product?.images?.at(-1)?.image}
            alt="Product"
            className="h-full w-full object-cover"
          />
          {product?.discount > 0 && (
            <div className="absolute top-3 right-3">
              <span className="bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                <FaTag className="text-sm" /> {product?.discount}% OFF
              </span>
            </div>
          )}
        </figure>

        <div className="card-body p-3 flex flex-col justify-between h-[calc(100%-144px)]">
          {/* Title with fixed height */}
          <h3 className="card-title text-gray-800 font-medium text-base leading-snug h-[40px] overflow-hidden line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) =>
                i < product.ratings ? (
                  <RiStarFill key={i} className="text-yellow-600 w-4 h-4" />
                ) : (
                  <RiStarLine key={i} className="text-gray-300 w-4 h-4" />
                )
              )}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product?.reviews?.length || 0})
            </span>
          </div>

          {/* Price Section */}
          <div className="mt-auto pt-3 flex justify-between items-center">
            <p className="text-xl font-bold text-blue-400">
              BDT {product.final_price}
            </p>
            <span className="text-sm text-gray-400 line-through">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
