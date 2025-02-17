import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import doctor2 from "../assets/nepal_medical.png";

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Fetching hospital data from the backend API
    fetch("http://localhost:8000/hospitals/api/hospitals/")
      .then(response => response.json())
      .then(data => setHospitals(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="relative h-full bg-gradient-to-b from-midTeal via-midTeal to-midTeal text-white">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="container mx-auto px-8 py-32">
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
            <button className="px-8 py-2 bg-customTeal text-white font-semibold hover:bg-teal-600 transition">
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Hospital List */}
          <div className="w-full md:w-3/4 space-y-6">
            {hospitals.map((hospital, index) => (
              <div key={hospital.id} className="bg-white flex items-center shadow-md rounded">
                <div className="w-1/5 bg-gray-100 flex items-center justify-center overflow-hidden h-52">
                  <img
                    src={hospital.image}
                    alt="Hospital Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-8 flex-grow mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">{hospital.name}</h2>
                  <p className="text-md text-gray-600">Location: {hospital.location}</p>
                  <p className="text-md text-gray-600">Specialization: {hospital.specialization}</p>
                </div>
                <button className="px-4 py-3 bg-midTeal text-white mr-4 rounded hover:bg-teal-600 transition">
                  View Details →
                </button>
              </div>
            ))}
          </div>

          {/* Filter Section */}
          <div className="w-full md:w-[30%] bg-white text-black opacity-100 backdrop-blur-md p-6 shadow-md h-auto max-h-[450px] overflow-auto">
            {/* Filter Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
