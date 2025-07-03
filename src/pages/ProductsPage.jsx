import ProductSearch from "../components/products/searchBar/ProductSearch";
import ProductCard from "../components/products/card/ProductCard";
import useProductsContext from "../hooks/useProductsContext";
import { useState } from "react";

const ProductsPage = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const { productsList, loading } = useProductsContext();

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-gray-200 py-10">
      <div className="w-full md:w-72">
        <div className="sticky top-20">
          <ProductSearch
            showMobileFilters={showMobileFilters}
            handleMobileFilter={setShowMobileFilters}      
          />
        </div>
      </div>


      <div className="flex-1">
        {/* Results Count */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="text-gray-600 px-2">
            Showing{" "}
            <span className="font-medium text-gray-800">
              {productsList?.length}
            </span>{" "}
            {productsList?.length === 1 ? "product" : "products"}
          </div>
          
        </div>

        {/* Product Grid */}
        {productsList?.length > 0 ? (
          <>
            {loading && (
              <div className="w-full flex justify-center">
                <span className="loading loading-spinner text-info"></span>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-6">
              {productsList.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </>
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
