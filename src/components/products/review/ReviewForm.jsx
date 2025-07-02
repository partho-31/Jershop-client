import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import StarRating from "./StarRating";
import useAuthContext from "../../../hooks/useAuthContext";
import { useState } from "react";
import AuthAPiClient from "../../../services/AuthApiClient";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const ReviewForm = ({ handleReview }) => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm();

  const [previewImage, setPreviewImage] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("rating", data.rating);
    formData.append("comment", data.comment);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      await AuthAPiClient.post(`/api/products/${id}/review/`, formData);
      await handleReview(id);
      reset();
      toast.success("Review submitted!",{
        position: "top-center"
      });
    } catch (error) {
      console.log("Error in submitting review", error);
    } finally {
      setPreviewImage(null);
    }
  };

  const rating = watch("rating", 0);

  return (
    <div className="bg-white rounded-lg  p-6 w-1/3">
      <h3 className="text-xl font-bold mb-6">Write a Review</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Rating Section */}
        <div>
          <label className="block text-gray-700 mb-2">Your Rating</label>
          <StarRating
            onChange={(value) => setValue("rating", value)}
            rating={rating}
          />
          <input
            type="number"
            {...register("rating", {
              required: true,
              validate: (value) =>
                (value < 6 && value > 0) ||
                "Rating must be less then or equal to 5!",
            })}
            placeholder="e.g. 1 to 5"
            className="hidden w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          {errors.rating && (
            <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>
          )}
        </div>

        {/* Review Text */}
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-2">
            Your Review
          </label>
          <textarea
            rows="2"
            {...register("comment")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Share your experience with this product"
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Add Photos (Optional)
          </label>
          <label
            htmlFor="image"
            className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            {previewImage ? (
              <div>
                <img
                  src={previewImage}
                  alt="Preview"
                  className="max-h-16 w-full object-contain rounded-md mb-2"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FaCloudUploadAlt className="text-gray-400 text-2xl mb-1" />
                <p className="mb-1 text-sm text-gray-500">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG (MAX. 5MB each)
                </p>
              </div>
            )}
            <input
              id="image"
              type="file"
              {...register("image", {
                onChange: (e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const previewUrl = URL.createObjectURL(file);
                    setPreviewImage(previewUrl);
                  }
                },
              })}
              className="hidden"
            />
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || !user}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg w-full"
        >
          {isSubmitting ? ( 
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Submit Review"
          )}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
