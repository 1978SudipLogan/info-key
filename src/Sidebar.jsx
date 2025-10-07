import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { text: "Home", path: "/" },
    { text: "About", path: "about" },
    { text: "Services", path: "services" },
    { text: "Contacts", path: "contacts" },
  ];
  return (
    <div className="hidden sm:flex  w-48 bg-blue-950 flex flex-col gap-5 fixed top-16 left-0 bottom-0 pt-4 text-white">
      {links.map((item, index) => (
        <Link key={index} to={item.path} className="hover:bg-blue-700 text-center p-2">
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
