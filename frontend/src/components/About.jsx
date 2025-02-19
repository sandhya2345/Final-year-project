import React from "react";
import Navbar from "./Navbar";
import circle_image from "../assets/doctor2.jpg";
import circle_image1 from "../assets/circle_image.png";

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-midTeal via-midTeal to-midTeal text-white pt-24">
      <Navbar />

      <section id="about" className="px-8 lg:px-12 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mt-8">
          Transforming Health Care,
        </h1>
        <h2 className="text-4xl lg:text-5xl font-light text-white mt-6">
          — One Patient at a Time
        </h2>
        <p className="mt-4 text-lg lg:text-xl text-gray-200">
          Dedicated to solving complex medical challenges with innovation,
          precision, and care.
        </p>
      </section>

      {/* Two Images Section */}
      <section
        id="about-images"
        className="flex justify-center items-center gap-4 px-24 py-12"
      >
        {/* Left Image */}
        <div className="w-1/2 relative group">
          <img
            src={circle_image}
            alt="Healthcare Transformation Left"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-semibold">Left Image Caption</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 relative group">
          <img
            src={circle_image}
            alt="Healthcare Transformation Right"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl font-semibold">Right Image Caption</p>
          </div>
        </div>
      </section>

      
     
    </div>
  );
};

export default About;
