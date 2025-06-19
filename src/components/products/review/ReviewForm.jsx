
import { useForm } from "react-hook-form";
import { FaStar, FaCloudUploadAlt } from "react-icons/fa";

const ReviewForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-1/2">
      <h3 className="text-xl font-bold mb-6">Write a Review</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Rating Section */}
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-2">Rating</label>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                type="button"
                className="text-2xl text-gray-300 hover:text-yellow-400 focus:outline-none"
              >
                <FaStar size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Review Text */}
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-2">Your Review</label>
          <textarea
            rows="2"
            {...register("review")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Share your experience with this product"
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Add Photos (Optional)</label>
          <label
            htmlFor="photos"
            className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <FaCloudUploadAlt className="text-gray-400 text-2xl mb-1" />
              <p className="mb-1 text-sm text-gray-500">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">PNG, JPG (MAX. 5MB each)</p>
            </div>
            <input id="photos" type="file" {...register("photos")} multiple className="hidden" />
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
