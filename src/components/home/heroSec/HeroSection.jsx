import { FaShieldAlt, FaTruck, FaUndo } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="hero min-h-[80vh] relative flex flex-col lg:flex-row items-center justify-between pt-2 gap-4 px-4 sm:px-8"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}
      data-aos="fade"
    >
      {/* Text Content - Left Side */}
      <div className="hero-content text-neutral-content relative lg:ms-10 z-10 w-full lg:w-1/2 py-12 lg:py-0">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="badge badge-accent mb-4" data-aos="fade-up">
            NEW COLLECTION
          </div>
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-blue-400">Authentic</span> Jerseys
            <br />
            For True Fans
          </h1>
          <p className="mb-8 text-lg sm:text-xl opacity-90">
            Officially licensed jerseys from NFL, NBA, MLB, and more. 100%
            authentic or your money back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none px-8 py-3 text-lg flex-grow sm:flex-grow-0">
              Shop Now
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg flex-grow sm:flex-grow-0">
              Limited Editions
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-blue-400" />
              <span>Authentic Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTruck className="text-blue-400" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-blue-400" />
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Jersey Image - Right Side */}
      <div
        className="w-full lg:w-1/2 h-full md:h-1/2 lg:min-h-[80vh] flex items-center justify-center"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <img
          src="https://res.cloudinary.com/dvyz3blnz/image/upload/v1749584005/E8rZNWhWYAIMf2O_lvkkk6.jpg"
          alt="Authentic Football Jersey"
          className="lg:absolute h-full w-full object-contain object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
