import React from "react";
import { useSelector } from "react-redux";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
} from "react-icons/fa";

const Services = () => {
  const col = useSelector((state) => state.theme.status);

  const services = [
    {
      id: 1,
      icon: <FaLaptopCode size={30} />,
      title: "Web Development",
      description:
        "Building responsive and modern websites using React, Tailwind CSS, and JavaScript.",
    },
    {
      id: 2,
      icon: <FaMobileAlt size={30} />,
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile apps using React Native with smooth performance.",
    },
    {
      id: 3,
      icon: <FaPaintBrush size={30} />,
      title: "UI/UX Design",
      description:
        "Designing user-friendly interfaces and improving user experience for web & mobile apps.",
    },
    {
      id: 4,
      icon: <FaServer size={30} />,
      title: "Backend Development",
      description:
        "Building robust APIs and backend services using Java Spring Boot and Node.js.",
    },
  ];

  return (
    <div
      className={`min-h-screen p-6 ${
        col ? "bg-pink-950" : "bg-blue-950"
      } text-white`}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white/10 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4 text-indigo-400">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-200 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
