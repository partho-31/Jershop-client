import useCategoryContext from "../../../hooks/useCategoryContext";

import {
  FiChevronDown,
  FiDollarSign,
  FiFilter,
  FiSearch,
  FiTag,
  FiX,
} from "react-icons/fi";

const ProductSearch = ({
  showMobileFilters,
  handleMobileFilter,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  searchByCategory,
  setSearchByCategory,
  searchByKeyword,
  setSearchByKeyword,
  ordering,
  setOrdering,
}) => {
  const { categories } = useCategoryContext();

  const orderingOptions = [
    { option: "Newest First", value: "-created_at" },
    { option: "Oldest First", value: "created_at" },
    { option: "Price: High to Low", value: "-price" },
    { option: "Price: Low to High", value: "price" },
    { option: "Discount: High to Low", value: "-discount" },
    { option: "Discount: Low to High", value: "discount" },
  ];

  const clearFiltering = () => {
    setSearchByCategory(""),
      setSearchByKeyword(""),
      setOrdering(""),
      setMaxPrice(3000),
      setMinPrice(0);
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
              onClick={clearFiltering}
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
                <option value=""> All Categoris</option>
                {categories.map((category, index) => (
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

            {/* Numeric Inputs */}
            <div className="flex items-center gap-3 mb-3">
              <input
                type="number"
                min={0}
                max={maxPrice}
                value={minPrice}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setMinPrice(value <= maxPrice ? value : maxPrice);
                }}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Min"
              />
              <span className="text-gray-400">—</span>
              <input
                type="number"
                min={minPrice}
                max={3000}
                value={maxPrice}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setMaxPrice(value >= minPrice ? value : minPrice);
                }}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Max"
              />
            </div>

            {/* Range Slider */}
            <div className="px-2">
              <input
                type="range"
                min={0}
                max={3000}
                step={50}
                value={maxPrice}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= minPrice) setMaxPrice(value);
                }}
                className="w-full h-1.5 bg-blue-100 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Sorting */}
          <div className="relative w-full sm:w-56 mb-8">
            <select
              className="w-full p-2 pl-3 pr-8 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white transition-all"
              value={ordering}
              onChange={(e) => setOrdering(e.target.value)}
            >
              <option>Select Order</option>
              {orderingOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.option}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
