import { useForm } from "react-hook-form";
import useProductsContext from "../../../hooks/useProductsContext";
import { toast } from "react-toastify";
import useCategoryContext from "../../../hooks/useCategoryContext";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const {categories} = useCategoryContext()
  const { createProduct, getLatestProducts } = useProductsContext();

  const onSubmit = async (data) => {
    const response = await createProduct(data);
    if (response.success) {
      await getLatestProducts();
      reset();
      toast.success("Product added successfully!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-600 sm:text-4xl">
            Add a new product
          </h2>
          <p className="mt-3 text-xl text-gray-400">
            Fill in the details to add a new product
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* name */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
                placeholder="National team jersey of BD"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  Please provide a course title
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
                placeholder="About your product quality"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price <span className="text-red-500">*</span>(BDT)
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.price
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
                placeholder="560"
              />
              {errors.price && (
                <p className="mt-1 text-sm text-red-600">
                  Please provide a valid price
                </p>
              )}
            </div>

            {/* Discount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Discount <span className="text-red-500">*</span>(%)
              </label>
              <input
                type="number"
                {...register("discount", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.discount
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
                placeholder="5"
              />
              {errors.discount && (
                <p className="mt-1 text-sm text-red-600">
                  Please provide a valid discount
                </p>
              )}
            </div>

            {/* Stock */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Availability <span className="text-red-500">*</span>(piecs)
              </label>
              <input
                type="number"
                {...register("stock")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="25"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
