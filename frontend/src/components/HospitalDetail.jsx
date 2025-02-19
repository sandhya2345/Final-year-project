import React from "react";
import doctor from "../assets/doctor.jpeg";

const HospitalDetail = () => {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-midTeal p-16">
 
      <div className="md:col-span-2 bg-white shadow-lg rounded-md mt-8">
        <img src={doctor} alt="Hospital" className="w-full h-[450px] object-cover rounded-t-lg" />
        <div className="p-6 max-h-[300px] overflow-y-auto">
          <h2 className="text-2xl font-bold">City Hospital</h2>
          <p className="text-gray-600 mt-2">
            City Hospital is a leading healthcare institution known for its excellence in medical services. We offer a range of specialties, including cardiology, neurology, and orthopedics, with state-of-the-art facilities and experienced professionals.
          </p>
          <h3 className="mt-4 font-semibold ">Specializations</h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="bg-midTeal text-white px-4 py-2 rounded-md text-sm">Cardiology</span>
            <span className="bg-midTeal text-white px-4 py-2 rounded-md text-sm">Neurology</span>
            <span className="bg-midTeal text-white px-4 py-2 rounded-md text-sm">Orthopedics</span>
            <span className="bg-midTeal text-white px-4 py-2 rounded-md text-sm">Pediatrics</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg h-[450px] p-6 flex flex-col justify-between mt-8">
        <h3 className="text-xl font-bold">Similar Hospitals</h3>
        <div className="space-y-3">
          {["Everest Hospital", "Patan Hospital", "Grande Hospital", "Norvic Hospital"].map((hospital, index) => (
            <div key={index} className="flex items-center justify-between border p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <img
                  src={doctor}
                  alt="Hospital Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{hospital}</p>
                  <p className="text-sm text-gray-500">Kathmandu, Nepal</p>
                </div>
              </div>
              <button className="mt-2 text-customTeal font-semibold hover:underline">Read More →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalDetail;
