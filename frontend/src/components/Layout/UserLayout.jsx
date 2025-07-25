import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Home from "../../pages/Home";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      {/* header  */}
      <Header />

      {/* main content  */}
      <main>
        <Outlet/>
      </main>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default UserLayout;
