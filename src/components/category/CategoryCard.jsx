import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`products?category=${category.id}`}>
      <div
        className="relative group h-60 sm:h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 max-w-xs mx-auto border border-gray-200"
        data-aos="flip-left"
        data-aos-delay="100"
      >
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-fill transition-transform duration-700 group-hover:scale-110 z-0"
        />

    
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm flex items-center gap-1 z-20">
          <FaShoppingCart className="text-blue-500 text-xs" />
          <span>{category.total_product}+ Products</span>
        </div>

        {/* Content a */}
        <div className="relative z-30 flex flex-col justify-end h-full p-4 text-white">
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-1">{category.name}</h3>
            <p className="text-sm text-gray-200 line-clamp-2">{category.description}</p>
          </div>
          <button className="flex items-center gap-2 bg-white text-blue-600 hover:text-blue-700 text-sm font-semibold px-4 py-2 rounded-full shadow-sm transition-all duration-300 group-hover:gap-3 w-max">
            <span>Shop Now</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
