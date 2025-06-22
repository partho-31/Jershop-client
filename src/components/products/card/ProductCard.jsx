import { FaTag } from "react-icons/fa";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-64 mx-10 my-5">
        <figure className="px-4 pt-4 relative">
          <img
            src={product.images.image}
            alt="Basketball Jersey"
            className="rounded-xl h-48 w-full object-cover"
          />
          <div className=" absolute top-6 right-6 border-none">
            <span className="bg-red-200 text-red-800 text-xs font-semibold ml-3 px-2 py-0.5 rounded-full">
              <FaTag className="inline mr-1" /> {product?.discount}% OFF
            </span>
          </div>
        </figure>
        <div className="card-body pt-2 pb-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-center text-gray-700 bg-gray-100 rounded-full mb-4">
            {product?.category?.name} • Player Edition
          </span>
          <h3 className="card-title text-lg font-semibold">{product.name}</h3>
          <div className="flex items-center mb-1">
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
          <div className="mt-1 flex justify-between items-center">
            <div className="flex items-center mb-6">
              <p className="text-2xl font-extrabold text-gray-900">
                BDT {product.final_price}
              </p>
              <span className="ml-2 text-md text-gray-500 line-through">
                BDT {product.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
