import { useForm } from "react-hook-form";
import { useState } from "react";
import AuthAPiClient from "../../../services/AuthApiClient";
import { useParams } from "react-router";
import { toast } from "react-toastify";

function PhotoUpload() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      await AuthAPiClient.post(`/api/products/${id}/images/`, formData);

      reset();
      toast.success("Photo uploaded successfully!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Something went wrong! Please try again", {
        position: "top-center",
      });
      console.log(error);
    }
  };

  return (
    <div className=" mx-auto my-20 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col justify-center items-center space-y-4 p-8 bg-white shadow-lg rounded-xl w-80"
      >
        <h2 className="text-xl font-semibold text-gray-700">
          Upload Product Photo
        </h2>

        <div
          className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg ${
            errors.image ? "border-red-300" : "border-gray-300"
          } hover:border-indigo-400 transition-colors`}
        >
          <div className="space-y-1 text-center">
            {imagePreview ? (
              <div>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-32 w-full object-contain rounded-md mb-2"
                />
              </div>
            ) : (
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <div className="flex flex-col text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
              >
                <h3 className="text-md font-medium text-blue-700 mb-2">
                  Click To Upload
                </h3>
                <div className="px-3 py-1 bg-blue-100 rounded-full">
                  <span className="text-xs font-medium text-blue-700">
                    Max file size: 4MB
                  </span>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  {...register("image", {
                    required: true,
                    onChange: (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const previewUrl = URL.createObjectURL(file);
                        setImagePreview(previewUrl);
                      }
                    },
                  })}
                  className="sr-only"
                />
              </label>
            </div>
          </div>
        </div>
        {errors.image && (
          <p className="mt-1 text-sm text-red-600">Please select an image</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          {isSubmitting ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}

export default PhotoUpload;
