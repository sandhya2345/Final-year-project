import React from 'react';
import Navbar from './Navbar';
import AI from "../assets/AI.jpg"
import doctor from "../assets/doctor.jpeg"
import man from "../assets/man.jpg"
import fitness from "../assets/fitness.jpg"
import image from "../assets/image.jpg"
import grandma from "../assets/grandma.jpg"
import circle_image from "../assets/circle_image.png"
import doctor2 from "../assets/doctor2.jpg"
import bp from "../assets/bp.jpg"
import Footer from './Footer';

const Home = () => {
  return (
    <div className="relative h-[110vh] bg-gradient-to-r from-midTeal via-midTeal to-white text-white pt-24">
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between h-full px-4 lg:px-16">
        <div className="max-w-xl text-center lg:text-left mb-24">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Transforming Disease Detection with Advanced Technology
          </h1>
          <p className="text-lg mb-6">
            Seamlessly integrating cutting-edge innovation with patient-centered care, empowering healthcare teams to deliver precise, value-driven diagnostic excellence. Greatest way to invoke people ideas and great acheivement as its followed with a companion
          </p>
          <button className="px-6 py-3 bg-white text-customTeal font-semibold rounded-md shadow-md hover:bg-teal-100 transition">
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
              src={man}
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
      <section className="bg-white text-customTeal text-left py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/2 px-4">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why MedAhead?</h2>
            <p className="text-3xl mt-12">
              <span className="text-3xl lg:text-5xl font-bold">90%</span> of patients using MedAhead
              are satisfied with their recovery.
            </p>
          </div>
          <div className="lg:w-1/2 px-12 mt-16">
            <p className="text-xl font-medium">
              MedAhead enhances healthcare accessibility by integrating disease detection,
              hospital information, and real-time health updates. Our platform bridges the
              gap between healthcare providers and individuals, ensuring a seamless experience
              for preventive and proactive care.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white to-lightBlue text-customTeal py-2">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 px-4">
            <h2 className="text-3xl lg:text-5xl font-medium mb-6">
              Shift care to the home without sacrificing quality
            </h2>
            <p className="text-xl mb-6">
              Improve provider efficiency with Clinical Intelligence, utilizing aggregate and patient-level
              data to automatically identify education needs, boost engagement, and accelerate the recovery journey for each patient.
            </p>
            <button className="bg-customTeal text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-darkTeal transition">
              Learn More →
            </button>
          </div>

          {/* Right Circular Image */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
            <div className="relative w-80 h-80 rounded-full border-2 border-teal-100 flex items-center justify-center">
              <img
                src={circle_image}
                alt="Patient using MedAhead"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute w-full h-full border-4 border-dotted border-teal-100 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center py-6">
          {/* Left Content */}
          <div className="lg:w-1/2 px-4">
            <h2 className="text-3xl lg:text-5xl font-medium mb-6">
              Shift care to the home without sacrificing quality
            </h2>
            <p className="text-xl mb-6">
              Improve provider efficiency with Clinical Intelligence, utilizing aggregate and patient-level
              data to automatically identify education needs, boost engagement, and accelerate the recovery journey for each patient.
            </p>
            <button className="bg-customTeal text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-darkTeal transition">
              Learn More →
            </button>
          </div>

          {/* Right Circular Image */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
            <div className="relative w-80 h-80 rounded-full border-2 border-teal-100 flex items-center justify-center">
              <img
                src={circle_image}
                alt="Patient using MedAhead"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute w-full h-full border-4 border-dotted border-teal-100 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-customTeal text-left py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-12 text-center">Our Services</h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {[
              { name: "Book Appointment", icon: "📅" },
              { name: "Disease Prediction", icon: "🔬" },
              { name: "Hospitals Nearby", icon: "🏥" },
              { name: "News & Articles", icon: "📰" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-midTeal text-white rounded-lg p-8 transform transition duration-500 hover:scale-105 hover:bg-customTeal hover:shadow-xl"
              >
                <div className="text-5xl mb-4 transition duration-300 ease-in-out hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold">{service.name}</h3>
              </div>
            ))}
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
      <section className="bg-white text-customTeal py-16 h-screen">
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
      <Footer />
    </div>

  );
};

export default Home;
