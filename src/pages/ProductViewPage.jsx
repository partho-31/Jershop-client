import ProductDetails from "../components/products/detials/ProductDetails";
import ReviewPage from "../components/products/review/ReviewPage";
import ReviewForm from "../components/products/review/ReviewForm";
import { useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import RelatedProducts from "../components/products/related/RelatedProducts";
import ImageGallery from "../components/products/Gallary/ImageGallery";
import PromoBanner from "../components/products/banner/PromoBanner";

const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  const getReviews = useCallback(async () => {
    try {
      const response = await ApiClient.get(`/api/products/${id}/review/`);
      setReviews(response.data);
    } catch (error) {
      console.log("Error while fetching reviews", error);
    }
  }, [id]);

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
  }, [id, getReviews]);

  return (
    <div className="bg-gray-50 min-h-screen px-6 sm:px-10 ">
      {loading ? (
        <div className="w-full flex justify-center items-center h-screen">
          <span className="loading loading-spinner text-info text-6xl"></span>
        </div>
      ) : (
        <div className="container mx-auto py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - 80% */}
            <div className="flex flex-col lg:flex-[4] gap-8">
              {/* Product Images & Details */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Product Images */}
                <div className="w-full md:w-1/2">
                  <ImageGallery images={product?.images} />
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2">
                  <ProductDetails
                    product={product}
                    rating={reviews?.length || 0}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Promo Banner 20% */}
            <div className="lg:flex-[1] w-full">
              <PromoBanner />
            </div>
          </div>

          {/* Review Section */}
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button className="py-4 px-6 text-center border-b-2 font-medium text-sm  border-blue-500 text-blue-600">
                  Reviews ({reviews?.length || 0})
                </button>
              </nav>
            </div>
            <div className="p-6 flex flex-col sm:flex-row justify-center gap-5 sm:gap-10">
              <ReviewPage
                product={product}
                reviews={reviews}
                handleReview={getReviews}
              />
              <ReviewForm handleReview={getReviews} />
            </div>
          </div>

          <RelatedProducts product={product} />
        </div>
      )}
    </div>
  );
};

export default ProductViewPage;
