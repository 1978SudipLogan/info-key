import React, { useState, useEffect } from "react";
import { Link, Links } from "react-router-dom";
import logo from "./assets/therapy_center_logo.png";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { color } from "./redux/themeSlice";

const Navbar = () => {
  const c = useSelector((state) => state.theme.status);
  const data = c;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
  const links = [
    { text: "Home", path: "/" },
    { text: "About", path: "about" },
    { text: "Services", path: "services" },
    { text: "Contacts", path: "contacts" },
  ];

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const dispatch = useDispatch();

  return (
    <div>
      {screenWidth > 640 ? (
        <div className="bg-blue-950 flex h-16 w-full justify-between items-center text-white fixed z-20 top-0">
          <div className="w-[12.85%] h-full flex justify-center items-center">
            <img src={logo} alt="Logo" className="w-20 h-20" />
          </div>
          <div className="w-[90%]  flex justify-end gap-5 pr-5 h-full items-center">
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="hover:text-green-600 hover:font-semibold"
              >
                {item.text}
              </Link>
            ))}
            {data ? (
              <Button
                onClick={() => {
                  dispatch(color(!data));
                }}
              >
                pink
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch(color(!data));
                }}
              >
                green
              </Button>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-end bg-blue-950 h-16 items-center">
            {menu ? (
              <Button className="relative  right-2" onClick={handleMenu}>
                <X />
              </Button>
            ) : (
              <Button className="relative  right-2" onClick={handleMenu}>
                <Menu />
              </Button>
            )}
          </div>
          {menu && (
            <div className="fixed inset-0  w-[60%] h-full bg-gradient-to-b from-blue-500 to-pink-300 z-30 font-bold">
              <img
                src={logo}
                alt=""
                className="w-20 h-20 rounded-full  mx-auto z-40"
              />
              <ul className="flex flex-col gap-5 justify-center items-center mt-10">
                {links.map((item, index) => (
                  <Link key={index} to={item.path} onClick={handleMenu}>
                    {item.text}
                  </Link>
                ))}
                {data ? (
                  <Button
                    className=""
                    onClick={() => {
                      dispatch(color(!data));
                    }}
                  >
                    pink
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      dispatch(color(!data));
                    }}
                  >
                    green
                  </Button>
                )}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
