import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router";
import useAuthContext from "../../../hooks/useAuthContext";

const ImageGallery = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]?.image);
  const {user} = useAuthContext()

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images.at(-1).image);
    }
  }, [images]);

  return (
    <div className="w-full h-3/4 flex  flex-col gap-4 justify-center ">
      {/*  Main Image */}
      <div className="relative w-full h-[300px] sm:h-[600px] lg:h-[650px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <img
          src={mainImage}
          alt="Main Product"
          className="w-full h-full object-fill transition-all duration-500 ease-in-out"
        />

        { user?.is_staff &&
        <Link to="add-product_image">
          <div className="absolute bottom-4 right-4 bg-blue-400 p-2 rounded-full shadow-md hover:bg-blue-500 transition text-white">
            <FiEdit className="h-5 w-5" />
          </div>
        </Link> }
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setMainImage(img.image)}
              onMouseEnter={() => setMainImage(img.image)}
              className={`rounded-lg overflow-hidden border-2 aspect-square focus:outline-none transition-all
                ${
                  mainImage === img.image
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
            >
              <img
                src={img.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover hover:opacity-90"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
