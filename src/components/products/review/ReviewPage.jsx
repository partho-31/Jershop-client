import { RiStarFill, RiStarLine } from "react-icons/ri";
import { useParams } from "react-router";
import DeleteReview from "./DeleteReview";

const ReviewPage = ({ reviews, product, handleReview }) => {
  const { id } = useParams();
  return (
    <div className="container mx-auto sm:px-4 sm:py-8 sm:w-1/2">
      {/* Header */}
      <div className="sm:flex sm:justify-between sm:items-center sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Customer Reviews</h2>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) =>
            i < product?.ratings ? (
              <RiStarFill key={i} className="text-yellow-400" />
            ) : (
              <RiStarLine key={i} className="text-gray-300" />
            )
          )}
          <span className="text-gray-600">
            ({reviews?.length || 0} reviews)
          </span>
        </div>
      </div>

      {/* Single Review */}
      {reviews?.length === 0 && (
        <span className="text-gray-400 font-bold">No review available</span>
      )}
      {reviews?.map((review) => (
        <div className="space-y-2 mb-2 sm:mb-5" key={review.id}>
          <div className="bg-white rounded-lg  sm:px-8 py-2">
            <div className="flex justify-between items-start">
              <div className="mb-2 ">
                <h4 className="font-semibold">
                  {review.user.first_name} {review.user.last_name}
                </h4>
                <div className="flex text-yellow-400 my-2">
                  {[...Array(5)].map((_, i) =>
                    i < review.rating ? (
                      <RiStarFill key={i} className="text-yellow-400" />
                    ) : (
                      <RiStarLine key={i} className="text-gray-300" />
                    )
                  )}
                </div>
              </div>
              <DeleteReview
                review={review}
                product_pk={id}
                handleFetch={handleReview}
              />
            </div>
            <p className="text-gray-700">{review.comment}</p>
            {review.image && (
              <div className="flex space-x-2">
                <img
                  src={review.image}
                  alt="Review"
                  className="w-16 h-16 object-cover rounded border border-gray-200"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewPage;
