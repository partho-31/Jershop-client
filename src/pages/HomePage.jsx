import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/home/heroSec/HeroSection";
import LatestProductCard from "../components/home/latestProduct/LatestProductCard";
import CategoryCard from "../components/category/CategoryCard";
import ProductCard from "../components/products/card/ProductCard";
import { FaTag } from "react-icons/fa";
import LimitedAddition from "../components/home/limitedAddition.jsx/LimitedAddition";
import useProductsContext from "../hooks/useProductsContext";
import useCategoryContext from "../hooks/useCategoryContext";
import { Link } from "react-router";

const HomePage = () => {
  const { latestProducts, loading, productsList } = useProductsContext();
  const { categories } = useCategoryContext();
  const [hotDeals, setHotDeals] = useState([]);
  const [popularPicks, setPopularPicks] = useState([]);

  useEffect(() => {
    setHotDeals(productsList.slice().sort((a, b) => b.discount - a.discount));
    setPopularPicks(productsList.slice().sort((a, b) => b.ratings - a.ratings));
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, [productsList]);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Latest Products */}
      <section className="px-6 sm:px-14 my-10 sm:my-20">
        <div className="mx-auto">
          <div className="flex  sm:flex-row justify-between items-center sm:items-center gap-2 sm:gap-0">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-600">
              Latest Arrivals 🔥
            </h2>
            <Link to="products">
              <button className="btn btn-ghost text-blue-500 hover:text-blue-700 px-2 py-2 text-sm sm:text-base">
                View All &rarr;
              </button>
            </Link>
          </div>

          {/* Card of Products */}
          <LatestProductCard product={latestProducts} />
        </div>
      </section>

      {/* Discount banner section  */}
      <div className="relative bg-gray-400/50 rounded-xl shadow-md overflow-hidden group">
        <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaTag className="text-blue-400 text-xl" />
              <span className="font-bold text-blue-400 text-sm uppercase tracking-wider">
                Limited Time Offer
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-600 mb-1">
              Summer Sale
            </h3>
            <p className="text-gray-600">
              Save up to 40% on premium sportswear and gear.
            </p>
          </div>

          <Link to="products">
            <button className="px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition-transform duration-300 transform group-hover:-translate-y-1 flex items-center gap-2">
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
          </Link>
        </div>

        {/* Discount Badge */}
        <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-md text-sm shadow">
          Up to 40% OFF
        </div>
      </div>

      {/* Hot Deals */}
      <section className="px-6 sm:px-14 my-10 sm:my-20">
        <div className="mx-auto" data-aos="fade-up" data-aos-delay="300">
          <div className="flex  sm:flex-row justify-between items-center sm:items-center gap-2 sm:gap-0">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-600">
              Hot Deals 🔥
            </h2>
            <Link to="products">
              <button
                className="btn btn-ghost text-blue-500 hover:text-blue-700 px-2 py-2 text-sm sm:text-base"
                data-aos="fade-left"
              >
                View All &rarr;
              </button>
            </Link>
          </div>

          <div className="relative">
            {loading && (
              <div className="w-full flex justify-center">
                <span className="loading loading-spinner text-info"></span>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
              {hotDeals.slice(0, 10).map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="px-6 sm:px-14 my-10 sm:my-20">
        <div className="mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 text-center">
            Shop By <span className="text-blue-400">Category</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
            {categories?.map((category) => (
              <div key={category.id}>
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section
        data-aos="fade-down"
        data-aos-delay="300"
        className="px-6 sm:px-14 my-10 sm:my-20"
      >
        <div className="mx-auto">
          <div className="flex justify-between items-center ">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-600">
              Popular Picks 🔥
            </h2>
            <Link to="products">
              <button
                className="btn btn-ghost text-blue-600 hover:text-blue-700"
                data-aos="fade-left"
              >
                View All &rarr;
              </button>
            </Link>
          </div>

          <div className="relative ">
            {loading && (
              <div className="w-full flex justify-center">
                <span className="loading loading-spinner text-info"></span>
              </div>
            )}
            <div className="grid grid-cols-1 mt-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {popularPicks.slice(0, 10).map((product) => (
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
