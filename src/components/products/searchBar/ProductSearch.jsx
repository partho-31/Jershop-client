
import useCategoryContext from "../../../hooks/useCategoryContext";
import { useState } from "react";
import useProductsContext from "../../../hooks/useProductsContext";
import { FiChevronDown, FiDollarSign, FiFilter, FiSearch, FiTag, FiX } from "react-icons/fi";


const ProductSearch = ({showMobileFilters,handleMobileFilter}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [sortOption, setSortOption] = useState("");


  const { categories } = useCategoryContext();
  const {searchByCategory,setSearchByCategory,searchByKeyword,setSearchByKeyword,} = useProductsContext()

   const clearFilters = () => {
    setSortOption("");
  };

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <button
          onClick={() => handleMobileFilter(!showMobileFilters)}
          className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <FiFilter /> Filters
        </button>
      </div>

      <div
        className={`${
          showMobileFilters ? "block" : "hidden"
        } md:block w-full md:w-64 lg:w-72 space-y-6`}
      >
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              <FiFilter className="text-gray-500" /> Filters
            </h2>
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Clear all
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={searchByKeyword}
                onChange={(e) => setSearchByKeyword(e.target.value)}
              />
              {searchByKeyword && (
                <button
                  onClick={() => setSearchByKeyword("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FiX />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
              <FiTag className="text-gray-500" /> Category
            </h3>
            <div className="relative">
              <select
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8 bg-white transition-all"
                value={searchByCategory}
                onChange={(e) => setSearchByCategory(e.target.value)}
              >
                <option value="" >{" "}All Categoris</option>
                {categories.map((category,index) => (
                  <option key={index} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
              <FiDollarSign className="text-gray-500" /> Price Range
            </h3>
            <div className="flex items-center gap-3 mb-3">
              <input
                type="number"
                min="0"
                max={maxPrice}
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Min"
              />
              <span className="text-gray-400">—</span>
              <input
                type="number"
                min={minPrice}
                max="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Max"
              />
            </div>
            <div className="px-2">
              <input
                type="range"
                min="0"
                max="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-blue-100 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Sorting */}
            <div className="relative w-full sm:w-56 mb-8">
            <select
              className="w-full p-2 pl-3 pr-8 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white transition-all"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
            <option>Newest First</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
