import { FaShieldAlt, FaTruck, FaUndo } from "react-icons/fa";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-stretch justify-between gap-6 px-6 sm:px-14 h-lvh sm:h-[80lvh] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dinzf10l3/image/upload/v1751517821/510026_ybwhk9.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Text Content - Left Side */}
      <div className="relative z-10 flex items-center justify-center w-full lg:w-1/2 text-neutral-content py-10">
        <div className="max-w-2xl w-full text-center lg:text-left">
          <div className="badge badge-accent bg-teal-300 my-6 mx-auto lg:mx-0">
            NEW COLLECTION
          </div>
          <h1 className="mb-6 text-3xl text-gray-200 sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-blue-400">Authentic</span> Jerseys
            <br />
            For True Fans
          </h1>
          <p className="mb-10 text-lg sm:text-xl text-white/80 font-semibold">
            Officially licensed jerseys from FIFA, NBA, ICC and more. <br />
            100% authentic or your money back. Grab the best deals now
          </p>
          <div className="flex  sm:flex-row gap-4 sm:gap-4 justify-center lg:justify-start">
            <Link to="products">
              <button className="btn btn-primary outline-0 bg-blue-400 hover:bg-blue-500 border-none px-6 sm:px-8 py-2 text-md sm:text-lg">
                Shop Now
              </button>
            </Link>
            <button className="btn btn-outline border-2 border-white/50 text-white/80 hover:bg-white hover:text-gray-900 sm:px-8 py-2 px-3 text-md sm:text-lg">
              Limited Editions
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-blue-400" />
              <span className="font-bold">Authentic Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTruck className="text-blue-400" />
              <span className="font-bold">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-blue-400" />
              <span className="font-bold">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Jersey Image - Right Side */}
      <div className="relative z-10 hidden lg:block flex-1">
        <img
          src="https://res.cloudinary.com/dinzf10l3/image/upload/v1751518137/new_cristiano_ronaldo_al_nassr_1695738518_89ac811d_progressive-removebg-preview_b7ipsl.png"
          alt="Authentic Football Jersey"
          className="w-full mt-10 h-full object-fill object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
