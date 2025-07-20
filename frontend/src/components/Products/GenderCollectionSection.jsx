import React from "react";
import maleImg from "../../assets/mens-collection.webp";
import femaleImg from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <div className="py-12 px-4 ">
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* Women's Collection */}
        <div className="relative flex-1 overflow-hidden rounded-lg group max-h-[600px]">
          <img
            src={femaleImg}
            alt="Women's Collection"
            className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 px-4 py-3 rounded-md shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline font-medium"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative flex-1 overflow-hidden rounded-lg group max-h-[600px]">
          <img
            src={maleImg}
            alt="Men's Collection"
            className="w-full h-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 px-4 py-3 rounded-md shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline font-medium"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderCollectionSection;
