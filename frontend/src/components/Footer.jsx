import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midTeal text-white py-14">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            "Your Health, Our Priority!"
          </h2>
          <p className="text-lg md:text-xl mt-2 text-gray-200 max-w-3xl mx-auto">
            Delivering the best medical solutions to ensure a healthier tomorrow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold">MedAhead</h2>
            <p className="mt-3 text-gray-200 flex items-center gap-2 text-lg">
              <Heart className="text-white" /> Dedicated to your well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-lg">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-2 flex items-center gap-2 text-gray-200">
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
        <div className="flex justify-center mt-8 gap-5">
          <a href="#" className="w-12 h-12 flex items-center justify-center bg-white text-midTeal rounded-full hover:bg-gray-300 transition shadow-md">
            <Facebook size={22} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center bg-white text-midTeal rounded-full hover:bg-gray-300 transition shadow-md">
            <Twitter size={22} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center bg-white text-midTeal rounded-full hover:bg-gray-300 transition shadow-md">
            <Linkedin size={22} />
          </a>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-300 text-lg">
          © {new Date().getFullYear()} MedAhead. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
