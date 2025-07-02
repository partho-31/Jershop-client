import { useState } from "react";

const ImageGallery = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="lg:w-1/2">
      {/* Main Image */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <img
          src={mainImage}
          alt="Main Product"
          className="w-full h-96 object-contain transition duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            onMouseEnter={() => setMainImage(img)}
            className={`h-20 w-full object-cover rounded-md cursor-pointer border-2 
              ${mainImage === img ? "border-blue-500" : "border-transparent"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
