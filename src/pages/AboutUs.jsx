import { FaTshirt, FaShippingFast, FaLock, FaHeadset, FaStar, FaGlobeAmericas, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About <span className="text-blue-600">Golazo!</span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Golazo is your go-to destination for premium, authentic, and stylish jerseys from your favorite teams across the globe.
            Whether you're a die-hard football fan or just love the look — we've got something for everyone.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaGlobeAmericas className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-blue-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to bring the passion of sports directly to fans' wardrobes. We strive to offer jerseys that aren't
              just apparel, but a statement of pride, love, and loyalty to your favorite team or athlete.
            </p>
          </div>

          {/* Why Choose Us Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaStar className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-blue-800">Why Choose Us?</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaTshirt className="text-blue-500 mt-1 mr-3" />
                <span className="text-gray-700">High-quality, authentic jerseys</span>
              </li>
              <li className="flex items-start">
                <FaShippingFast className="text-blue-500 mt-1 mr-3" />
                <span className="text-gray-700">Fast and reliable shipping</span>
              </li>
              <li className="flex items-start">
                <FaLock className="text-blue-500 mt-1 mr-3" />
                <span className="text-gray-700">Secure checkout with multiple payment options</span>
              </li>
              <li className="flex items-start">
                <FaHeadset className="text-blue-500 mt-1 mr-3" />
                <span className="text-gray-700">Great customer support</span>
              </li>
              <li className="flex items-start">
                <FaTshirt className="text-blue-500 mt-1 mr-3" />
                <span className="text-gray-700">Regular new arrivals and exclusive collections</span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaGlobeAmericas className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-blue-800">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted name in the jersey retail space — not just in Bangladesh, but worldwide. We aim to create a global
              community of sports lovers connected through style and spirit.
            </p>
          </div>

          {/* Join Us Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-blue-800">Join Our Journey</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you're a seasoned supporter or just starting your fan journey, JerseyShop is here to gear you up.
              Join our community and wear your passion proudly.
            </p>
           <Link to="/products"> <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300">
              Shop Now
            </button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;