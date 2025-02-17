import React from 'react';
import { useNavigate } from 'react-router-dom';

const diseases = [
  { name: 'Diabetes', path: '/diabetes' },
  { name: 'Kidney Disease', path: '/kidney-disease' },
  { name: 'Thyroid Disorder', path: '/thyroid-disorder' },
  { name: 'Heart Disease', path: '/heart-disease' },
  { name: 'Lung Disease', path: '/liver-disease' },
  { name: 'Hypertension', path: '/hypertension' },
  { name: 'Asthma', path: '/asthma' },
  { name: 'Arthritis', path: '/arthritis' },
  { name: 'Obesity', path: '/obesity' },
  { name: 'Migraine', path: '/migraine' },

];

const PredictDisease = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-midTeal via-midTeal to-midTeal text-white justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-12 max-w-5xl mt-10">
        {diseases.map((disease, index) => (
          <div
            key={index}
            className="p-8 bg-white bg-opacity-10  shadow-lg backdrop-blur-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-opacity-20"
            onClick={() => navigate(disease.path)}
          >
            <h2 className="text-2xl font-semibold text-center">{disease.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictDisease;
