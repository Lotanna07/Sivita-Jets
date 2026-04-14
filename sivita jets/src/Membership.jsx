import React from 'react';

const membershipTranslations = {
  en: { back: '← Back to Home', title: 'Membership', desc: 'This is your new membership page. Add all the membership details, cards, and content here.' },
  es: { back: '← Volver al inicio', title: 'Membresía', desc: 'Esta es tu nueva página de membresía. Agrega aquí todos los detalles, tarjetas y contenido de membresía.' },
  ja: { back: '← ホームに戻る', title: 'メンバーシップ', desc: 'これは新しいメンバーシップページです。すべてのメンバーシップの詳細、カード、コンテンツをここに追加してください。' },
  ar: { back: '← العودة إلى الرئيسية', title: 'العضوية', desc: 'هذه صفحة العضوية الجديدة الخاصة بك. أضف جميع تفاصيل العضوية والبطاقات والمحتوى هنا.' },
  fr: { back: '← Retour à l‘accueil', title: 'Adhésion', desc: 'Ceci est votre nouvelle page d‘adhésion. Ajoutez ici tous les détails, cartes et contenus de l’adhésion.' },
  pt: { back: '← Voltar ao início', title: 'Assinatura', desc: 'Esta é a sua nova página de assinatura. Adicione aqui todos os detalhes, cartões e conteúdo da assinatura.' },
};

function Membership({ onBack, language = 'en' }) {
  const t = membershipTranslations[language] || membershipTranslations.en;
  return (
    <div className="min-h-screen bg-gray-50">
      <button onClick={onBack} className="m-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">{t.back}</button>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ fontFamily: "Apple Garamond, serif" }}>{t.title}</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto" style={{ fontFamily: "Afacad, sans-serif" }}>{t.desc}</p>
      </div>
    </div>
  );
}

export default Membership;