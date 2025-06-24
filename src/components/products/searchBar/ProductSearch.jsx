import { FaSearch } from "react-icons/fa";
import useFetchCategory from "../../../hooks/useFetchCategory";
import useProductsContext from "../../../hooks/useProductsContext";

const ProductSearch = () => {
  const {categories} = useFetchCategory()
  const {setSearchByCategory,setSearchByKeyword,} = useProductsContext()
  return (
    <div className="w-3/4 mx-auto m-6 px-4 font-sans">
      <form className="flex flex-col sm:flex-row gap-3" >
        {/* Category Dropdown */}
        <select
          name="category"
          className="flex-1  px-3 py-2 border border-gray-300 rounded-md text-base"
        >
          <option value="">All Categories</option>
          {categories.map((category)=> 
          <option value={category.id} key={category.id} onChange={(e)=> setSearchByCategory(e.target.value)}>{category.name}</option>
          )} 
        </select>

        {/* Product Name Input */}
        <input
          type="text"
          name="product"
          onChange={(e)=> setSearchByKeyword(e.target.value)}
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