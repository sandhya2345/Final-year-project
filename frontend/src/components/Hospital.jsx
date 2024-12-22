import React from 'react'
import Navbar from './Navbar';
import doctor2 from "../assets/doctor2.jpg"

const Hospital = () => {
  return (
    <div className="relative h-full bg-gradient-to-b from-midTeal via-midTeal to-midTeal text-white pt-8">
      <Navbar />
      <div className="container mx-auto px-8 py-16">
        {/* Title and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">
            Which hospital are you looking for?
          </h1>
          <div className="flex items-end space-x-2">
            <input
              type="text"
              placeholder="Search Hospital"
              className="w-full md:w-80 p-2
              border border-gray-300 focus:outline-none
              text-black"
            />
            <button className="px-8 py-2
           bg-customTeal text-white font-semibold">
              Search
            </button>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Section */}
          <div className="w-full md:w-[30%] bg-white opacity-70 backdrop-blur-md p-6 ">
            <h2 className="text-xl font-bold mb-4 text-black
            ">Filter your search</h2>
            <div className="space-y-6">
              {/* Location Filter */}
              <div>
                <h3 className="font-semibold mb-2 text-black">Location</h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <label>
                      <input type="radio" name="location" className="mr-2" /> Kathmandu
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="location" className="mr-2" /> Pokhara
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="location" className="mr-2" /> Chitwan
                    </label>
                  </li>
                </ul>
              </div>

              {/* Specialization Filter */}
              <div>
                <h3 className="font-semibold mb-2 text-black">Specialization</h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <label>
                      <input type="checkbox" className="mr-2" /> Cardiology
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" className="mr-2" /> Neurology
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" className="mr-2" /> Orthopedics
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hospital List */}
          <div className="w-full md:w-3/4 space-y-6">
            <div className="bg-white flex items-center ">
              <div className="w-1/5 bg-gray-100 flex items-center justify-center overflow-hidden h-52">
                <img
                  src={doctor2}
                  alt="Hospital Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-8 flex-grow mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                City Hospital</h2>
                <p className="text-md text-gray-600">Location: Kathmandu, Nepal</p>
                <p className="text-md text-gray-600">Specialization: Cardiology, Neurology</p>
              </div>
              <button className=" px-4 py-3 bg-midTeal text-white mr-4">
                View Details →
              </button>
            </div>

            <div className="bg-white flex items-center ">
              <div className="w-1/5 bg-gray-100 flex items-center justify-center overflow-hidden h-52">
                <img
                  src={doctor2}
                  alt="Hospital Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-8 flex-grow mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                City Hospital</h2>
                <p className="text-md text-gray-600">Location: Kathmandu, Nepal</p>
                <p className="text-md text-gray-600">Specialization: Cardiology, Neurology</p>
              </div>
              <button className=" px-4 py-3 bg-midTeal text-white mr-4">
                View Details →
              </button>
            </div>

           
            

            
           
          </div>




        </div>
      </div>
    </div>
  )
}

export default Hospital