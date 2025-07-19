import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CardDrawer from "../Layout/CardDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log(menuOpen)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleCartDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* left logo  */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            BlinkBasket
          </Link>
        </div>
        {/* center navbar  */}
        <div className="hidden md:flex space-x-6 ">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            {" "}
            men{" "}
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            {" "}
            women{" "}
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            {" "}
            top wear{" "}
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            {" "}
            bottom wear{" "}
          </Link>
        </div>
        {/* right icons  */}
        <div className="flex items-center space-x-6">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1.5 bg-primary-blue text-white text-sm rounded-full px-2 py-0.5">
              3
            </span>
          </button>
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CardDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleCartDrawer={toggleCartDrawer}
      />

      <div
        className={`fixed top-0 left-0  w-3/4 sm:w-1/2 md:w-[30rem]  h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <IoMdClose className="h-6 w-6 text-gray-600 "/>
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link to="#" onClick={toggleMenu} className="block text-gray-600 hover:text-black">
            Men
            </Link>
            <Link to="#" onClick={toggleMenu} className="block text-gray-600 hover:text-black capitalize">
            Women
            </Link>
            <Link to="#" onClick={toggleMenu} className="block text-gray-600 hover:text- capitalize">
           Top Wear
            </Link>
            <Link to="#" onClick={toggleMenu} className="block text-gray-600 hover:text-black capitalize">
            Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
