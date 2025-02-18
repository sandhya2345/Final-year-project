import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Manage current page
  const [hospitalsPerPage] = useState(3); // Number of hospitals per page

  useEffect(() => {
    // Fetching hospital data from the backend API
    fetch("http://localhost:8000/hospitals/api/hospitals/")
      .then((response) => response.json())
      .then((data) => {
        setHospitals(data);
        setFilteredHospitals(data);  // Initially, display all hospitals
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Apply filters when any of the filter states change
    setFilteredHospitals(
      hospitals.filter((hospital) => {
        const nameMatch =
          hospital.name.toLowerCase().includes(nameFilter.toLowerCase());
        const locationMatch =
          hospital.location.toLowerCase().includes(locationFilter.toLowerCase());
        const specializationMatch =
          hospital.specialization.toLowerCase().includes(specializationFilter.toLowerCase());

        return nameMatch && locationMatch && specializationMatch;
      })
    );
  }, [nameFilter, locationFilter, specializationFilter, hospitals]);

  // Logic for displaying hospitals for the current page
  const indexOfLastHospital = currentPage * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;
  const currentHospitals = filteredHospitals.slice(indexOfFirstHospital, indexOfLastHospital);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredHospitals.length / hospitalsPerPage);

  return (
    <div className="relative h-full bg-gradient-to-b from-midTeal via-midTeal to-midTeal text-white">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="container mx-auto px-12 py-32">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">
            Which hospital are you looking for?
          </h1>
          <div className="flex items-end space-x-2">
            <input
              type="text"
              placeholder="Search by Hospital Name"
              className="w-full md:w-80 p-2 border border-gray-300 focus:outline-none text-black"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
            <button className="px-8 py-2 bg-customTeal text-white font-semibold hover:bg-teal-600 transition">
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Hospital List */}
          <div className="w-full md:w-3/4 space-y-6">
            {currentHospitals.map((hospital) => (
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
            {/* You can add custom filter controls here */}
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div>
              <label className="block mb-2">Hospital Name</label>
              <input
                type="text"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                placeholder="Filter by name"
                className="w-full p-2 border border-gray-300"
              />
            </div>
            <div>
              <label className="block mb-2">Location</label>
              <input
                type="text"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                placeholder="Filter by location"
                className="w-full p-2 border border-gray-300"
              />
            </div>
            <div>
              <label className="block mb-2">Specialization</label>
              <input
                type="text"
                value={specializationFilter}
                onChange={(e) => setSpecializationFilter(e.target.value)}
                placeholder="Filter by specialization"
                className="w-full p-2 border border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
          >
            Previous
          </button>
          <span className="text-white">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
