import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { color } from "./redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
const Layout = () => {
  const color = useSelector((state) => state.theme.status);
  console.log(color);
  return (
    <div>
      <Navbar />

      <div className="flex pt-0 sm:pt-14">
        <Sidebar />
        <main className="flex-1 ml-0 sm:ml-44 px-5 py-2 overflow-auto">
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
