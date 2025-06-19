import ProductDetails from "../components/products/detials/ProductDetails";
import ReviewPage from "../components/products/review/ReviewPage";
import ReviewForm from "../components/products/review/ReviewForm";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";

const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async (id) => {
      setLoading(true);
      try {
        const response = await ApiClient.get(`/api/products/${id}/`);
        setProduct(response.data);
      } catch (error) {
        console.log("Error while fetching product", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct(id);
  }, [id]);
  console.log(loading)
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col  lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <img
                src="https://res.cloudinary.com/dvyz3blnz/image/upload/v1748718459/cld-sample-5.jpg"
                alt="Product"
                className="w-full  object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <ProductDetails product={product} />
        </div>

        {/* Review Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button className="py-4 px-6 text-center border-b-2 font-medium text-sm  border-blue-500 text-blue-600">
                Reviews (42)
              </button>
            </nav>
          </div>
          <div className="p-6 flex justify-center gap-10">
            <ReviewPage product={product} />
            <ReviewForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;
