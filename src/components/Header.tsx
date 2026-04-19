import { CONFIG } from '../config';
const PHONE = CONFIG.phone;
const PHONE_DISPLAY = CONFIG.phoneDisplay;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-primary)] shadow-lg">
      {/* Top bar urgence */}
      <div className="hidden sm:block bg-[var(--color-accent)] py-1.5 px-4 text-center text-white text-xs font-semibold tracking-wide">
        🔴 URGENCE 24h/24 — 7j/7 &nbsp;|&nbsp; Intervention rapide dans tout le {CONFIG.departement}
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/logo.png"
            alt={`${CONFIG.name} logo`}
            width={60}
            height={60}
            className="rounded-full object-contain shadow-md flex-shrink-0"
            style={{ minWidth: 60 }}
          />
          <div className="hidden sm:block leading-tight">
            <div className="text-white font-black text-base tracking-wide uppercase">{CONFIG.name}</div>
            <div className="text-[#7fb3e8] text-xs font-medium tracking-widest uppercase">{CONFIG.departement} {CONFIG.departementCode}</div>
          </div>
        </a>

        {/* Nav links — desktop only, no burger */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-white/80">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#urgences" className="hover:text-white transition-colors">Urgences</a>
          <a href="#zones" className="hover:text-white transition-colors">Zones</a>
          <a href="#realisations" className="hover:text-white transition-colors">Réalisations</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          {/* WhatsApp mobile inline */}
          <a
            href={`https://wa.me/33${PHONE.replace(/^0/, '')}?text=Bonjour, j'ai besoin d'un ${CONFIG.metier}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white shadow-md hover:scale-105 transition-transform"
            aria-label="Contacter par WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
          </a>

          {/* Phone CTA */}
          <a
            href={`tel:${PHONE}`}
            className="cta-pulse relative flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-4 py-2.5 rounded-full shadow-lg transition-all text-sm whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
            </svg>
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </div>

    </header>
  );
}
