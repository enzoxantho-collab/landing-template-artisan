import { useState } from 'react';
import { CONFIG } from '../config';

const PHONE = CONFIG.phone;
const PHONE_DISPLAY = CONFIG.phoneDisplay;
const WA_LINK = `https://wa.me/33${CONFIG.phone.replace(/^0/, '')}?text=Bonjour, j'ai besoin d'un ${CONFIG.metier}.`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waMessage = `Bonjour, je suis ${formData.name}.\nTéléphone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    const waUrl = `https://wa.me/33${CONFIG.phone.replace(/^0/, '')}?text=${encodeURIComponent(waMessage)}`;

    window.open(waUrl, '_blank');

    setStatus('success');
    setFormData({ name: '', phone: '', email: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-24 scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-[var(--color-accent)] font-bold text-xs tracking-widest uppercase mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-primary)] mb-4">
            Demander un devis gratuit
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Remplissez le formulaire ci-dessous ou appelez directement pour une urgence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Formulaire */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all"
                  placeholder="votre@email.fr"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                  Votre demande *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all resize-none"
                  placeholder="Décrivez votre demande..."
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                  ✓ Votre message a été envoyé via WhatsApp !
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-black text-base px-6 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                Envoyer la demande
              </button>

              <p className="text-xs text-slate-400 text-center">
                * Champs obligatoires · Votre demande sera envoyée via WhatsApp
              </p>
            </form>
          </div>

          {/* Infos contact */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)] rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl font-black mb-4">Besoin d'une intervention urgente ?</h3>
              <p className="text-white/70 text-sm mb-6">
                Pour toute urgence, appelez directement. Disponible 24h/24 et 7j/7.
              </p>

              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-black text-lg px-6 py-4 rounded-xl transition-all hover:scale-105 shadow-lg mb-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
                {PHONE_DISPLAY}
              </a>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-base px-6 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h4 className="font-bold text-[var(--color-primary)] mb-4">Zones d'intervention</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {CONFIG.villesPrincipales.map(ville => (
                  <li key={ville} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    {ville} et agglomération
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  Tout le département du {CONFIG.departement} ({CONFIG.departementCode})
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h4 className="font-bold text-[var(--color-primary)] mb-4">Horaires</h4>
              <p className="text-sm text-slate-600 mb-2">
                <strong className="text-[var(--color-accent)]">24h/24 — 7j/7</strong>
              </p>
              <p className="text-xs text-slate-500">
                Intervention d'urgence tous les jours, week-ends et jours fériés inclus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
