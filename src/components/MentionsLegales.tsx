import { CONFIG } from '../config';

const PHONE = CONFIG.phone;
const PHONE_DISPLAY = CONFIG.phoneDisplay;

export default function MentionsLegales() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-black text-[#0f2640] mb-8">Mentions Légales</h1>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Éditeur du site</h2>
            <p>
              <strong>{CONFIG.legal.companyName}</strong><br />
              {CONFIG.legal.type}<br />
              {CONFIG.legal.address}<br />
              {CONFIG.legal.siret && <>SIRET : {CONFIG.legal.siret}<br /></>}
              Téléphone : <a href={`tel:${PHONE}`} className="text-[#c62828] hover:underline">{PHONE_DISPLAY}</a><br />
              Email : <a href={`mailto:${CONFIG.email}`} className="text-[#c62828] hover:underline">{CONFIG.email}</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>{CONFIG.legal.hebergeur}</strong><br />
              {CONFIG.legal.hebergeurAddress}<br />
              <a href={CONFIG.legal.hebergeurUrl} target="_blank" rel="noopener noreferrer" className="text-[#c62828] hover:underline">{CONFIG.legal.hebergeurUrl}</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de {CONFIG.legal.companyName}, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Données personnelles</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous au {PHONE_DISPLAY}.
            </p>
            <p className="mt-2">
              Pour plus d'informations, consultez notre{' '}
              <a href="/politique-confidentialite" className="text-[#c62828] hover:underline font-semibold">
                Politique de confidentialité
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Responsabilité</h2>
            <p>
              {CONFIG.legal.companyName} s'efforce d'assurer l'exactitude des informations diffusées sur ce site, mais ne peut garantir l'absence d'erreurs. L'utilisation des informations se fait sous votre responsabilité.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#c62828] hover:text-[#e53935] font-bold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Retour à l'accueil
          </a>
        </div>
      </div>
    </section>
  );
}
