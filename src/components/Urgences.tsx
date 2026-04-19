import { CONFIG } from '../config';

const PHONE = CONFIG.phone;
const PHONE_DISPLAY = CONFIG.phoneDisplay;

export default function Urgences() {
  return (
    <section id="urgences" className="bg-[var(--color-primary)] py-16 md:py-24 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[#ff7070] font-bold text-xs tracking-widest uppercase mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
            </span>
            Urgences
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Intervention d'urgence<br className="hidden sm:block" /> 24h/24 — 7j/7
          </h2>
          <p className="text-white/60 text-base max-w-lg mx-auto">
            {CONFIG.metierCapital} disponible <strong className="text-white">jour et nuit</strong>, week-ends et jours fériés. Pas de majoration cachée. Tarif annoncé avant intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {CONFIG.urgences.map((u, i) => (
            <div
              key={i}
              className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[#ff7070] font-black text-sm"
                style={{ background: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', border: '1px solid color-mix(in srgb, var(--color-accent) 40%, transparent)' }}
              >
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-white font-bold text-base">{u.label}</h3>
                  <span
                    className="flex-shrink-0 text-[10px] font-black text-[#ff9090] px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: 'color-mix(in srgb, var(--color-accent) 30%, transparent)', border: '1px solid color-mix(in srgb, var(--color-accent) 40%, transparent)' }}
                  >
                    {u.time}
                  </span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{u.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo placeholder + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Photo */}
          <img
            src={CONFIG.photos.urgence}
            alt={`Intervention urgence ${CONFIG.metier} ${CONFIG.departement} ${CONFIG.villesPrincipales.join(' ')}`}
            className="rounded-2xl object-cover border border-white/10 w-full"
            style={{ minHeight: 260, maxHeight: 320 }}
          />

          {/* CTA card */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-center text-center"
            style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, #8e0000 100%)' }}
          >
            <div className="text-5xl mb-4">🚨</div>
            <h3 className="text-white font-black text-2xl mb-3">Urgence maintenant ?</h3>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              N'attendez pas que la situation s'aggrave. Appelez votre {CONFIG.metier} dans le {CONFIG.departement}{' '}
              <strong className="text-white">disponible 24h/24</strong>.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-[var(--color-accent)] font-black text-xl px-6 py-4 rounded-full shadow-xl hover:scale-105 transition-transform mb-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              {PHONE_DISPLAY}
            </a>
            <p className="text-white/60 text-xs">Disponible maintenant · Réponse immédiate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
