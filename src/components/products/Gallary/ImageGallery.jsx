import { useState, useEffect } from "react";

const ImageGallery = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]?.image);

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0].image);
    }
  }, [images]);

  return (
    <div className="w-full h-3/4 flex flex-col gap-4 mt-7 justify-center ">
      {/*  Main Image */}
      <div className="w-full h-[300px] sm:h-[600px] lg:h-[650px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <img
          src={mainImage || "/placeholder-image.jpg"}
          alt="Main Product"
          className="w-full h-full object-fill transition-all duration-500 ease-in-out"
        />
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
