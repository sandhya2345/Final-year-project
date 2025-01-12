import React from "react";
import Navbar from "./Navbar";
import circle_image from "../assets/circle_image.png";

const About = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-midTeal via-midTeal to-midTeal text-white pt-24">
      <section id="about" className="px-8 lg:px-12 text-center lg:text-center">
        {/* Title and Slogan */}
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
      
    </div>
  );
};

export default About;
