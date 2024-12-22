import React from 'react';
import Navbar from './Navbar';
import AI from "../assets/AI.jpg"
import doctor from "../assets/doctor.jpeg"
import healthy from "../assets/healthy.jpg"
import fitness from "../assets/fitness.jpg"
import image from "../assets/image.jpg"
import grandma from "../assets/grandma.jpg"
import circle_image from "../assets/circle_image.png"
import doctor2 from "../assets/doctor2.jpg"
import bp from "../assets/bp.jpg"

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
              src={doctor}
              alt="Placeholder 1"
              className="w-32 h-40 lg:w-44 lg:h-60 rounded-lg object-cover shadow-lg mb-32 ml-60"
            />
            <img
              src={healthy}
              alt="Placeholder 1"
              className="w-32 h-40 lg:w-44 lg:h-60 rounded-lg object-cover shadow-lg mt-32 ml-32"
            />

            <img
              src={image}
              alt="Placeholder 1"
              className="w-32 h-40 lg:w-44 lg:h-60 rounded-lg object-cover shadow-lg ml-60 -mt-32"
            />
            <div className="relative">
              <img
                src={doctor2}
                alt="Placeholder 1"
                className="absolute w-32 h-40 lg:w-44 lg:h-60 rounded-lg object-cover shadow-lg"
                style={{ top: "-16rem", left: "-17rem" }}
              />
            </div>

          </div>
        </div>

      </section>

      {/* About Section */}
      <section className="bg-gradient-to-r from-white via-white to-midTeal text-customTeal py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start">

          <div className="lg:w-1/2 -px-2">
            <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Why MedAhead?</h2>
            <p className="text-lg mb-8">
              MedAhead is a comprehensive healthcare platform designed to empower
              users with timely and accurate health insights. By integrating
              disease detection, hospital information, and health news, MedAhead
              bridges the gap between healthcare providers and individuals,
              offering a one-stop solution for preventive and proactive care.
            </p>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <svg class="h-8 w-8 text-customTeal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                <h3 className="text-2xl font-bold">Advanced Disease Detection</h3>
                </div>
                <p className="text-lg mb-6">MedAhead utilizes cutting-edge machine learning technologies to detect diseases like diabetes and breast cancer. By analyzing patient data and medical images, the platform ensures early detection, accurate diagnostics to improve health outcomes.</p>
             

              <div className="flex items-center space-x-3 mb-4">
                <svg class="h-8 w-8 text-customTeal" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <path d="M6 10h4m-2 -2v4" /></svg>
                <h3 className="text-2xl font-bold">Personalized Health Recommendations</h3>
              </div>
              <p className="text-lg mb-6">
                Get tailored health advice and lifestyle suggestions based on your medical history and detected conditions, ensuring optimal care.
              </p>

              <div className="flex items-center space-x-3 mb-4">
                <svg className="h-8 w-8 text-customTeal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-2xl font-bold">Appointment Scheduling</h3>
              </div>


              <p className="text-lg mb-6">
                Schedule appointments with healthcare professionals or hospitals effortlessly through MedAhead.
              </p>

            </div>
          </div>


          <div className="lg:w-1/2 flex flex-col items-center justify-center space-y-6 px-6 mt-12 lg:mt-24">
            <img
              src={circle_image}
              alt="Disease detection"
              className="w-3/4 h-2/4 object-cover rounded-md ml-36"
            />
            {/* <img
              src={circle_image}
              alt="Medical insights"
              className="w-3/4 h-2/4 object-cover rounded-md  ml-36 flex-row-reverse"
            /> */}
          </div>
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

              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={bp}
                  alt="Hospital Name"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">BPKIHS</h3>
                <p className="text-sm text-gray-600 mb-4">Kathmandu, Nepal</p>
                <button className="px-4 py-2 bg-customTeal text-white text-sm font-medium rounded-md hover:bg-teal-600 transition">
                  View Details
                </button>
              </div>
            </div>


            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={doctor}
                  alt="Hospital Name"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Kathmandu Medical</h3>
                <p className="text-sm text-gray-600 mb-4">Kathmandu</p>
                <button className="px-4 py-2 bg-customTeal text-white text-sm font-medium rounded hover:bg-teal-600 transition">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
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
              <div className="h-48 bg-gray-200 flex items-center justify-center">
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


            <div className="lg:w-1/2 text-left text-customTeal">
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
