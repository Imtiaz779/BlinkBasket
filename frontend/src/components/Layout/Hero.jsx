import React from "react";
import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[320px] md:h-[600px] lg:h-[720px] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="BlinkBasket"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b  from-black/50 to-transparent z-10" />

      {/* Text Content Above Image */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase mb-4">
            Vacation <br /> Ready
          </h1>
          <p className="text-sm md:text-lg mb-6">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>
          <Link
            to="#"
            className="bg-white text-gray-800 px-6 py-2 text-lg rounded-md hover:bg-gray-200 transition duration-200"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
