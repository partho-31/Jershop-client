import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import {
  MdSportsBasketball,
  MdSportsHockey,
  MdSportsVolleyball,
} from "react-icons/md";
import { GiSoccerBall } from "react-icons/gi";

const sportsIcons = [
  { name: "Cricket", icon: GiCricketBat },
  { name: "Basketball", icon: MdSportsBasketball },
  { name: "Hockey", icon: MdSportsHockey },
  { name: "Volleyball", icon: MdSportsVolleyball },
  { name: "Football", icon: GiSoccerBall },
];

const CategoryCard = ({ category }) => {
  return (
    <div
      className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100 max-w-xs mx-auto"
      data-aos="flip-left"
      data-aos-delay="100"
    >
      {/* Category image with overlay */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={category.image}
          alt="Image"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Card content */}
      <div className="p-6 relative">
        {/* Icon with background */}
        <div className="absolute -top-6 left-6 bg-blue-500 p-3 rounded-xl shadow-lg text-white group-hover:rotate-12 transition-transform duration-500">
          {sportsIcons.map((icon, index) => {
            const IconComponent = icon.icon;
            return (
              icon.name === category.name && (
                <IconComponent className="text-2xl" key={index} />
              )
            );
          })}
        </div>

        <div className="mt-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            {category.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-800 transition-colors duration-300">
            {category.description}
          </p>

          {/* Button with icon */}
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group-hover:gap-3">
            <span>Shop Now</span>
            <FaArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Badge */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm flex items-center gap-1">
        <FaShoppingCart className="text-blue-500 text-xs" />
        <span>{category.total_product}+ Products</span>
      </div>
    </div>
  );
};

export default CategoryCard;
