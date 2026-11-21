import { useState } from 'react';
import profileImage from './assets/profile_me.jfif';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('coach@example.com');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // ألوان ديناميكية
  const bgMain = isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-green-50 to-orange-50';
  const bgCard = isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100';
  const textMain = isDark ? 'text-white' : 'text-gray-900';
  const textSub = isDark ? 'text-gray-400' : 'text-gray-600';
  const btnToggle = isDark ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600';
  const bgHeader = isDark ? 'bg-gradient-to-r from-green-800 to-orange-800' : 'bg-gradient-to-r from-green-500 to-orange-500';

  // البرامج
  const programs = [
    {
      name: 'Perte de poids',
      duration: '8 semaines',
      price: '600 DH',
      emoji: '🔥',
      whatsapp: 'سلام Coach، بغيت نسجل فبرنامج Perte de poids (8 أسابيع - 600 درهم)'
    },
    {
      name: 'Prise de masse',
      duration: '12 semaines',
      price: '800 DH',
      emoji: '💪',
      whatsapp: 'سلام Coach، بغيت نسجل فبرنامج Prise de masse (12 أسبوع - 800 درهم)'
    },
    {
      name: 'Plan Nutrition',
      duration: 'Personnalisé',
      price: '300 DH',
      emoji: '🥗',
      whatsapp: 'سلام Coach، بغيت نطلب Plan Nutrition personnalisé (300 درهم)'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bgMain}`}>
      
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold z-50">
          ✅ Email copié!
        </div>
      )}

      {/* زر Dark Mode */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-4 right-4 p-2 rounded-full transition-colors ${btnToggle} z-50`}
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      <div className="max-w-md mx-auto p-4 space-y-6">
        
        {/* Header */}
        <div className={`rounded-3xl overflow-hidden shadow-xl ${bgCard} border`}>
          <div className={`h-32 ${bgHeader} relative`}>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <img 
                src={profileImage}
                alt="Coach" 
                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg bg-white"
              />
            </div>
          </div>
          
          <div className="pt-16 pb-6 px-6 text-center">
            <h1 className={`text-2xl font-bold ${textMain}`}>Coach Youssef</h1>
            <p className="text-green-600 font-semibold mb-2">Coach Sportif & Nutrition</p>
            <p className={`text-sm ${textSub} mb-4`}>📍 Casablanca | Online</p>
            <p className={`text-sm ${textSub}`}>✅ +120 clients transformés</p>
          </div>
        </div>

        {/* CTA Principal */}
        <a 
          href="https://wa.me/212600000000?text=سلام%20Coach،%20بغيت%20نحجز%20séance%20gratuite"
          className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl text-center shadow-lg transition-all active:scale-95"
        >
          🎯 Réserver ma séance GRATUITE
        </a>

        {/* Programs */}
        <div className={`${bgCard} rounded-3xl p-6 border shadow-lg`}>
          <h2 className={`text-xl font-bold mb-4 ${textMain}`}>💪 Mes Programmes</h2>
          
          <div className="space-y-3">
            {programs.map((program, index) => (
              <div key={index} className={`p-4 rounded-2xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'} border ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className={`font-bold ${textMain}`}>{program.emoji} {program.name}</h3>
                    <p className={`text-sm ${textSub}`}>{program.duration}</p>
                  </div>
                  <p className="text-green-600 font-bold">{program.price}</p>
                </div>
                <a 
                  href={`https://wa.me/212600000000?text=${encodeURIComponent(program.whatsapp)}`}
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl text-center text-sm transition-all active:scale-95"
                >
                  Je m'inscris →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After */}
        <div className={`${bgCard} rounded-3xl p-6 border shadow-lg`}>
          <h2 className={`text-xl font-bold mb-4 ${textMain}`}>📸 Résultats clients</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className={`aspect-square rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center text-4xl`}>
              🏋️‍♂️
            </div>
            <div className={`aspect-square rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center text-4xl`}>
              💪
            </div>
          </div>
          <p className={`text-xs text-center mt-3 ${textSub}`}>
            
          </p>
        </div>

        {/* Avis */}
        <div className={`${bgCard} rounded-3xl p-6 border shadow-lg`}>
          <h2 className={`text-xl font-bold mb-4 ${textMain}`}>⭐ Avis clients</h2>
          <div className="space-y-3">
            <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <p className={`text-sm italic ${textMain}`}>"Perdu 12kg en 3 mois! Merci Coach!"</p>
              <p className={`text-xs ${textSub} mt-2`}>— Sarah, Casablanca</p>
            </div>
            <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <p className={`text-sm italic ${textMain}`}>"Meilleur coach, très professionnel!"</p>
              <p className={`text-xs ${textSub} mt-2`}>— Ahmed, Rabat</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className={`${bgCard} rounded-3xl p-6 border shadow-lg`}>
          <h2 className={`text-xl font-bold mb-4 ${textMain}`}>📱 Suivez-moi</h2>
          <div className="grid grid-cols-2 gap-3">
            <a href="https://instagram.com" className={`p-3 rounded-xl ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} text-center font-semibold ${textMain} transition-all`}>
              📷 Instagram
            </a>
            <a href="https://tiktok.com" className={`p-3 rounded-xl ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} text-center font-semibold ${textMain} transition-all`}>
              🎵 TikTok
            </a>
            <button 
              onClick={copyEmail}
              className={`p-3 rounded-xl ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} text-center font-semibold ${textMain} transition-all`}
            >
              ✉️ Email
            </button>
            <a href="https://wa.me/212600000000" className={`p-3 rounded-xl ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} text-center font-semibold ${textMain} transition-all`}>
              💬 WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;