import { CONFIG } from '../config';

const PHONE = CONFIG.phone;
const PHONE_DISPLAY = CONFIG.phoneDisplay;

export default function PolitiqueConfidentialite() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-black text-[#0f2640] mb-8">Politique de Confidentialité</h1>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Collecte des données</h2>
            <p>
              {CONFIG.legal.companyName} collecte uniquement les données nécessaires au traitement de vos demandes de contact ou de devis. Les informations collectées peuvent inclure :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nom et prénom</li>
              <li>Numéro de téléphone</li>
              <li>Adresse d'intervention</li>
              <li>Nature de la demande</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Utilisation des données</h2>
            <p>
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Répondre à vos demandes de contact</li>
              <li>Établir des devis</li>
              <li>Réaliser les interventions et prestations</li>
              <li>Assurer le suivi client</li>
            </ul>
            <p className="mt-3">
              Vos données ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Services tiers</h2>
            <p>
              Ce site utilise des services tiers qui peuvent collecter des données :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Google Maps</strong> : pour afficher la carte de nos zones d'intervention</li>
              <li><strong>WhatsApp (Meta)</strong> : pour les demandes de contact via messagerie</li>
              <li><strong>{CONFIG.legal.hebergeur}</strong> : hébergement du site (logs serveur)</li>
            </ul>
            <p className="mt-3">
              Ces services ont leurs propres politiques de confidentialité que nous vous invitons à consulter.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Cookies</h2>
            <p>
              Ce site utilise uniquement un cookie de consentement pour mémoriser votre acceptation de cette politique. Aucun cookie de tracking ou publicitaire n'est utilisé.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Vos droits (RGPD)</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit à la portabilité de vos données</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous par téléphone au{' '}
              <a href={`tel:${PHONE}`} className="text-[#c62828] hover:underline font-semibold">
                {PHONE_DISPLAY}
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Conservation des données</h2>
            <p>
              Vos données sont conservées uniquement le temps nécessaire à la réalisation des prestations et au respect des obligations légales (notamment comptables et fiscales).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Sécurité</h2>
            <p>
              {CONFIG.legal.companyName} met en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f2640] mb-3">Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, contactez-nous :<br />
              <strong>Téléphone :</strong>{' '}
              <a href={`tel:${PHONE}`} className="text-[#c62828] hover:underline font-semibold">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>

          <div className="text-sm text-slate-400 pt-4 border-t border-slate-200">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
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
