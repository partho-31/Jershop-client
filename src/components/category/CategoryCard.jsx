import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`products`}>
      <div
        className="relative group h-60 sm:h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 max-w-xs mx-auto border border-gray-200"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-fill transition-transform duration-700 group-hover:scale-110 z-0"
        />

        <div className="absolute inset-0 bg-black/35 z-10"></div>

        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm flex items-center gap-1 z-20">
          <FaShoppingCart className="text-blue-500 text-xs" />
          <span>{category.total_product}+ Products</span>
        </div>

        {/* Content a */}
        <div className="relative z-30 flex flex-col justify-end h-full p-4 text-white">
          <button className="flex items-center gap-2 border bg-white/20 font-bold border-gray-300 text-gray-200 hover:text-blue-400 text-sm  px-4 py-2 rounded-full shadow-sm transition-all duration-300 group-hover:gap-3 w-max">
            <span>{category.name}</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
