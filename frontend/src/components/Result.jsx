import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message || 'No result available';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-midTeal text-white">
      <h1 className="text-4xl font-bold mb-6">Prediction Result</h1>
      <p className="text-2xl mb-4">{message}</p>
      <button
        onClick={() => navigate('/')}
        className="bg-white hover:bg-red-600 text-red-700 py-2 px-4 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default Result;
