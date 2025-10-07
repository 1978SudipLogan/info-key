import React from "react";
import { color } from "./redux/themeSlice";
import { useSelector } from "react-redux";
const About = () => {
  const col = useSelector((state) => state.theme.status);
  return (
    <div
      className={`grid grid-cols-1 pt-2 ${
        col ? "bg-pink-400" : "bg-green-400"
      }`}
    >
      <div>hello</div>
    </div>
  );
};

export default About;
