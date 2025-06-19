import { FaSearch } from "react-icons/fa";

const ProductSearch = () => {
  return (
    <div className="w-3/4 mx-auto m-6 px-4 font-sans">
      <form className="flex flex-col sm:flex-row gap-3" >
        {/* Category Dropdown */}
        <select
          name="category"
          className="flex-1  px-3 py-2 border border-gray-300 rounded-md text-base"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home & Garden</option>
          <option value="books">Books</option>
          <option value="sports">Sports & Outdoors</option>
        </select>

        {/* Product Name Input */}
        <input
          type="text"
          name="product"
          placeholder="Search by product name"
          className="flex-2 w-full px-3 py-2 border border-gray-300 rounded-md text-base"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-base"
        >
          <FaSearch />
          Search
        </button>
      </form>
    </div>
  );
};

export default ProductSearch;