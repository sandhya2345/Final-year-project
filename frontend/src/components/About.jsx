import React from 'react';
import Navbar from './Navbar';
import circle_image from "../assets/circle_image.png";

const About = () => {
  return (
    <div className="relative h-full bg-gradient-to-r from-customTeal via-midTeal to-lightGray text-white pt-24">
      <section id="about">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start mt-6">
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
                <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                <h3 className="text-2xl font-bold">Advanced Disease Detection</h3>
                </div>
                <p className="text-lg mb-6">MedAhead utilizes cutting-edge machine learning technologies to detect diseases like diabetes and breast cancer. By analyzing patient data and medical images, the platform ensures early detection, accurate diagnostics to improve health outcomes.</p>
             

              <div className="flex items-center space-x-3 mb-4">
                <svg class="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <path d="M6 10h4m-2 -2v4" /></svg>
                <h3 className="text-2xl font-bold">Personalized Health Recommendations</h3>
              </div>
              <p className="text-lg mb-6">
                Get tailored health advice and lifestyle suggestions based on your medical history and detected conditions, ensuring optimal care.
              </p>

              <div className="flex items-center space-x-3 mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
