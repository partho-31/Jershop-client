import { FaTag, FaArrowRight, FaClock, FaFire } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

const PromoBanner = () => {
  return (
    <div className="w-full h-full min-h-[400px] bg-gradient-to-b from-blue-700 to-blue-500 rounded-xl shadow-2xl overflow-hidden border-2 border-white/10 relative">
      {/* Glowing accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
      
      {/* Main content */}
      <div className="h-full flex flex-col p-5 text-white">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-white/10 rounded-lg">
            <FaFire className="text-yellow-400 text-xl" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-300">Hurry Up!</p>
            <h3 className="font-bold text-lg">BEST SALES ON</h3>
          </div>
        </div>

        {/* Main Promo Text */}
        <div className="mb-6">
          <p className="text-2xl font-bold leading-tight mb-2">
            <span className="text-yellow-300">Grab Your Deals</span><br />
            As Soon As Possible
          </p>
          <p className="text-sm opacity-90">
            Don't miss out on these incredible discounts. Limited stock available!
          </p>
        </div>

        {/* Discount showcase */}
        <div className="relative mb-6">
          <div className="absolute -inset-2 bg-white/10 rounded-xl blur-md"></div>
          <div className="relative bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl p-4 text-center">
            <p className="text-5xl font-black">80% OFF</p>
            <p className="text-sm mt-1 opacity-90">On Selected Items</p>
          </div>
        </div>

        {/* Timer */}
        <div className="bg-white/10 rounded-lg p-3 mb-4">
          <div className="flex items-center gap-2 text-sm mb-2 text-cyan-200">
            <FaClock className="text-yellow-400" />
            <span>Offer ends soon:</span>
          </div>
          <div className="flex justify-between text-center">
            {[
              { value: "02", label: "HRS" },
              { value: "14", label: "MIN" },
              { value: "36", label: "SEC" }
            ].map((item, index) => (
              <div key={index}>
                <div className="bg-white/10 rounded p-1 font-mono font-bold">{item.value}</div>
                <p className="text-xs mt-1 opacity-80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

       

        {/* CTA button */}
        <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl">
          <span>Shop Now</span>
          <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-2 right-2 text-[80px] opacity-10">
        <IoRocketSharp />
      </div>
      <div className="absolute top-1/4 -right-4 w-20 h-20 rounded-full bg-cyan-400/20 blur-xl"></div>
    </div>
  );
};

export default PromoBanner;