import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      {/* topbar  */}
      <Topbar />
      {/* navabr  */}
      <Navbar />
      {/* cart drawer  */}
    </div>
  );
};

export default Header;
