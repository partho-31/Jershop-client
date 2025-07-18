import ProductSearch from "../components/products/searchBar/ProductSearch";
import ProductCard from "../components/products/card/ProductCard";
import useProductsContext from "../hooks/useProductsContext";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const {productsList, loading } = useProductsContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchByCategory, setSearchByCategory] = useState("");
  const [searchByKeyword, setSearchByKeyword] = useState("");
  const [ordering, setOrdering] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);

 useEffect(() => {
  let filtered = productsList.filter((product) => {
    const matchesPrice =
      ( maxPrice !== 3000)
        ? product.price >= minPrice && product.price <= maxPrice
        : true;

    const matchesCategory = searchByCategory
      ? product.category.id == searchByCategory
      : true;

    const matchesKeyword = searchByKeyword
      ? product.name.toLowerCase().includes(searchByKeyword.toLowerCase())
      : true;

    return matchesPrice && matchesCategory && matchesKeyword;
  });
  
   if (ordering) {
    filtered = filtered.slice(); 
    filtered.sort((a, b) => {
      switch (ordering) {
        case "price":
          return a.price - b.price;
        case "-price":
          return b.price - a.price;
        case "discount":
          return a.discount - b.discount;
        case "-discount":
          return b.discount - a.discount;
        case "created_at":
          return new Date(a.created_at) - new Date(b.created_at);
        case "-created_at":
          return new Date(b.created_at) - new Date(a.created_at);
        default:
          return 0;
      }
    });
  }


  setFilteredProducts(filtered);
}, [minPrice, maxPrice, searchByCategory, searchByKeyword, productsList,ordering]);

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-gray-200 py-10">
      <div className="w-full md:w-72">
        <div className="sticky top-20">
          <ProductSearch
            showMobileFilters={showMobileFilters}
            handleMobileFilter={setShowMobileFilters}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            searchByCategory={searchByCategory}
            setSearchByCategory={setSearchByCategory}
            searchByKeyword = {searchByKeyword}
            setSearchByKeyword={setSearchByKeyword}
            ordering={ordering}
            setOrdering={setOrdering}
          />
        </div>
      </div>

      <div className="flex-1">
        {/* Results Count */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="text-gray-600 px-2">
            Showing{" "}
            <span className="font-medium text-gray-800">
              {filteredProducts.length || 0}
            </span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </div>
        </div>

        {loading ? (
          <div className="w-full flex h-lvh justify-center">
            <span className="loading loading-spinner text-info"></span>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border border-gray-100">
            <div className="text-gray-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
