import React, { useState } from 'react';

const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'ja', name: '日本語' },
  { code: 'ar', name: 'العربية' },
  { code: 'fr', name: 'Français' },
  { code: 'pt', name: 'Português' },
];

function Experience({ onBack, language = 'en', setLanguage, onFleetClick, onMembershipClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (langCode) => {
    if (setLanguage) setLanguage(langCode);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setMenuOpen(true)} className="p-2 rounded-md hover:bg-gray-100 focus:outline-none" aria-label="Menu">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul className="flex gap-6" style={{ fontFamily: "Apple Garamond, sans-serif" }}>
              <li><button onClick={onBack} className="hover:text-blue-600">Home</button></li>
              <li><button onClick={onFleetClick} className="hover:text-blue-600">Fleet</button></li>
              <li><span className="cursor-default">Experience</span></li>
            </ul>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src="logo.png" alt="Airline Logo" className="h-20 w-auto" />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                <div className="py-1">
                  {languageOptions.map((lang) => (
                    <button key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" style={{ fontFamily: "Afacad, sans-serif" }}>{lang.name}</button>
                  ))}
                </div>
              </div>
            </div>
            <button className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 transition" style={{ fontFamily: "Afacad, sans-serif" }}>Sign In</button>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition" style={{ fontFamily: "Afacad, sans-serif" }}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMenuOpen(false)}></div>
          <div className="absolute inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl">
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">
              <ul className="space-y-6" style={{ fontFamily: "Apple Garamond, sans-serif" }}>
                <li><button onClick={() => { onBack(); setMenuOpen(false); }} className="block text-xl hover:text-blue-600">Home</button></li>
                <li><button onClick={() => { onFleetClick(); setMenuOpen(false); }} className="block text-xl hover:text-blue-600">Fleet</button></li>
                <li><span className="block text-xl cursor-default">Experience</span></li>
              </ul>
              <hr className="my-4" />
              <div>
                <p className="text-sm font-semibold mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>Language</p>
                <div className="space-y-2">
                  {languageOptions.map((lang) => (
                    <button key={lang.code} onClick={() => { handleLanguageChange(lang.code); setMenuOpen(false); }} className="block w-full text-left text-sm text-gray-600 hover:text-blue-600" style={{ fontFamily: "Afacad, sans-serif" }}>{lang.name}</button>
                  ))}
                </div>
              </div>
              <hr className="my-4" />
              <div className="space-y-3">
                <button className="w-full px-4 py-2 rounded-md border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 transition" style={{ fontFamily: "Afacad, sans-serif" }}>Sign In</button>
                <button className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition" style={{ fontFamily: "Afacad, sans-serif" }}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== BIG IMAGE HERO ========== */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="richard.jpg"
          alt="Luxury flight experience"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-between items-center text-center px-4 py-12">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
              The ultimate cabin experience
            </h1>
            <p className="text-xl md:text-2xl text-white" style={{ fontFamily: "Afacad, sans-serif" }}>
              Tailored and unparalleled service
            </p>
          </div>
          <button className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold text-lg" style={{ fontFamily: "Afacad, sans-serif" }}>
            Enquire Now
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Apple Garamond, serif" }}>
          Private jet in-flight services
        </h1>
        <p className="text-lg text-gray-700 mb-10" style={{ fontFamily: "Afacad, sans-serif" }}>
          sivitaJet redefines private aviation with its exquisite cabin design and world-class in-flight services.
          Stepping aboard a sivitaJet aircraft is like entering a luxurious home in the sky, where every detail is
          meticulously crafted to ensure comfort, productivity, and relaxation.
        </p>

        {/* Small image */}
        <div className="flex justify-center mb-8">
          <img
            src="WhatsApp2.jpeg"
            alt="Private jet interior"
            className="w-64 rounded-lg shadow-md object-cover mx-auto"
          />
        </div>

        {/* Quote paragraph */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12" style={{ fontFamily: "Afacad, sans-serif" }}>
          "At the heart of the service provided by sivitaJet Cabin Hosts is a genuine care for passengers and
          the passion for service excellence. We want you to feel as comfortable as possible on board —
          no request is too large or too small."
        </p>

        {/* New heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center" style={{ fontFamily: "Apple Garamond, serif" }}>
          GEMMA ANNE-JONES, CABIN TRAINING & DEVELOPMENT MANAGER
        </h1>
      </div>

      {/* Footer */}
      <footer className="bg-blue-700 text-white mt-16 py-8" style={{ fontFamily: "Afacad, sans-serif" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center gap-8 mb-8">
            <button onClick={onFleetClick} className="hover:underline">Fleet</button>
            <button onClick={onMembershipClick} className="hover:underline">Membership</button>
            <span className="cursor-default">Experience</span>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
          <div className="flex justify-center gap-50 mb-10">
            <div className="text-center">
              <div>Gulfstream</div>
              <div>Dassault</div>
              <div>Cessna</div>
              <div>Bombardier</div>
              <div>Embraer</div>
            </div>
            <div className="text-center">
              <div>+645737383466</div>
              <div>+987654345679</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
            </div>
          </div>
          <div className="text-center text-sm mt-8 pt-4 border-t border-blue-500">
            &copy; 2025 Airline. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Experience;