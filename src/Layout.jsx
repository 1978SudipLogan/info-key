import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { color } from "./redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
const Layout = () => {
  const col = useSelector((state) => state.theme.status);
  console.log(color);
  return (
    <div className={`${col?'bg-pink-400':'bg-blue-200'}`}>
      <Navbar />

      <div className="flex pt-0 sm:pt-14">
        <Sidebar />
        <main className="flex-1 ml-0 sm:ml-48 mt-0 sm:mt-4 sm:px-5 overflow-auto">
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
