import React from "react";
import { useSelector } from "react-redux";

const Contacts = () => {
  const col = useSelector((state) => state.theme.status);

  // Sample contact data
  const contacts = [
    {
      id: 1,
      name: "Sudip Kumar",
      email: "sudip@example.com",
      phone: "+91 9876543210",
    },
    {
      id: 2,
      name: "Jayesh Patel",
      email: "jayesh@example.com",
      phone: "+91 9123456780",
    },
    {
      id: 3,
      name: "Anjali Singh",
      email: "anjali@example.com",
      phone: "+91 9988776655",
    },
    {
      id: 4,
      name: "Rohit Kumar",
      email: "rohit@example.com",
      phone: "+91 9871122334",
    },
     {
      id: 4,
      name: "Rohit Kumar",
      email: "rohit@example.com",
      phone: "+91 9871122334",
    },
  ];

  return (
    <div className={`min-h-screen p-4 ${col ? "bg-pink-950" : "bg-blue-950"}`}>
      <h1 className="text-white text-3xl font-bold text-center mb-6">
        Contacts Page
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-blue-100 rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-semibold">{contact.name}</h2>
            <p className="text-gray-700">Email: {contact.email}</p>
            <p className="text-gray-700">Phone: {contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
