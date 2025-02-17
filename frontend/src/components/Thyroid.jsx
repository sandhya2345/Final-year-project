import React, { useState } from 'react';
import axios from 'axios';

const Thyroid = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [tt4, setTt4] = useState('');
  const [t3, setT3] = useState('');
  const [t4u, setT4u] = useState('');
  const [fti, setFti] = useState('');
  const [tsh, setTsh] = useState('');
  const [pregnant, setPregnant] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      Age: age,
      Sex: sex,
      TT4: tt4,
      T3: t3,
      T4U: t4u,
      FTI: fti,
      TSH: tsh,
      Pregnant: pregnant,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/thyroid/api/predict/', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      setPrediction(response.data.message); // Store the exact message from backend
    } catch (error) {
      console.error('Error predicting thyroid:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-midTeal via-midTeal to-midTeal text-white">
      <div className="w-3/4 ml-[12%] flex justify-center items-center py-20">
        <div className="w-[80%] bg-white bg-opacity-0 p-4 rounded-sm">
          <h1 className="text-4xl font-bold mb-6 text-white text-center">Thyroid Prediction System</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium text-white">Age:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Sex (M/F):</label>
                <input
                  type="text"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">TT4 (Total T4):</label>
                <input
                  type="number"
                  value={tt4}
                  onChange={(e) => setTt4(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">T3 (Triiodothyronine):</label>
                <input
                  type="number"
                  value={t3}
                  onChange={(e) => setT3(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">T4U (Thyroxine Uptake):</label>
                <input
                  type="number"
                  value={t4u}
                  onChange={(e) => setT4u(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">FTI (Free Thyroxine Index):</label>
                <input
                  type="number"
                  value={fti}
                  onChange={(e) => setFti(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">TSH (Thyroid Stimulating Hormone):</label>
                <input
                  type="number"
                  value={tsh}
                  onChange={(e) => setTsh(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-white">Pregnant (1 for Yes, 0 for No):</label>
                <input
                  type="number"
                  value={pregnant}
                  onChange={(e) => setPregnant(e.target.value)}
                  className="w-full mt-2 px-4 py-2 text-black border rounded"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-1/3 bg-white hover:bg-teal-600 text-customTeal py-2 px-4 rounded mt-4 mx-auto block"
            >
              Predict
            </button>
          </form>

          {prediction && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-white">
                Prediction: {prediction}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Thyroid;
