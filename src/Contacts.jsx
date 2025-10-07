import React from "react";
import { color } from "./redux/themeSlice";
import { useSelector } from "react-redux";
const Contacts = () => {
  const col = useSelector((state) => state.theme.status);
  return (
    <div
      className={`grid grid-cols-1 pt-2 ${
        col ? "bg-pink-400" : "bg-green-400"
      }`}
    >
      Contacts
    </div>
  );
};

export default Contacts;
