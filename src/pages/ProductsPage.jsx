import ProductSearch from "../components/products/searchBar/ProductSearch";
import ProductCard from "../components/products/card/ProductCard";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductsPage = () => {
  const { productsList,loading } = useFetchProducts();

  return (
    <div>
      <ProductSearch />
      {loading && (
        <div className="w-full flex justify-center h-lvh">
          <span className="loading loading-spinner text-info"></span>
        </div>
      )}
      <div className=" flex pb-6 gap-6">
        {productsList.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
