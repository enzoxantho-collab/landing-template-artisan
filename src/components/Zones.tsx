import { CONFIG } from '../config';

const PHONE = CONFIG.phone;

export default function Zones() {
  return (
    <section id="zones" className="bg-slate-50 py-16 md:py-24 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-[#c62828] font-bold text-xs tracking-widest uppercase mb-3">
            Zones d'intervention
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f2640] mb-4">
            Votre {CONFIG.metier} local<br className="hidden sm:block" /> {CONFIG.villesPrincipales.join(' · ')}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            {CONFIG.name} intervient dans <strong>tout le département du {CONFIG.departement} ({CONFIG.departementCode})</strong>.
            Artisan de proximité avec une connaissance parfaite du réseau local.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {CONFIG.zones.map((z, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border transition-all hover:shadow-lg hover:-translate-y-1 ${
                z.highlight
                  ? 'bg-white border-[#1a3a5c]/20 shadow-sm'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="text-3xl mb-3">{z.icon}</div>
              <h3 className="font-black text-[#0f2640] text-xl mb-0.5">{z.city}</h3>
              <p className="text-[#c62828] text-xs font-bold mb-3">{z.dep}</p>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">{z.desc}</p>
              <ul className="space-y-1">
                {z.services.map((s, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c62828] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Carte Google Maps */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md mb-8" style={{ height: 340 }}>
          <iframe
            title={`Zone d'intervention ${CONFIG.name} — ${CONFIG.villesPrincipales.join(', ')}`}
            src={CONFIG.mapsEmbedUrl}
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* SEO text block */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8">
          <h3 className="text-[#0f2640] font-black text-xl mb-4">{CONFIG.seoBlock.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-600 leading-relaxed">
            {CONFIG.seoBlock.items.map((item, i) => (
              <div key={i}>
                <strong className="text-[#0f2640] block mb-1">{item.title}</strong>
                {item.text}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-[#0f2640] hover:bg-[#1a3a5c] text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
