import React, { useState } from 'react';
import axios from 'axios';

const Kidney = () => {
  const [formData, setFormData] = useState({
    age: '',
    blood_pressure: '',
    specific_gravity: '',
    albumin: '',
    sugar: '',
    red_blood_cells: '',
    pus_cell: '',
    pus_cell_clumps: '',
    bacteria: '',
    blood_glucose_random: '',
    blood_urea: '',
    serum_creatinine: '',
    sodium: '',
    potassium: '',
    haemoglobin: '',
    packed_cell_volume: '',
    white_blood_cell_count: '',
    red_blood_cell_count: '',
    hypertension: '',
    diabetes_mellitus: '',
    coronary_artery_disease: '',
    appetite: '',
    peda_edema: '',
    aanemia: '',
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/diseases/predict/kidney/', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setPrediction(response.data.message);
    } catch (error) {
      console.error('Error predicting kidney disease:', error.response ? error.response.data : error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-midTeal via-midTeal to-midTeal text-white">
      <div className="w-3/4 ml-[12%] flex justify-center items-center py-20">
        <div className="w-[80%] bg-white bg-opacity-0 p-4 rounded-sm">
          <h1 className="text-4xl font-bold mb-6 text-white text-center">Kidney Disease Prediction System</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              {Object.keys(formData).map((key) => (
                <div key={key}>
                  <label className="block text-lg font-medium text-white">{key.replace(/_/g, ' ')}:</label>
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-2 text-black border rounded"
                  />
                </div>
              ))}
            </div>
            <button type="submit" className="w-1/3 bg-white hover:bg-teal-600 text-customTeal py-2 px-4 rounded mt-4 mx-auto block">
              Predict
            </button>
          </form>
          {prediction && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-white">Prediction: {prediction}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Kidney;
