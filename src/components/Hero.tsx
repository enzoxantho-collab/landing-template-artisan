import { CONFIG } from '../config';

const PHONE = CONFIG.phone;
const PHONE_DISPLAY = CONFIG.phoneDisplay;
const WA_LINK = `https://wa.me/33${CONFIG.phone.replace(/^0/, '')}?text=Bonjour, j'ai besoin d'un ${CONFIG.metier}.`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0f2640] min-h-[88vh] flex flex-col"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Large gradient blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#1a3a5c] opacity-60 blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-[#c62828]/10 opacity-80 blur-3xl" />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Diagonal accent bar */}
        <div
          className="absolute top-0 right-0 h-full w-1/3 opacity-10"
          style={{ background: 'linear-gradient(135deg, transparent 30%, #c62828 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 pb-8 md:pt-16 md:pb-14 flex flex-col lg:flex-row items-center gap-10 flex-1">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Votre{' '}
            <span className="text-[#4a9de0]">{CONFIG.metierCapital}</span>
            <br />
            <span className="relative inline-block">
              <span className="text-white">{CONFIG.hero.zone}</span>
              <span
                className="absolute bottom-0 left-0 w-full h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, #c62828, #e53935)' }}
              />
            </span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl mb-3 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {CONFIG.hero.description}
            {CONFIG.hero.descriptionStrong && (
              <>
                <br />
                <strong className="text-white">{CONFIG.hero.descriptionStrong}</strong>
              </>
            )}
          </p>
          <p className="text-white/50 text-sm mb-8 max-w-lg mx-auto lg:mx-0">
            {CONFIG.hero.subDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a
              href={`tel:${PHONE}`}
              className="group relative inline-flex items-center justify-center gap-3 bg-[#c62828] hover:bg-[#e53935] text-white font-black text-xl px-8 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105 hover:shadow-[#c62828]/40"
            >
              <span className="absolute inset-0 rounded-2xl ring-2 ring-[#c62828]/50 animate-ping opacity-30" />
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              <span>{PHONE_DISPLAY}</span>
            </a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-base px-6 py-5 rounded-2xl shadow-lg transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
            {CONFIG.badges.map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center gap-1 bg-white/5 border border-white/10 rounded-xl py-3 px-2 text-center"
              >
                <span className="text-2xl">{b.icon}</span>
                <span className="text-white/80 text-[11px] font-semibold leading-tight">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo avec logo en overlay */}
        <div className="flex-1 flex flex-col items-center gap-5 w-full max-w-sm lg:max-w-none">
          {/* Photo hero + logo badge intégré */}
          <div className="relative w-full">
            {/* Halo derrière la photo */}
            <div
              className="absolute -inset-3 rounded-3xl blur-2xl opacity-20"
              style={{ background: 'radial-gradient(ellipse, #2d6db5 0%, #c62828 60%, transparent 80%)' }}
            />
            <img
              src={CONFIG.photos.hero}
              alt={`${CONFIG.metierCapital} urgence ${CONFIG.villesPrincipales.join(', ')} intervention rapide`}
              className="relative w-full rounded-3xl object-cover shadow-2xl border border-white/10 h-[400px] lg:h-[560px]"
            />
            {/* Logo badge — ancré en bas à droite de la photo */}
            <div className="absolute -bottom-5 -right-3 lg:-right-5">
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-50"
                style={{ background: 'radial-gradient(circle, #2d6db5, transparent)' }}
              />
              <div className="relative">
                <img
                  src="/logo.png"
                  alt={CONFIG.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover shadow-[0_4px_32px_rgba(0,0,0,0.35)] ring-2 ring-white/30"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ height: 60 }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
