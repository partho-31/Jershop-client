import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useFetchCategory from "../../hooks/useCategory";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddCategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [previewImage, setPreviewImage] = useState(null);
  const { createCategory, getCategories } = useFetchCategory();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      await createCategory(formData);
      await getCategories();
      reset();
      toast.success("Category added successfully!", {
        position: "top-center",
      });
    } catch (error) {
      console.log("Error in submitting review", error);
    } finally {
      setPreviewImage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Add a new Category
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            Fill in the details to add a new category
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name
                  ? "border-red-300 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-500"
              } focus:outline-none focus:ring-2`}
              placeholder="Cricket"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">
                Please provide a name
              </p>
            )}
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              rows={4}
              className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:outline-none focus:ring-2`}
              placeholder="About your category"
            />
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Add Photos <span className="text-red-500">*</span>
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
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg w-full"
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Create Category"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryForm;
