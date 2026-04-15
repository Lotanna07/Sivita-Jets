import React, { useState } from 'react';

const membershipTranslations = {
  en: { 
    heroTitle: 'Our Private Jet Memberships',
    heroSub: 'Memberships uniquely designed for your flying needs and preferences.',
    makeEnquiry: 'Make An Enquiry'
  },
  es: { 
    heroTitle: 'Nuestras Membresías de Jet Privado',
    heroSub: 'Membresías diseñadas únicamente para tus necesidades y preferencias de vuelo.',
    makeEnquiry: 'Hacer una consulta'
  },
  ja: { 
    heroTitle: 'プライベートジェットメンバーシップ',
    heroSub: 'お客様のフライトニーズと好みに合わせて設計されたメンバーシップ。',
    makeEnquiry: 'お問い合わせ'
  },
  ar: { 
    heroTitle: 'عضوية طائرتنا الخاصة',
    heroSub: 'عضوية مصممة خصيصًا لتلبية احتياجات وتفضيلات طيرانك.',
    makeEnquiry: 'تقديم استفسار'
  },
  fr: { 
    heroTitle: 'Nos adhésions aux jets privés',
    heroSub: 'Des adhésions conçues uniquement pour vos besoins et préférences de vol.',
    makeEnquiry: 'Faire une demande'
  },
  pt: { 
    heroTitle: 'Nossas Assinaturas de Jato Privado',
    heroSub: 'Assinaturas projetadas exclusivamente para suas necessidades e preferências de voo.',
    makeEnquiry: 'Fazer uma consulta'
  },
};

const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'ja', name: '日本語' },
  { code: 'ar', name: 'العربية' },
  { code: 'fr', name: 'Français' },
  { code: 'pt', name: 'Português' },
];

function Membership({ onBack, language = 'en', setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = membershipTranslations[language] || membershipTranslations.en;

  const handleLanguageChange = (langCode) => {
    if (setLanguage) setLanguage(langCode);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar (exactly the same as App.jsx) */}
      <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setMenuOpen(true)} className="p-2 rounded-md hover:bg-gray-100 focus:outline-none" aria-label="Menu">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul className="flex gap-6" style={{ fontFamily: "Apple Garamond, sans-serif" }}>
              <li><button onClick={() => onBack()} className="hover:text-blue-600">Home</button></li>
              <li><a href="#" className="hover:text-blue-600">Fleet</a></li>
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

      {/* Mobile Drawer (unchanged) */}
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
                <li><a href="#" className="block text-xl hover:text-blue-600" onClick={() => setMenuOpen(false)}>Fleet</a></li>
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

      {/* ========== BIG IMAGE HERO – same size as video in App.jsx (h-[70vh]) ========== */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
          alt="Membership Hero" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: "Apple Garamond, serif" }}>
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6" style={{ fontFamily: "Afacad, sans-serif" }}>
            {t.heroSub}
          </p>
          <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-lg" style={{ fontFamily: "Afacad, sans-serif" }}>
            {t.makeEnquiry}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Membership;