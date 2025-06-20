// import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RiStarFill, RiStarLine } from "react-icons/ri";


const ReviewPage = ({ product }) => {
  // const [reviews, setReviews] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getReviews = async (id) => {
  //     setLoading(true);
  //     try {
  //       const response = await ApiClient.get(`/api/products/${id}/`);
  //       setReviews(response.data);
  //     } catch (error) {
  //       console.log("Error while fetching product", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getReviews(product.id);
  // }, [product.id]);

  return (
    <div className="container mx-auto px-4 py-8 w-1/2">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) =>
            i < product?.ratings ? (
              <RiStarFill key={i} className="text-yellow-400" />
            ) : (
              <RiStarLine key={i} className="text-gray-300" />
            )
          )}
          <span className="text-gray-600">42 reviews</span>
        </div>
      </div>

      {/* Single Review */}
      <div className="space-y-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-2">
            <h4 className="font-semibold">Alex Johnson</h4>
            <div className="flex text-yellow-400 my-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
          <p className="text-gray-700 mb-3">
            This product exceeded my expectations. The quality is outstanding
            and it arrived earlier than expected. I would definitely recommend
            this to anyone looking for a reliable solution.
          </p>
          <div className="flex space-x-2">
            <img
              src="https://via.placeholder.com/80"
              alt="Review"
              className="w-16 h-16 object-cover rounded border border-gray-200"
            />
            <img
              src="https://via.placeholder.com/80"
              alt="Review"
              className="w-16 h-16 object-cover rounded border border-gray-200"
            />
          </div>
          <p className="text-sm text-gray-500 mt-3">Posted on May 15, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
