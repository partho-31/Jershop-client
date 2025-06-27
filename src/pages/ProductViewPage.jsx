import ProductDetails from "../components/products/detials/ProductDetails";
import ReviewPage from "../components/products/review/ReviewPage";
import ReviewForm from "../components/products/review/ReviewForm";
import { useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";

const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  const getReviews = useCallback( async () => {
    try {
      const response = await ApiClient.get(`/api/products/${id}/review/`);
      setReviews(response.data);
    } catch (error) {
      console.log("Error while fetching reviews", error);
    }
  },[id]);

  
 useEffect(() => {
  const getProduct = async () => {
    setLoading(true);
    try {
      const response = await ApiClient.get(`/api/products/${id}/`);
      setProduct(response.data);
      await getReviews();
    } catch (error) {
      console.log("Error while fetching product", error);
    } finally {
      setLoading(false);
    }
  };

  getProduct();
}, [id,getReviews]);  

  return (
    <div className="bg-gray-50 min-h-screen">
      {loading ? (
        <div className="w-full flex justify-center items-center h-screen">
          <span className="loading loading-spinner text-info text-6xl"></span>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col  lg:flex-row gap-8">
            {/* Product Images */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 h-lvh">
                <img
                  src={product?.iamge}
                  alt="Product"
                  className="w-full  object-cover"
                />
              </div>
            </div>
            {/* Product Details */}
            <ProductDetails product={product} rating={reviews?.length || 0} />
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
              <ReviewPage
                product={product}
                reviews={reviews}
                handleReview={getReviews}
              />
              <ReviewForm handleReview={getReviews} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductViewPage;
