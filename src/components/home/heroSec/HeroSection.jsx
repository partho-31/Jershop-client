import { FaShieldAlt, FaTruck, FaUndo } from "react-icons/fa";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="hero min-h-[50vh] flex flex-col lg:flex-row items-stretch mt-4 justify-between gap-6 px-14">
      {/* Text Content - Left Side */}
      <div className=" flex items-center justify-center  text-neutral-content">
        <div className="max-w-2xl w-full  text-center lg:text-left">
          <div className="badge badge-accent bg-teal-300 my-4">
            NEW COLLECTION
          </div>
          <h1 className="mb-6 text-4xl text-gray-500 sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-blue-400">Authentic</span> Jerseys
            <br />
            For True Fans
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-black/60 font-semibold">
            Officially licensed jerseys from NFL, NBA, MLB, and more. 100% <br></br>
            authentic or your money back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <Link to="products"> <button className="btn btn-primary outline-0 bg-blue-400 hover:bg-blue-500 border-none px-8 py-3 text-lg">
              Shop Now
            </button></Link>
            <button className="btn btn-outline border-2 border-black/50 text-black/60 hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              Limited Editions
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-blue-400" />
              <span className="text-black/60 font-bold">Authentic Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTruck className="text-blue-400" />
              <span className="text-black/60 font-bold">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-blue-400" />
              <span className="text-black/60 font-bold">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Jersey Image - Right Side */}
      <div className="flex-1 ">
        <img
          src="https://res.cloudinary.com/dvyz3blnz/image/upload/v1750795957/new_cristiano_ronaldo_al_nassr_1695738518_89ac811d_progressive_u8uyrw.jpg"
          alt="Authentic Football Jersey"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
