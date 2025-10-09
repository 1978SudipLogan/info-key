import React from "react";
import '../index.css'
import { useNavigate } from "react-router-dom";
import { color } from "../redux/themeSlice";
import { useSelector,useDispatch } from "react-redux";

const Contacts = () => {
  const contacts = [
    { id: 1, name: "Sudip Kumar", email: "sudip@example.com", phone: "+91 9876543210" },
    { id: 2, name: "Jayesh Patel", email: "jayesh@example.com", phone: "+91 9123456780" },
    { id: 3, name: "Anjali Singh", email: "anjali@example.com", phone: "+91 9988776655" },
    { id: 4, name: "Rohit Kumar", email: "rohit@example.com", phone: "+91 9871122334" },
    { id: 5, name: "Priya Sharma", email: "priya@example.com", phone: "+91 9988112233" },
  ];

  // Function to get initials from name
  const getInitials = (name) => {
    const names = name.split(" ");
    return names.map(n => n[0]).join("");
  };
 const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/"); // Replace "/" with the route you want
  };

   const c=useSelector((state)=>state.theme.status)
  const data=c
  return (
    <div className={`min-h-screen  pt-20 ${data?"bg-pink-800 ":"bg-gradient-to-b from-black via-gray-900 to-black"}`}>
       <strong className="sm:hidden absolute top-2 left-2 text-cyan-300" onClick={handleLogo}>
          infoKey.in
        </strong>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-300 tracking-wide  text-center mb-10">
        Contacts
      </h1>

      <div className="flex  flex-wrap gap-6 space-x-10  px-6 ">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className=" bg-white bg-opacity-50 w-56 mx-auto rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className=" w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
              {getInitials(contact.name)}
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{contact.name}</h2>
            <p className="text-gray-600 mt-2 text-sm">📧 {contact.email}</p>
            <p className="text-gray-600 mt-1 text-sm">📞 {contact.phone}</p>
            <button className="mt-4 but px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Contact
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
