import React, { useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import logo from "./assets/therapy_center_logo.png";
import { Button } from "@/components/ui/button";
import { Chromium, Eye } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { color } from "./redux/themeSlice";
import { Home, Wrench, Info, Phone } from "lucide-react";
import { FaSun, FaMoon } from "react-icons/fa";
const Navbar = () => {
  const c = useSelector((state) => state.theme.status);
  const data = c;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const links = [
    { text: "Home", path: "/", icon: <Home /> },
    { text: "About", path: "about", icon: <Info /> },
    { text: "Services", path: "services", icon: <Wrench /> },
    { text: "Design", path: "design", icon: <Chromium /> },
    { text: "FormDesign", path: "form-design", icon: <Eye /> },
    { text: "Contacts", path: "contacts", icon: <Phone /> },
  ];
  <Wrench />;
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/"); // Replace "/" with the route you want
  };

  return screenWidth > 640 ? (
    <div className="fixed w-full h-20 z-20 ">
      <div className="flex justify-between items-center px-10">
        <img
          src={logo}
          alt=""
          className="w-20 h-20  rounded-full "
          onClick={handleLogo}
        />
        <div className=" flex justify-center items-center gap-8">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-green-500  transition-all duration-300"
                  : "text-cyan-300 hover:text-cyan-300"
              }
            >
              {link.text}
            </NavLink>
          ))}
          {data ? (
            <FaMoon
              className="text-xl text-cyan-300"
              onClick={() => dispatch(color(!data))}
            />
          ) : (
            <FaSun
              className="text-xl text-cyan-300"
              onClick={() => dispatch(color(!data))}
            />
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="fixed bottom-1 w-[98vw] mx-1 h-16 flex justify-around items-center rounded-full   items-center bg-cyan-600 bg-blur z-30 text-white">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          end
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold "
              : "text-cyan-300 hover:text-cyan-300"
          }
        >
          {link.icon}
        </NavLink>
      ))}
      {data ? (
        <FaMoon
          className="text-xl text-cyan-300"
          onClick={() => dispatch(color(!data))}
        />
      ) : (
        <FaSun
          className="text-xl text-cyan-300"
          onClick={() => dispatch(color(!data))}
        />
      )}
    </div>
  );
};

export default Navbar;
