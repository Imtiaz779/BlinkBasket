import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
const Topbar = () => {
  return (
    <div className="bg-primary-blue text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="hidden md:flex items-center space-x-4 ">
          <a href="#" className="hover:text-gray-900">
            <TbBrandMeta className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-900">
            <IoLogoInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-900">
            <RiTwitterXLine className="w-5 h-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="text-sm hidden md:block">
                <a href="tel:+123456789" className="hover:text-gray-900"> +1 (234) 567-890</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
