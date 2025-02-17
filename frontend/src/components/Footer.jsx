import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midTeal text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold">MedAhead</h2>
            <p className="mt-3 text-gray-200 text-lg flex items-center gap-2">
              <Heart className="text-white" /> "Your health, our priority!"
            </p>
            <p className="mt-2 text-gray-300">
              Delivering the best medical solutions to ensure a healthier tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-3">
              <li><a href="#" className="hover:text-gray-300 text-lg">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 text-lg">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 text-lg">Services</a></li>
              <li><a href="#" className="hover:text-gray-300 text-lg">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-3 flex items-center gap-2 text-gray-200">
              <Mail /> support@medahead.com
            </p>
            <p className="mt-2 flex items-center gap-2 text-gray-200">
              <Phone /> +1 234 567 890
            </p>
            <p className="mt-2 flex items-center gap-2 text-gray-200">
              <MapPin /> 123 Health St, Itahari
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center mt-10 gap-6">
          <a href="#" className="w-12 h-12 flex items-center justify-center bg-white text-midTeal rounded-full hover:bg-gray-300 transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center bg-white text-midTeal rounded-full hover:bg-gray-300 transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center bg-white text-midTeal rounded-full hover:bg-gray-300 transition">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-10 pt-5 text-center text-gray-300 text-lg">
          © {new Date().getFullYear()} MedAhead. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
