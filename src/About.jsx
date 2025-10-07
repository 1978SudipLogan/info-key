import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const col = useSelector((state) => state.theme.status);

  const aboutData = {
    name: "Sudip Kumar",
    role: "Full Stack Developer",
    description:
      "I am a passionate Full Stack Developer with 2 years of experience in building responsive and modern web applications using React, Tailwind CSS, and Java Spring Boot.",
    skills: ["React.js", "Tailwind CSS", "Java", "Spring Boot", "Redux", "Firebase"],
    experience: [
      {
        company: "FixityEDX",
        role: "Java Full Stack Trainer",
        duration: "2 years",
      },
      {
        company: "Aitanaa",
        role: "React Developer",
        duration: "1 year",
      },
    ],
  };

  return (
    <div
      className={`min-h-screen p-6 ${
        col ? "bg-pink-950" : "bg-blue-950"
      } text-white`}
    >
      <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>

      {/* Description */}
      <p className="text-center max-w-2xl mx-auto mb-6">
        {aboutData.description}
      </p>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {aboutData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white/20 px-4 py-2 rounded-full text-sm hover:bg-white/40 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutData.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white/10 p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p>{exp.role}</p>
              <p className="text-sm text-gray-200">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
