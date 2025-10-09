import React from "react";
import hero5 from "../assets/hero5.svg";
import logo from "../assets/therapy_center_logo.png";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import "../index.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate()
  const handleContact=()=>{
    navigate("/contacts")
  }
  return (
    <div className="relative h-screen w-full ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero5})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-6 ">
        <strong className=" sm:hidden absolute top-2 left-2 text-cyan-300">infoKey.in</strong> 
        <h1 className="text-3xl sm:text-4xl text md:text-5xl lg:text-6xl font-bold text-blue-100 drop-shadow-lg">
          “Transforming Ideas Into Reality.”
        </h1>
        {/* Subheading */}
        <p className="relative bottom-5 text-gray-200 text sm:text-lg md:text-xl max-w-2xl drop-shadow-md">
          Powering businesses with smart and scalable technology solutions.
        </p>
        {/* Company Stats */}
        <div className="flex flex-wrap justify-center gap-6  text-white">
          <div className="flex flex-col items-center hover:bg-blue-700/90 bg-blue-700/70 px-6 py-4 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold ">100+</h2>
            <p className="text-sm">Clients</p>
          </div>
          <div className="flex flex-col items-center hover:bg-green-700/90 bg-green-700/70 px-6 py-4 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">200+</h2>
            <p className="text-sm">Projects</p>
          </div>
          <div className="flex flex-col items-center hover:bg-yellow-700/90 bg-yellow-700/70 px-6 py-4 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">50+</h2>
            <p className="text-sm">Tech Experts</p>
          </div>
        </div>
        {/* Call to Action */}
        <Button className="but  rounded-full" onClick={handleContact}>Contact Us</Button>
        {/* Social Media Links */}
        <div className="flex space-x-6 mt-0 md:mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            className="animate-pulse text-blue-400 hover:text-blue-500 transition duration-300"
          >
            <Facebook size={28} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="animate-pulse  text-sky-400 hover:text-sky-500 transition duration-300"
          >
            <Twitter size={28} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="animate-pulse text-pink-400 hover:text-pink-500 transition duration-300"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="animate-pulse text-blue-500 hover:text-blue-600 transition duration-300"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
