import { CONFIG } from '../config';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Realisations() {
  const photos = CONFIG.photos.realisations;

  return (
    <section id="realisations" className="bg-white py-16 md:py-24 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#c62828] font-bold text-xs tracking-widest uppercase mb-3">
            Nos réalisations
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f2640] mb-4">
            Travaux réalisés dans le {CONFIG.departement}
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Quelques réalisations récentes à {CONFIG.villesPrincipales.join(', ')} et dans tout le département.
          </p>
        </div>

        {/* Photo grid — 1 featured large + reste */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
          {/* Photo featured */}
          <div className="col-span-2 sm:col-span-1 sm:row-span-2 relative rounded-xl overflow-hidden border border-slate-100 shadow-sm group" style={{ minHeight: 280 }}>
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
              <p className="text-white text-xs font-semibold leading-tight">{photos[0].label}</p>
              <p className="text-white/70 text-[10px]">{photos[0].sub}</p>
            </div>
          </div>
          {/* Photos restantes */}
          {photos.slice(1).map((p, i) => (
            <div
              key={i}
              className={i === 4
                ? 'col-span-2 sm:col-span-3 relative rounded-xl overflow-hidden border border-slate-100 shadow-sm group h-48 sm:h-[420px]'
                : 'relative rounded-xl overflow-hidden border border-slate-100 shadow-sm group'}
              style={i !== 4 ? { height: 200 } : undefined}
            >
              <img
                src={p.src}
                alt={p.alt}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${i === 4 ? 'object-bottom' : ''}`}
              />
              {p.beforeAfter && (
                <>
                  <span className="absolute top-2 left-2 bg-white/90 text-[#0f2640] text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">Avant</span>
                  <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/60" />
                  <span className="absolute top-2 right-2 bg-green-500/90 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">Après</span>
                </>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                <p className="text-white text-xs font-semibold leading-tight">{p.label}</p>
                <p className="text-white/70 text-[10px]">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-8">
          <span className="inline-block text-[#c62828] font-bold text-xs tracking-widest uppercase mb-2">
            Avis clients vérifiés
          </span>
          <h3 className="text-2xl font-black text-[#0f2640]">Ce que disent nos clients</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {CONFIG.avis.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <StarRating count={t.stars} />
              <p className="text-slate-600 text-sm leading-relaxed mt-3 mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0f2640] text-white flex items-center justify-center text-xs font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-[#0f2640] font-bold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
