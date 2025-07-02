import { FaTag } from "react-icons/fa";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  
  return (
    <Link to={`/products/${product.id}`}>
      <div className="card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-56">
        <figure className=" ">
          <img
            src={product.images.image}
            alt="Basketball Jersey"
            className="rounded-xl h-32 w-full object-cover"
          />
          <div className=" absolute top-3 right-3 border-none">
            <span className="bg-red-200 text-orange-500 text-xs font-semibold px-1.5  py-0.5 rounded-full">
              <FaTag className="inline text-xs" /> {product?.discount}% OFF
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
                ({product?.reviews?.length || "0"})
              </span>
            </div>
          <div className="mt-1 flex justify-between items-center">
            <div className="flex items-center mb-0">
              <p className="text-2xl font-extrabold text-gray-900">
                BDT {product.final_price}
              </p>
              <span className="ml-2 text-md text-gray-500 line-through">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
