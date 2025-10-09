import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import About from "./Pages/About";
import { color } from "./redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
const Layout = () => {
  const col = useSelector((state) => state.theme.status);
  
  return (
    <div className={``}>
      <Navbar />

      <div className="flex ">
        {/* <Sidebar /> */}
        <main className="flex-1  overflow-auto">
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
