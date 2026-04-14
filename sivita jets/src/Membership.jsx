import React from 'react';

function Membership({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <button 
        onClick={onBack}
        className="m-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to Home
      </button>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ fontFamily: "Apple Garamond, serif" }}>
          Membership
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto" style={{ fontFamily: "Afacad, sans-serif" }}>
          This is your new membership page. Add all the membership details, cards, and content here.
        </p>
        {/* You can copy the membership cards from your homepage if you want */}
      </div>
    </div>
  );
}

export default Membership;