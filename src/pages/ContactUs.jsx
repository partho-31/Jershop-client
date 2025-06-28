import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import ApiClient from "../services/ApiClient";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await ApiClient.post("api/contact/", data);
      reset();
      toast.success("Message sent successfully!", {
        position: "top-center",
      });
    } catch (error) {
      if(error) {
      toast.success("Something went wrong! Please try again later", {
        position: "top-center",
      });
    }}
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Contact <span className="text-blue-600">JerseyShop</span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Have questions or need support? We're here to help! Reach out
            through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Card - Address */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-700">
                    SMR-HALL, JUST
                    <br />
                    Jashore – 7408, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card - Phone */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    Phone Support
                  </h3>
                  <p className="text-gray-700">
                    <a
                      href="tel:+8801234567890"
                      className="hover:text-blue-600 transition-colors"
                    >
                      +880 1234 567890
                    </a>
                    <br />
                    Mon-Fri: 9AM-6PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card - Email */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:support@jerseyshop.com"
                      className="hover:text-blue-600 transition-colors"
                    >
                      support@jerseyshop.com
                    </a>
                    <br />
                    Typically we respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card - Hours */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaClock className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    Business Hours
                  </h3>
                  <p className="text-gray-700">
                    Saturday-Thusday: 9AM - 6PM
                    <br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  {...register("name", { required: true })}
                  className="w-full rounded-lg border-2 border-gray-200 bg-white/90 px-4 py-2.5 text-gray-700 shadow-sm transition-all 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:outline-none
                hover:border-gray-300"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    Please enter your name
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  className="w-full rounded-lg border-2 border-gray-200 bg-white/90 px-4 py-2.5 text-gray-700 shadow-sm transition-all 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:outline-none
                hover:border-gray-300"
                />
                {errors.email?.type === "required" && (
                  <p className="mt-1 text-sm text-red-600">Email is required</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="mt-1 text-sm text-red-600">
                    Please enter a valid email
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+880 1234 567890"
                  {...register("phone")}
                  className="w-full rounded-lg border-2 border-gray-200 bg-white/90 px-4 py-2.5 text-gray-700 shadow-sm transition-all 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:outline-none
                hover:border-gray-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="How can we help you?"
                  {...register("message", { required: true })}
                  className="w-full rounded-lg border-2 border-gray-200 bg-white/90 px-4 py-2.5 text-gray-700 shadow-sm transition-all 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:outline-none
                hover:border-gray-300"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    Please enter your message
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-3 text-white font-medium shadow-md
              hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
              disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">
            Find Us on Map
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with your actual map embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6552.399632258536!2d89.12474412558915!3d23.233192158944945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1751052364893!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="JerseyShop Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
