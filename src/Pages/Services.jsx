import React from "react";
import webImg from "../assets/hero4.svg";
import appImg from "../assets/hero5.svg";
import uiuxImg from "../assets/hero6.svg";
import backendImg from "../assets/hero7.jpg";
import { useNavigate } from "react-router-dom";
import { color } from "../redux/themeSlice";
import { useDispatch,useSelector } from "react-redux";
const Services = () => {
  const services = [
    {
      id: 1,
      image: webImg,
      title: "Web Development",
      description:
        "We build high-performance, responsive, and dynamic websites using React, Tailwind CSS, and modern JavaScript frameworks. Our goal is to craft seamless web experiences that convert visitors into customers.",
    },
    {
      id: 2,
      image: appImg,
      title: "Mobile App Development",
      description:
        "From concept to deployment, we create robust and intuitive mobile apps using React Native — ensuring a smooth and engaging experience on both Android and iOS platforms.",
    },
    {
      id: 3,
      image: uiuxImg,
      title: "UI/UX Design",
      description:
        "Our design team creates visually appealing interfaces that focus on simplicity, usability, and engagement, ensuring your brand stands out beautifully.",
    },
    {
      id: 4,
      image: backendImg,
      title: "Backend Development",
      description:
        "We engineer secure and scalable backend architectures using Spring Boot, Node.js, and MongoDB to power data-driven and enterprise-level applications.",
    },
  ];

   const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/"); // Replace "/" with the route you want
  };
 const c=useSelector((state)=>state.theme.status)
const data=c
  return (
    <div className={`relative min-h-screen w-full  text-white px-4 sm:px-10 lg:px-20 py-16 pt-20 overflow-hidden ${data?"bg-pink-800 ":"bg-gradient-to-b from-black via-gray-900 to-black"}`}>
      {/* Floating Background Glow */}
        <strong className="sm:hidden absolute top-2 left-2 text-cyan-300"  onClick={handleLogo}>
          infoKey.in
        </strong>

      {/* Heading Section */}
      <div className="text-center mb-14 relative z-10">
      
        <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-300 tracking-wide drop-shadow-lg">
          Our Services
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
          Empowering businesses with cutting-edge web, mobile, and backend
          solutions. We combine creativity, strategy, and technology to build
          products that deliver results.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-white/10  rounded-2xl overflow-hidden shadow-md hover:shadow-cyan-500/30 backdrop-blur-md transition-all duration-500 hover:scale-105 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <h2 className="text-xl font-semibold text-cyan-300 mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Hover Glow Line */}
            <div className="h-1 w-0 bg-cyan-400 group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
