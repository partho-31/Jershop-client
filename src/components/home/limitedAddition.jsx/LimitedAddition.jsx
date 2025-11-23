import { FaArrowRight, FaFire } from 'react-icons/fa';

const LimitedAddition = () => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-w-4xl mx-auto my-12">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="md:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Limited Edition Football"
              className="w-full h-full object-cover min-h-64 md:min-h-96"
            />
            {/* Limited edition badge */}
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
              <FaFire className="text-yellow-300" />
              <span>LIMITED EDITION</span>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                NEW COLLECTION
              </span>
              <span className="text-sm text-gray-500">Only 100 pieces</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Champions League 2024 Official Ball
            </h2>

            <p className="text-gray-600 mb-6">
              Own a piece of football history with this authentic match ball
              signed by top players. Each ball comes with certificate of
              authenticity and exclusive display case.
            </p>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400 line-through text-lg">
                  $299.99
                </span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-sm font-bold">
                  -20% OFF
                </span>
              </div>
              <span className="text-2xl font-bold text-gray-900">$239.99</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                Add to Cart
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
                View Details
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Free worldwide shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Authenticity guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LimitedAddition;