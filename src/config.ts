// ============================================
// CONFIG — Modifier ce fichier pour chaque nouveau client
// ============================================

export const CONFIG = {
  // Identité
  name: 'Nom Entreprise',
  metier: 'artisan',
  metierCapital: 'Artisan',

  // Contact
  phone: '0600000000',
  phoneDisplay: '06 00 00 00 00',
  email: 'contact@exemple.fr',

  // Zone
  departement: 'Département',
  departementCode: '00',
  villesPrincipales: ['Ville 1', 'Ville 2', 'Ville 3'],
  villesSecondaires: ['Ville 4', 'Ville 5'],

  // Domaine
  domaine: 'https://exemple.fr',

  // SEO
  metaDescription: 'Description du site pour les moteurs de recherche...',
  googleAnalyticsId: '', // ex: G-XXXXXXXXXX
  googleSiteVerification: '', // ex: abcdefg123...

  // Hero
  hero: {
    zone: 'dans votre région',
    description: 'Décrivez ici vos services principaux et villes couvertes…',
    descriptionStrong: 'Intervention rapide, devis gratuit.',
    subDescription: 'Artisan qualifié · Devis gratuit · Travaux garantis',
  },

  // Badges hero (icônes + labels sous le CTA)
  badges: [
    { icon: '⚡', label: 'Intervention rapide' },
    { icon: '🕐', label: '24h/24 — 7j/7' },
    { icon: '✅', label: 'Devis gratuit' },
    { icon: '🛡️', label: 'Travaux garantis' },
  ],

  // Services
  // icon: clé parmi 'alert','droplet','flame','package','wrench','building','bolt','lock','paint','hammer','gear','shield','home'
  services: [
    {
      icon: 'alert',
      title: 'Service urgence',
      desc: "Description du service d'urgence, interventions disponibles et délais...",
      badge: 'URGENT' as string | null,
      badgeColor: 'bg-red-100 text-red-700' as string | null,
    },
    {
      icon: 'droplet',
      title: 'Service 2',
      desc: 'Description du deuxième service proposé à vos clients...',
      badge: 'POPULAIRE' as string | null,
      badgeColor: 'bg-blue-100 text-blue-700' as string | null,
    },
    {
      icon: 'flame',
      title: 'Service 3',
      desc: 'Description du troisième service proposé à vos clients...',
      badge: null,
      badgeColor: null,
    },
    {
      icon: 'package',
      title: 'Service 4',
      desc: 'Description du quatrième service proposé à vos clients...',
      badge: null,
      badgeColor: null,
    },
    {
      icon: 'wrench',
      title: 'Service 5',
      desc: 'Description du cinquième service proposé à vos clients...',
      badge: null,
      badgeColor: null,
    },
    {
      icon: 'building',
      title: 'Service 6',
      desc: 'Description du sixième service proposé à vos clients...',
      badge: null,
      badgeColor: null,
    },
  ],

  // Urgences
  urgences: [
    {
      label: "Type d'urgence 1",
      detail: "Description de l'urgence et des actions à entreprendre avant l'intervention...",
      time: '< 30 min',
    },
    {
      label: "Type d'urgence 2",
      detail: "Description de l'urgence et des actions à entreprendre avant l'intervention...",
      time: '< 30 min',
    },
    {
      label: "Type d'urgence 3",
      detail: "Description de l'urgence et des actions à entreprendre avant l'intervention...",
      time: '< 45 min',
    },
    {
      label: "Type d'urgence 4",
      detail: "Description de l'urgence et des actions à entreprendre avant l'intervention...",
      time: 'Même jour',
    },
    {
      label: "Type d'urgence 5",
      detail: "Description de l'urgence et des actions à entreprendre avant l'intervention...",
      time: '< 1h',
    },
    {
      label: "Type d'urgence 6",
      detail: "Description de l'urgence et des actions à entreprendre avant l'intervention...",
      time: '< 1h',
    },
  ],

  // Zones d'intervention
  zones: [
    {
      city: 'Ville 1',
      dep: '00000',
      desc: 'Description de la zone, communes couvertes, quartiers desservis...',
      icon: '🏙️',
      highlight: true,
      services: ['Service A', 'Service B', 'Service C', 'Service D'],
    },
    {
      city: 'Ville 2',
      dep: '00000',
      desc: 'Description de la zone, communes couvertes, quartiers desservis...',
      icon: '🌊',
      highlight: true,
      services: ['Service A', 'Service B', 'Service C', 'Service D'],
    },
    {
      city: 'Ville 3',
      dep: '00000',
      desc: 'Description de la zone, communes couvertes, quartiers desservis...',
      icon: '⚓',
      highlight: true,
      services: ['Service A', 'Service B', 'Service C'],
    },
    {
      city: 'Tout le département',
      dep: '00 · tout le département',
      desc: "Intervention dans tout le département et communes environnantes...",
      icon: '🗺️',
      highlight: false,
      services: ['Devis gratuit', 'Toutes interventions'],
    },
  ],

  // URL Google Maps embed (iframe)
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354847.9!2d3.5!3d43.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af2b9427c339%3A0x4058f91e11ac8be0!2sFrance!5e0!3m2!1sfr!2sfr!4v1700000000001!5m2!1sfr!2sfr',

  // Bloc SEO zones (pourquoi nous choisir)
  seoBlock: {
    title: 'Artisan local : Pourquoi nous choisir ?',
    items: [
      {
        title: 'Réactivité maximale',
        text: 'Artisan disponible rapidement. Intervention le jour même pour tout problème urgent dans votre département.',
      },
      {
        title: 'Tarifs transparents',
        text: "Devis gratuit avant toute intervention. Aucune surprise sur la facture, tarif annoncé à l'avance.",
      },
      {
        title: 'Artisan qualifié',
        text: 'Artisan certifié avec garantie sur les travaux. Interventions conformes aux normes en vigueur.',
      },
    ],
  },

  // Photos
  photos: {
    hero: '/photos/hero.jpg',
    urgence: '/photos/urgence.jpg',
    realisations: [
      {
        src: '/photos/real1.jpg',
        label: 'Réalisation 1',
        sub: 'Ville 1',
        alt: 'Description de la réalisation 1',
        featured: true,
        beforeAfter: false,
      },
      {
        src: '/photos/real2.jpg',
        label: 'Réalisation 2',
        sub: 'Ville 2',
        alt: 'Description de la réalisation 2',
        featured: false,
        beforeAfter: false,
      },
      {
        src: '/photos/real3.jpg',
        label: 'Réalisation 3',
        sub: 'Ville 3',
        alt: 'Description de la réalisation 3',
        featured: false,
        beforeAfter: false,
      },
      {
        src: '/photos/real4.jpg',
        label: 'Réalisation 4 (avant/après)',
        sub: 'Ville 1',
        alt: 'Description de la réalisation 4',
        featured: false,
        beforeAfter: true,
      },
      {
        src: '/photos/real5.jpg',
        label: 'Réalisation 5',
        sub: 'Département',
        alt: 'Description de la réalisation 5',
        featured: false,
        beforeAfter: false,
      },
      {
        src: '/photos/real6.jpg',
        label: 'Réalisation 6',
        sub: 'Ville 2',
        alt: 'Description de la réalisation 6',
        featured: false,
        beforeAfter: false,
      },
    ],
  },

  // Avis clients
  avis: [
    {
      name: 'Prénom 1',
      city: 'Ville',
      stars: 5,
      text: 'Avis très positif du premier client...',
    },
    {
      name: 'Prénom 2',
      city: 'Ville',
      stars: 5,
      text: 'Avis très positif du deuxième client...',
    },
  ],

  // FAQ
  faq: [
    {
      q: 'Intervenez-vous vraiment 24h/24 et 7j/7 ?',
      a: 'Oui, disponible 24h/24 et 7j/7, week-ends et jours fériés inclus. Pour toute urgence, appelez directement — réponse immédiate garantie.',
    },
    {
      q: "Quel est votre délai d'intervention pour une urgence ?",
      a: "Notre délai moyen d'intervention est de 20 à 30 minutes pour les villes principales, et de 30 à 60 minutes pour les communes environnantes.",
    },
    {
      q: 'Le déplacement et le devis sont-ils gratuits ?',
      a: "Le devis est entièrement gratuit et sans engagement. Le déplacement est offert pour les travaux réalisés. Tarif complet communiqué avant de commencer — aucune mauvaise surprise.",
    },
    {
      q: "Quels types d'interventions réalisez-vous ?",
      a: "Intervention pour tous types de travaux dans notre domaine. Contactez-nous directement pour toute question spécifique à votre situation.",
    },
    {
      q: 'Êtes-vous certifié et assuré ?',
      a: "Artisan qualifié avec garantie décennale. Tous les travaux sont couverts par une assurance responsabilité civile professionnelle.",
    },
  ],

  // Mentions légales
  legal: {
    companyName: 'Nom Entreprise',
    type: 'Artisan',
    address: 'Adresse, Code postal, Ville',
    siret: '',
    hebergeur: 'Vercel Inc.',
    hebergeurAddress: '440 N Barranca Ave #4133, Covina, CA 91723, USA',
    hebergeurUrl: 'https://vercel.com',
  },

  // Sections optionnelles
  urgencesEnabled: true, // false → section urgences masquée (maçon, peintre, charpentier, etc.)

  // Couleurs (référence — injectées comme CSS variables dans App.tsx)
  couleurPrimaire: '#0f2640',
  couleurPrimaireLight: '#4a9de0',
  couleurAccent: '#c62828',
  couleurAccentHover: '#e53935',
};
