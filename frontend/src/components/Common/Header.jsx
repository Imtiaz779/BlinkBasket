import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="border-b border-gray-200">
      {/* topbar  */}
      <Topbar />
      {/* navabr  */}
      <Navbar />
      {/* cart drawer  */}
    </div>
  );
};

export default Header;
