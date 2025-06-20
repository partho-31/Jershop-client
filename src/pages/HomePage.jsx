import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/home/heroSec/HeroSection";
import LatestProductCard from "../components/home/latestProduct/LatestProductCard";
import CategoryCard from "../components/home/category/CategoryCard";
import ProductCard from "../components/products/card/ProductCard";
import { FaArrowRight, FaFire, FaTag } from "react-icons/fa";
import LimitedAddition from "../components/home/limitedAddition.jsx/LimitedAddition";
import useFetchProducts from "../hooks/useFetchProducts";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const { productsList, latestProducts, loading } = useFetchProducts();
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className=" w-full bg-cyan-300 text-gray-800 text-sm sm:text-base text-center py-2 px-4">
        🎉 Limited Time Offer :
        <span className="font-semibold"> Get 20% OFF</span> on all jerseys! Use
        code
        <span className="font-bold tracking-wide text-blue-600"> FAN20</span> at
        checkout.
      </div>
      <HeroSection />

      {/* Latest Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2
              className="text-3xl font-bold text-gray-900"
              data-aos="fade-right"
            >
              Latest Arrivals
            </h2>
            <a
              href="#"
              className="btn btn-ghost text-blue-600 hover:text-blue-700"
              data-aos="fade-left"
            >
              View All &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card of Products */}
            {latestProducts.map((product) => (
              <div className="" key={product.id}>
                <LatestProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount banner section  */}
      <div className="relative bg-gradient-to-r from-orange-500 to-red-500 rounded-xl overflow-hidden shadow-lg group">
        {/* Decorative elements */}
        {/* <div className="absolute inset-0 opacity-10 bg-[url('https://assets.website-files.com/5e51b3b0337309d672efd94c/5e51b3b03373093d1aefda39_noise.png')]"></div> */}
        <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/10"></div>
        <div className="absolute -right-5 -bottom-5 w-20 h-20 rounded-full bg-white/10"></div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <FaTag className="text-yellow-300 text-xl" />
              <span className="font-bold text-yellow-300 text-sm uppercase tracking-wider">
                Limited Time
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-1">Summer Sale</h3>
            <p className="text-blue-100">
              Get up to 40% off on selected sports items
            </p>
          </div>

          <button className="flex-shrink-0 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 flex items-center gap-2">
            Shop Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        {/* Discount percentage badge */}
        <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 font-bold px-3 py-1 rounded-md text-sm shadow-lg transform rotate-6">
          40% OFF
        </div>
      </div>

      {/* Top Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold text-gray-900 mb-10 text-center"
            data-aos="fade-up"
          >
            Shop By Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CategoryCard />
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2
              className="text-3xl font-bold text-gray-900"
              data-aos="fade-right"
            >
              Popular Picks 🔥
            </h2>
            <a
              href="#"
              className="btn btn-ghost text-blue-600 hover:text-blue-700"
              data-aos="fade-left"
            >
              View All &rarr;
            </a>
          </div>

          <div className="relative">
            {loading && (
              <div className="w-full flex justify-center">
                <span className="loading loading-spinner text-info"></span>
              </div>
            )}
            <div className="flex overflow-x-auto pb-6 scrollbar-hide gap-6">
              {productsList.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Limited Addition  */}
      <LimitedAddition />
    </div>
  );
};

export default HomePage;
