import React, { useState } from 'react';

const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'ja', name: '日本語' },
  { code: 'ar', name: 'العربية' },
  { code: 'fr', name: 'Français' },
  { code: 'pt', name: 'Português' },
];

function Fleet({ onBack, language = 'en', setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    flyPrivate: '',
    currentSolution: '',
    hearAbout: '',
    message: '',
    marketingConsent: false,
    privacyConsent: false
  });

  const flyPrivateOptions = [
    'Less than once a year',
    '1-2 times per year',
    '3-5 times per year',
    '6-10 times per year',
    'More than 10 times per year'
  ];

  const hearAboutOptions = [
    'Search Engine',
    'Social Media',
    'Referral',
    'Advertisement',
    'Event',
    'Other'
  ];

  const handleLanguageChange = (langCode) => {
    if (setLanguage) setLanguage(langCode);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you soon.');
    setFormData({
      firstName: '', lastName: '', phone: '', email: '',
      flyPrivate: '', currentSolution: '', hearAbout: '', message: '',
      marketingConsent: false, privacyConsent: false
    });
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
              <li><span className="cursor-default">Fleet</span></li>
              <li><a href="#" className="hover:text-blue-600">Experience</a></li>
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
                <li><span className="block text-xl cursor-default">Fleet</span></li>
                <li><a href="#" className="block text-xl hover:text-blue-600" onClick={() => setMenuOpen(false)}>Experience</a></li>
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

      {/* Main content – heading */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "Apple Garamond, serif" }}>
          Your private jet fleet.
        </h1>
      </div>

      {/* ========== BOMBARDIER SECTION ========== */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                Bombardier
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                Bombardier aircraft fly up to 7,700nm with a flight time of up to 17 hours non-stop, offering seamless and time-efficient travel.
                With purpose-built cabin space, these aircraft are designed for ultimate comfort and productivity in-flight. Bombardier 
                manufactures two leading aircraft families – Challenger and Global, both come with facilities for fine dining on board. Bombardier aircraft 
                accommodate up to 14 passengers seated or 8 sleeping.
              </p>
            </div>
            <div className="md:w-2/5">
              <img 
                src="Image1.jpeg" 
                alt="Bombardier aircraft" 
                className="w-full h-full object-cover"
                style={{ minHeight: '280px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== GULFSTREAM SECTION (image left, text right) ========== */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img 
                src="Image2.jpeg" 
                alt="Gulfstream aircraft" 
                className="w-full h-full object-cover"
                style={{ minHeight: '280px' }}
              />
            </div>
            <div className="flex-1 p-6 md:p-8 text-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                Gulfstream
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                Aircraft manufactured by Gulfstream can fly up to 4,300nm with a flight time of around 9 hours. The iconic Gulfstream 
                business jets allow passengers to stay connected in-flight whether for business or relaxation, and arrive at destination
                feeling refreshed due to ultra-low cabin altitude. Aircraft accommodate up to 16 passengers seated or 6 sleeping.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== EMBRAER SECTION (text left, image right) ========== */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                Embraer
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                Aircraft manufactured by Embraer can fly up to 4,600nm with a flight time of around 8 hours. These Embraer business jets offer 
                outstanding versatility and wide cabin space for up to 18 passengers seated or 7 sleeping. Aircraft include the Lineage 
                1000E, Legacy 650/650E and Praetor 600.
              </p>
            </div>
            <div className="md:w-2/5">
              <img 
                src="Image33.jpeg" 
                alt="Embraer aircraft" 
                className="w-full h-full object-cover"
                style={{ minHeight: '280px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== CESSNA SECTION (image left, text right) ========== */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img 
                src="Image44.jpeg" 
                alt="Cessna aircraft" 
                className="w-full h-full object-cover"
                style={{ minHeight: '280px' }}
              />
            </div>
            <div className="flex-1 p-6 md:p-8 text-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                Cessna
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                This midsize aircraft combines the stellar runway performance of a light jet with the sought-after comfort of a stand-up cabin, featuring
                leather club seats, six of which recline.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== DASSAULT SECTION (text left, image right) ========== */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
                Dassault
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: "Afacad, sans-serif" }}>
                Dassault aircraft can fly up to 5,950nm with a flight time of around 11 hours. Currently offered is the Falcon 7X, an aerodynamic and uniquely 
                elegant aircraft with unrivaled performance, particularly on short runway airports. The aircraft features an advanced cabin pressure 
                system with three ample separate living spaces that accommodates up to 12 passengers seated.
              </p>
            </div>
            <div className="md:w-2/5">
              <img 
                src="Image55.jpeg" 
                alt="Dassault aircraft" 
                className="w-full h-full object-cover"
                style={{ minHeight: '280px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== ENQUIRE SECTION ========== */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: "Apple Garamond, serif" }}>
          Enquire for a membership
        </h1>
        <img 
          src="logo.png" 
          alt="Logo" 
          className="mx-auto w-48 md:w-64 h-auto"
        />
      </div>

      {/* ========== CONTACT FORM SECTION (same as Membership.jsx) ========== */}
      <div className="max-w-4xl mx-auto mt-20 px-4 pb-20">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: "Apple Garamond, serif" }}>
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>How often do you fly private?</label>
              <select name="flyPrivate" value={formData.flyPrivate} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select...</option>
                {flyPrivateOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>What is your current flying solution?</label>
              <input type="text" name="currentSolution" value={formData.currentSolution} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>How did you hear about SivitaJet?</label>
              <select name="hearAbout" value={formData.hearAbout} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select...</option>
                {hearAboutOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: "Afacad, sans-serif" }}>Message</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>

            {/* Checkbox 1 - Marketing communications */}
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="marketingConsent" 
                name="marketingConsent" 
                checked={formData.marketingConsent} 
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-blue-600"
              />
              <label htmlFor="marketingConsent" className="text-gray-700 text-sm" style={{ fontFamily: "Afacad, sans-serif" }}>
                I would like to receive marketing communications from SivitaJet by email, post or text message.
              </label>
            </div>

            {/* Checkbox 2 - Privacy notice (required) */}
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="privacyConsent" 
                name="privacyConsent" 
                checked={formData.privacyConsent} 
                onChange={handleInputChange}
                required
                className="mt-1 w-4 h-4 text-blue-600"
              />
              <label htmlFor="privacyConsent" className="text-gray-700 text-sm" style={{ fontFamily: "Afacad, sans-serif" }}>
                Your personal data will be processed in accordance with our <a href="#" className="text-blue-600 hover:underline">Privacy Notice</a>.
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold" style={{ fontFamily: "Afacad, sans-serif" }}>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-700 text-white mt-16 py-8" style={{ fontFamily: "Afacad, sans-serif" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center gap-8 mb-8">
            <span className="cursor-default">Fleet</span>
            <button onClick={onBack} className="hover:underline">Membership</button>
            <a href="#" className="hover:underline">Experience</a>
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

export default Fleet;