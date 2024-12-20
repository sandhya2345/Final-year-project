import React from 'react';
import Navbar from './Navbar';
import AI from "../assets/AI.jpg"
import doctor from "../assets/doctor.jpg"
import healthy from "../assets/healthy.jpg"
import fitness from "../assets/fitness.jpg"
import image from "../assets/image.jpg"
import grandma from "../assets/grandma.jpg"

const Home = () => {
  return (
    <div className="relative h-[120vh] bg-gradient-to-r from-midTeal via-midTeal to-white text-white pt-8">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between h-full px-4 lg:px-16">
        <div className="max-w-xl text-center lg:text-left mb-32">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Transforming Disease Detection with Advanced Technology
          </h1>
          <p className="text-lg mb-6">
            Seamlessly integrating cutting-edge innovation with patient-centered care, empowering healthcare teams to deliver precise, value-driven diagnostic excellence.
          </p>
          <button className="px-6 py-3 bg-white text-customTeal font-lg rounded-md shadow-md hover:bg-teal-100 transition">
            Book A Demo
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center mb-12">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={image}
              alt="Placeholder 1"
              className="w-32 h-40 lg:w-44 lg:h-60 rounded-lg object-cover shadow-lg mb-32 ml-60"
            />
            <img
              src={fitness}
              alt="Placeholder 1"
              className="w-32 h-40 lg:w-44 lg:h-60 rounded-lg object-cover shadow-lg mt-32 ml-32"
            />

            <img
              src={grandma}
              alt="Placeholder 1"
              className="w-32 h-40 lg:w-44 lg:h-60 rounded-lg object-cover shadow-lg ml-60 -mt-32"
            />
            <div className="relative">
              <img
                src={healthy}
                alt="Placeholder 1"
                className="absolute w-32 h-40 lg:w-44 lg:h-60 rounded-lg object-cover shadow-lg"
                style={{ top: "-16rem", left: "-17rem" }}
              />
            </div>

          </div>
        </div>

      </section>

      {/* About Section */}
      <section className="bg-gradient-to-r from-white via-white to-midTeal text-customTeal py-16 h-screen">
        <div className="max-w-3xl mx-20 text-left">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Why MedAhead ?</h2>
          <p className="text-lg mb-8">
            At MedAhead, our mission is to revolutionize disease detection through the integration of state-of-the-art technology and a patient-centered approach. Our team of experts collaborates tirelessly to develop solutions that aid healthcare providers in achieving unparalleled diagnostic accuracy and efficiency.
          </p>
          <button className="px-6 py-2 bg-customTeal text-white font-medium rounded-md shadow-md hover:bg-teal-100 transition">
            Read More →
          </button>
        </div>
      </section>

      {/* Hospital Section */}

      <section className="bg-gradient-to-r from-customTeal via-midTeal to-gray-200 text-gray-800 py-16">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold mb-12 text-white text-left">
            List of Hospitals
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">

              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src={AI}
                  alt="Hospital Name"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">City Hospital</h3>
                <p className="text-sm text-gray-600 mb-4">Kathmandu, Nepal</p>
                <button className="px-4 py-2 bg-customTeal text-white text-sm font-medium rounded-md hover:bg-teal-600 transition">
                  View Details
                </button>
              </div>
            </div>


            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src={doctor}
                  alt="Hospital Name"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">National Hospital</h3>
                <p className="text-sm text-gray-600 mb-4">Kathmandu</p>
                <button className="px-4 py-2 bg-customTeal text-white text-sm font-medium rounded hover:bg-teal-600 transition">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src={doctor}
                  alt="Hospital Name"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Nobel Hospital</h3>
                <p className="text-sm text-gray-600 mb-4">Biratnagar</p>
                <button className="px-4 py-2 bg-customTeal text-white text-sm font-medium rounded hover:bg-teal-600 transition">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <img
                  src={image}
                  alt="Hospital Name"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">City hospital</h3>
                <p className="text-sm text-gray-600 mb-4">Kathmandu</p>
                <button className="px-4 py-2 bg-customTeal text-white text-sm font-medium rounded hover:bg-teal-600 transition">
                  View Details
                </button>
              </div>
            </div>

            





          </div>
        </div>
      </section>



      {/*News section */}
      <section className="bg-gradient-to-r from-white via-white to-midTeal text-customTeal py-16 h-screen">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold mb-12 text-left">
            News and Articles
          </h2>

          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-2/3 h-100 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={AI}
                alt="AI Image"
                className="object-cover w-full h-full"
              />
            </div>


            <div className="lg:w-1/2 text-left text-black">
              <h3 className="text-2xl font-semibold mb-4">
                Artificial Intelligence (AI) Integration:
              </h3>
              <p className="text-lg mb-8 leading-relaxed">
                AI continues to revolutionize healthcare by improving diagnostic accuracy,
                optimizing administrative processes, and enhancing patient care. Predictive AI
                tools are being developed to forecast patient needs and streamline hospital
                resources, making healthcare more efficient and personalized.
              </p>
              <button className="px-6 py-3 bg-white text-customTeal font-medium rounded-md shadow-md hover:bg-teal-100 transition">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
