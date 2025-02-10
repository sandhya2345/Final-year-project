import React from "react";
import Navbar from "./Navbar";
import circle_image from "../assets/doctor2.jpg";
import circle_image1 from "../assets/circle_image.png";

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-midTeal via-midTeal to-midTeal text-white pt-24">
      {/* Navbar */}
      <Navbar />

      {/* Title and Slogan Section */}
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

      {/* About MedAhead Section */}
      <section
  id="about-medahead"
  className="bg-gradient-to-t from-white via-white to-white px-8 lg:px-24 py-8 text-midTeal"
>
  <div className="flex flex-col lg:flex-row items-center gap-8">
    {/* Left Content */}
    <div className="lg:w-2/3">
      <h2 className="text-4xl lg:text-5xl font-bold  text-white mb-6 text-center lg:text-left">
        About MedAhead
      </h2>
      <p className="text-lg leading-relaxed">
        MedAhead is a comprehensive healthcare platform designed to empower
        users with timely and accurate health insights. By integrating disease
        detection, hospital information, and health news, MedAhead bridges the
        gap between healthcare providers and individuals, offering a one-stop
        solution for preventive and proactive care.
      </p>
      <p className="mt-4 text-lg leading-relaxed">
        At MedAhead, we believe that informed decisions can save lives. Our
        advanced algorithms and data-driven solutions help users detect early
        signs of illness, locate specialized medical facilities, and stay
        updated with the latest developments in the medical field.
      </p>
      <p className="mt-4 text-lg leading-relaxed">
        Whether it's managing chronic conditions, seeking expert advice, or
        staying prepared for emergencies, MedAhead is your trusted partner. With
        a focus on accessibility and reliability, we strive to make quality
        healthcare available to everyone, anytime and anywhere. Join us in
        transforming the way healthcare is delivered, making it more efficient,
        personalized, and patient-centric.
      </p>
    </div>

    {/* Right Image */}
    <div className="lg:w-1/3 py-12">
      <img
        src={circle_image1}
        alt="MedAhead Overview"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
