import { CONFIG } from '../config';

const PHONE = CONFIG.phone;
const PHONE_DISPLAY = CONFIG.phoneDisplay;
const WA_LINK = `https://wa.me/33${CONFIG.phone.replace(/^0/, '')}?text=Bonjour, j'ai besoin d'un ${CONFIG.metier}.`;

export default function Footer() {
  const zonesFooter = [
    ...CONFIG.villesPrincipales,
    ...CONFIG.villesSecondaires,
    `${CONFIG.departement} ${CONFIG.departementCode}`,
  ];

  return (
    <>
      {/* Footer */}
      <footer className="bg-[#070f1c] text-white/60 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt={CONFIG.name} width={48} height={48} className="rounded-full object-cover flex-shrink-0" />
                <div>
                  <div className="text-white font-black text-sm">{CONFIG.name}</div>
                  <div className="text-white/40 text-xs">{CONFIG.departement} {CONFIG.departementCode}</div>
                </div>
              </div>
              <p className="text-xs leading-relaxed mb-4">
                {CONFIG.metierCapital} professionnel dans le {CONFIG.departement}. Intervention urgence 24h/24, 7j/7 à {CONFIG.villesPrincipales.join(', ')} et tout le département {CONFIG.departementCode}.
              </p>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 text-white font-bold text-base hover:text-[#4a9de0] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Services</h4>
              <ul className="space-y-2 text-xs">
                {CONFIG.services.map(s => (
                  <li key={s.title}><a href="#services" className="hover:text-white transition-colors">{s.title}</a></li>
                ))}
              </ul>
            </div>

            {/* Zones */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Zones</h4>
              <ul className="space-y-2 text-xs">
                {zonesFooter.map(ville => (
                  <li key={ville}>
                    <a href="#zones" className="hover:text-white transition-colors">
                      {CONFIG.metierCapital} {ville}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Contact</h4>
              <div className="space-y-3 text-xs">
                <div>
                  <p className="text-white/40 mb-1">Téléphone</p>
                  <a href={`tel:${PHONE}`} className="text-white font-bold hover:text-[#4a9de0] transition-colors">{PHONE_DISPLAY}</a>
                </div>
                <div>
                  <p className="text-white/40 mb-1">WhatsApp</p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">Envoyer un message</a>
                </div>
                <div>
                  <p className="text-white/40 mb-1">Disponibilité</p>
                  <p className="text-white font-semibold">24h/24 — 7j/7</p>
                </div>
                <div>
                  <p className="text-white/40 mb-1">Zone</p>
                  <p className="text-white">{CONFIG.departement} ({CONFIG.departementCode}), tout le département</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <p>© {new Date().getFullYear()} {CONFIG.name} · Tous droits réservés</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mentions-legales" className="text-white/60 hover:text-white transition-colors">Mentions légales</a>
              <span className="text-white/30">·</span>
              <a href="/politique-confidentialite" className="text-white/60 hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>
          <div className="pt-8 text-center text-white/20 text-[10px] tracking-widest uppercase">
            Made by <span className="text-white/40 font-semibold">Next Level</span> · 2026
          </div>
        </div>
      </footer>
    </>
  );
}
