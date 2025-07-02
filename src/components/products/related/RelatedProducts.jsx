import { useEffect, useState } from "react";
import useProductsContext from "../../../hooks/useProductsContext";
import { Link } from "react-router";
import ProductCard from "../card/ProductCard";

const RelatedProducts = ({ product }) => {
  const { productsList } = useProductsContext();
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const newList = productsList
      ?.slice()
      .filter(
        (p) => p.category.id === product?.category.id && p.id !== product.id
      );
    setRelatedProducts(newList);
  }, [productsList, product]);

  return (
    <section className="my-20 ">
      <div className="">
        <div className="flex justify-between items-center ">
          <h2 className="text-3xl font-bold text-gray-900">
            You may also like
          </h2>
          <Link to="products">
            <button
              href="#"
              className="btn btn-ghost text-blue-600 hover:text-blue-700"
              data-aos="fade-left"
            >
              View All &rarr;
            </button>
          </Link>
        </div>

        <div className="relative ">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {relatedProducts.map((product) => (
              <div key={product.id} className="mt-10">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
