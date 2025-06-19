import ProductSearch from "../components/products/searchBar/ProductSearch";
import ProductCard from "../components/products/card/ProductCard";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductsPage = () => {
  const { productsList } = useFetchProducts();

  return (
    <div>
      <ProductSearch />
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
