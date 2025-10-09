import React from "react";
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { color } from "./redux/themeSlice";
import { useSelector,useDispatch } from "react-redux";
const Footer = () => {
  const col = useSelector((state) => state.theme.status);
  return (
    <footer className={` border-t-2 border-gray-500  text-white  ${col?"bg-pink-800 ":"bg-gradient-to-b from-black via-gray-900 to-black"}`}>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Therapy Center</h2>
          <p>
            Providing professional therapy services to improve mental health, reduce stress, and enhance emotional well-being.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-sky-400">Home</a></li>
            <li><a href="about" className="hover:text-sky-400">About</a></li>
            <li><a href="services" className="hover:text-sky-400">Services</a></li>
            <li><a href="contacts" className="hover:text-sky-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="flex items-center gap-2"><Phone size={18} /> +91 98765 43210</p>
          <p className="flex items-center gap-2"><Mail size={18} /> info@therapycenter.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-red-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-red-400"><Instagram size={20} /></a>
            <a href="#" className="hover:text-red-400"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Therapy Center. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
