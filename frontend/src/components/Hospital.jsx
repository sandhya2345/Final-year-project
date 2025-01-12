import React from "react";
import Navbar from "./Navbar";
import doctor2 from "../assets/doctor2.jpg";

const Hospital = () => {
  return (
    <div className="relative h-full bg-gradient-to-b from-midTeal via-midTeal to-midTeal text-white">
      {/* Navbar fixed at the top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="container mx-auto px-8 py-32">
        {/* Search Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">
            Which hospital are you looking for?
          </h1>
          <div className="flex items-end space-x-2">
            <input
              type="text"
              placeholder="Search Hospital"
              className="w-full md:w-80 p-2 border border-gray-300 focus:outline-none text-black"
            />
            <button className="px-8 py-2 bg-customTeal text-white font-semibold  hover:bg-teal-600 transition">
              Search
            </button>
          </div>
        </div>

        {/* Layout with Filter and Hospital List */}
        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Hospital List */}
          <div className="w-full md:w-3/4 space-y-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white flex items-center shadow-md rounded"
              >
                <div className="w-1/5 bg-gray-100 flex items-center justify-center overflow-hidden h-52">
                  <img
                    src={doctor2}
                    alt="Hospital Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-8 flex-grow mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    City Hospital {index + 1}
                  </h2>
                  <p className="text-md text-gray-600">
                    Location: Kathmandu, Nepal
                  </p>
                  <p className="text-md text-gray-600">
                    Specialization: Cardiology, Neurology
                  </p>
                </div>
                <button className="px-4 py-3 bg-midTeal text-white mr-4 rounded hover:bg-teal-600 transition">
                  View Details →
                </button>
              </div>
            ))}
          </div>

          {/* Filter Section (on the right side with dropdowns) */}
          <div className="w-full md:w-[30%] bg-white  text-black opacity-100 backdrop-blur-md p-6 shadow-md h-auto max-h-[450px] overflow-auto">
            <h2 className="text-xl font-bold mb-4 text-black">Filter</h2>
            <div className="space-y-6">
              {/* Location Dropdown */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Location
                </label>
                <select
                  id="location"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="all">All</option>
                  <option value="kathmandu">Kathmandu</option>
                  <option value="pokhara">Pokhara</option>
                  <option value="chitwan">Chitwan</option>
                </select>
              </div>

              {/* Specialization Dropdown */}
              <div>
                <label
                  htmlFor="specialization"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Specialization
                </label>
                <select
                  id="specialization"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="all">All</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                </select>
              </div>

              {/* Hospital Type Dropdown */}
              <div>
                <label
                  htmlFor="hospitalType"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Hospital Type
                </label>
                <select
                  id="hospitalType"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="all">All</option>
                  <option value="general">General</option>
                  <option value="specialized">Specialized</option>
                  <option value="clinic">Clinic</option>
                </select>
              </div>

              {/* Apply Filters Button */}
              <button className="w-full bg-customTeal text-white font-bold py-2 rounded hover:bg-teal-600 transition">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
