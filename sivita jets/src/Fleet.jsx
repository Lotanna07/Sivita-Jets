import React from 'react';

function Fleet({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <button
          onClick={onBack}
          className="mb-6 text-blue-600 hover:underline flex items-center gap-2"
        >
          ← Back
        </button>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ fontFamily: "Apple Garamond, serif" }}>
          Our Fleet
        </h1>
        <p className="text-lg text-gray-700 text-center" style={{ fontFamily: "Afacad, sans-serif" }}>
          Add your fleet details, aircraft images, and specifications here.
        </p>
      </div>
    </div>
  );
}

export default Fleet;