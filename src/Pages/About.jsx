import React from "react";
import hero4 from "../assets/hero4.svg";
import hero5 from "../assets/hero5.svg";
import hero6 from "../assets/hero6.svg";
import hero7 from "../assets/hero7.jpg";
import { useNavigate } from "react-router-dom";
import { color } from "../redux/themeSlice";
import { useSelector,useDispatch } from "react-redux";
const About = () => {
  const company = {
    name: "My Company",
    established: 2018,
    about:
      "Founded in 2018, My Company is a leading software development and IT training organization dedicated to delivering innovative digital solutions and skill-based education. We specialize in crafting user-friendly, efficient, and scalable systems that empower businesses to grow and individuals to excel in the tech world.",
    stats: [
      { label: "Established", value: "2018" },
      { label: "Projects Completed", value: "100+" },
      { label: "Company Tie-ups", value: "300+" },
    ],
    teamIntro:
      "Our team consists of passionate professionals who bring creativity, expertise, and commitment to every project. We work together to build powerful software and deliver outstanding results.",
    team: [
      {
        name: "Sudip Kumar",
        position: "Founder & CEO",
        image: hero7,
      },
      {
        name: "Priya Sharma",
        position: "Project Manager",
        image: hero5,
      },
      {
        name: "Amit Verma",
        position: "Java Developer",
        image: hero6,
      },
      {
        name: "Riya Patel",
        position: "UI/UX Designer",
        image: hero4,
      }, {
        name: "Sudip Kumar",
        position: "Founder & CEO",
        image: hero7,
      },
      {
        name: "Priya Sharma",
        position: "Project Manager",
        image: hero5,
      },
     
    ],
  };

   const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/"); // Replace "/" with the route you want
  };

  const c=useSelector((state)=>state.theme.status)
const data=c
  return (
    <div className={`min-h-screen pt-10 sm:pt-20 relative w-full  ${data?"bg-pink-800 ":"bg-gradient-to-b from-black via-gray-900 to-black"}`}>
      {/* Company Intro Section */}
      <strong className="sm:hidden absolute top-2 left-2 text-cyan-300" onClick={handleLogo}>
        infoKey.in
      </strong>

      <div className="w-[90%] sm:w-[85%] mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-10">
          <div className="font-bold text-2xl sm:text-3xl leading-snug w-full text-cyan-300">
            My Company aims to empower businesses through innovative digital
            solutions that inspire growth and success!
          </div>
          <div className="text-sm sm:text-base font-normal text-gray-300 max-w-md">
            Our mission is simple — to transform ideas into impactful software.
            We build technology that moves your business forward.
          </div>
        </div>

        {/* About Section */}
        <div className="py-6 text-center">
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {company.about}
          </p>
        </div>

       

        {/* Our Team Section */}
        <div className="py-10">
          <h1 className="text-3xl font-bold text-center mb-3 text-cyan-300">
            Our Team
          </h1>
          <h4 className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
            {company.teamIntro}
          </h4>

          <div className="flex flex-wrap justify-center gap-10">
            {company.team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-white backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-44"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-cyan-400 shadow"
                />
                <h3 className="text-lg font-semibold text-black">
                  {member.name}
                </h3>
                <h5 className="text-sm text-gray-600">{member.position}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
