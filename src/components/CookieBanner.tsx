import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0f2640] border-t border-white/10 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/80 text-sm text-center sm:text-left">
          Ce site utilise des outils Google (Maps, Analytics) pour fonctionner et mesurer l'audience.{' '}
          <a href="/politique-confidentialite" className="text-[#4a9de0] hover:underline font-semibold">
            En savoir plus
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="flex-shrink-0 bg-[#c62828] hover:bg-[#e53935] text-white font-bold px-6 py-2 rounded-full text-sm transition-all hover:scale-105"
        >
          J'ai compris
        </button>
      </div>
    </div>
  );
}
