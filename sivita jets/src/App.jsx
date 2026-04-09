import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [fromCountry, setFromCountry] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const languages = ['English', 'Español', '日本語', 'العربية', 'Français', 'Português'];

  // 50 countries list
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Portugal',
    'Netherlands', 'Switzerland', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Ireland', 'Belgium',
    'Austria', 'Greece', 'Turkey', 'Poland', 'Czech Republic', 'Hungary', 'Romania', 'Russia',
    'China', 'Japan', 'South Korea', 'India', 'Indonesia', 'Malaysia', 'Thailand', 'Vietnam',
    'Philippines', 'Singapore', 'Australia', 'New Zealand', 'South Africa', 'Egypt', 'Morocco',
    'Kenya', 'Nigeria', 'Brazil', 'Argentina', 'Mexico', 'Colombia', 'Chile', 'Peru',
    'United Arab Emirates', 'Saudi Arabia', 'Qatar'
  ];

  const decreasePassengers = () => {
    if (passengers > 1) setPassengers(passengers - 1);
  };

  const increasePassengers = () => {
    if (passengers < 14) setPassengers(passengers + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Menu Icon + Nav Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul className="flex gap-6" style={{ fontFamily: "Apple Garamond, sans-serif" }}>
              <li><a href="#" className="hover:text-blue-600">Membership</a></li>
              <li><a href="#" className="hover:text-blue-600">Fleet</a></li>
              <li><a href="#" className="hover:text-blue-600">Experience</a></li>
            </ul>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src="logo.png" alt="Airline Logo" className="h-20 w-auto" />
          </div>

          {/* Right: Language + Auth buttons */}
          <div className="flex items-center gap-4">
            {/* World Icon Dropdown */}
            <div className="relative group">
              <button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      style={{ fontFamily: "Afacad, sans-serif" }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 transition"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Sign In
            </button>
            <button
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="absolute inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl transform transition-transform">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">
              <ul className="space-y-6" style={{ fontFamily: "Apple Garamond, sans-serif" }}>
                <li><a href="#" className="block text-xl hover:text-blue-600" onClick={() => setMenuOpen(false)}>Membership</a></li>
                <li><a href="#" className="block text-xl hover:text-blue-600" onClick={() => setMenuOpen(false)}>Fleet</a></li>
                <li><a href="#" className="block text-xl hover:text-blue-600" onClick={() => setMenuOpen(false)}>Experience</a></li>
              </ul>
              <hr className="my-4" />
              <div>
                <p className="text-sm font-semibold mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>Language</p>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setMenuOpen(false);
                      }}
                      className="block w-full text-left text-sm text-gray-600 hover:text-blue-600"
                      style={{ fontFamily: "Afacad, sans-serif" }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
              <hr className="my-4" />
              <div className="space-y-3">
                <button
                  className="w-full px-4 py-2 rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 transition"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </button>
                <button
                  className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION WITH VIDEO */}
      <header className="relative h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="https://placehold.co/1920x1080"
        >
          <source src="airline.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
            Sky Luxury Made Seamless
          </h1>
          <p className="text-xl md:text-2xl" style={{ fontFamily: "Apple Garamond, sans-serif" }}>
            Plan a flight and spend hours you need
          </p>
          <p className="text-xl md:text-2xl" style={{ fontFamily: "Apple Garamond, sans-serif" }}>
            Membership without fees
          </p>
        </div>
      </header>

      {/* FLIGHT SEARCH FORM – with passenger box where search button used to be */}
      <section className="max-w-5xl mx-auto -mt-16 bg-white rounded-xl shadow-xl p-6 relative z-10">
        <h2 className="text-2xl mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>Book your flight</h2>

        {/* Round Trip Checkbox */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            id="roundTrip"
            checked={isRoundTrip}
            onChange={(e) => setIsRoundTrip(e.target.checked)}
            className="w-4 h-4 text-blue-600"
          />
          <label htmlFor="roundTrip" className="text-sm" style={{ fontFamily: "Afacad, sans-serif" }}>
            Round trip
          </label>
        </div>

        {/* Main Grid – dynamic for one‑way / round trip */}
        {!isRoundTrip ? (
          // ONE-WAY: 4 columns: From, To, Departure Date, Passenger Box
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              value={fromCountry}
              onChange={(e) => setFromCountry(e.target.value)}
              className="border p-2 rounded bg-white"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              <option value="">From</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <select
              value={toCountry}
              onChange={(e) => setToCountry(e.target.value)}
              className="border p-2 rounded bg-white"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              <option value="">To</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="border p-2 rounded"
            />

            {/* Passenger Box (styled like an input) */}
            <div className="border p-2 rounded bg-white flex items-center justify-between gap-2">
              <span className="text-sm text-gray-600" style={{ fontFamily: "Afacad, sans-serif" }}>
                Passengers:
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreasePassengers}
                  className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                  disabled={passengers <= 1}
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">{passengers}</span>
                <button
                  onClick={increasePassengers}
                  className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                  disabled={passengers >= 14}
                >
                  +
                </button>
              </div>
              <span className="text-xs text-gray-500"></span>
            </div>
          </div>
        ) : (
          // ROUND TRIP: 4 columns: From, To, Departure Date, Return Date
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              value={fromCountry}
              onChange={(e) => setFromCountry(e.target.value)}
              className="border p-2 rounded bg-white"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              <option value="">From</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <select
              value={toCountry}
              onChange={(e) => setToCountry(e.target.value)}
              className="border p-2 rounded bg-white"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              <option value="">To</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="border p-2 rounded"
            />

            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="border p-2 rounded"
            />
          </div>
        )}

        {/* Row below the grid: For round trip, show passenger box + search button. For one‑way, only search button. */}
        <div className="mt-4">
          {isRoundTrip && (
            <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Passenger Box for round trip */}
              <div className="border p-2 rounded bg-white flex items-center gap-3 w-full sm:w-auto">
                <span className="text-sm text-gray-600" style={{ fontFamily: "Afacad, sans-serif" }}>
                  Passengers:
                </span>
                <button
                  onClick={decreasePassengers}
                  className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                  disabled={passengers <= 1}
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">{passengers}</span>
                <button
                  onClick={increasePassengers}
                  className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                  disabled={passengers >= 14}
                >
                  +
                </button>
                <span className="text-xs text-gray-500">Max 14</span>
              </div>
            </div>
          )}

          {/* Search Button – always below everything */}
          <button className="w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </section>

      {/* Small world text */}
      <div className="text-center mt-12 text-gray-600" style={{ fontFamily: "Afacad, sans-serif" }}>
        <p>Small world. Big adventures.</p>
        <p className="text-xs mt-1">Current language: {language}</p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8 text-center" style={{ fontFamily: "Afacad, sans-serif" }}>
        <p>&copy; 2025 Airline. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;