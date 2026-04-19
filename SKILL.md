# Skill — Landing Artisan

## Quand utiliser ce skill
Quand l'utilisateur veut créer un nouveau site landing page pour un artisan.
Cloner ce repo comme base de code, ne jamais modifier le template directement.

## Architecture du template

**Un seul fichier à remplir par client : `src/config.ts`**
Tous les composants lisent depuis CONFIG — aucune modification de code nécessaire.

```
src/
├── config.ts         ← SEUL fichier à modifier par client
└── components/       ← ne pas toucher
    ├── Header.tsx
    ├── Hero.tsx
    ├── Services.tsx   (icons: voir liste ci-dessous)
    ├── Urgences.tsx
    ├── Zones.tsx
    ├── Realisations.tsx
    ├── Contact.tsx
    ├── FAQ.tsx
    ├── Footer.tsx
    ├── MentionsLegales.tsx
    └── PolitiqueConfidentialite.tsx
```

**Icônes disponibles pour `services[].icon` :**
`alert` · `droplet` · `flame` · `package` · `wrench` · `building` · `bolt` · `lock` · `paint` · `hammer` · `gear` · `shield` · `home`

## Étape 1 — Poser le brief (tout en une seule fois)

Demander à l'utilisateur :
1. **Nom entreprise** (ex: Gard Électricité Services)
2. **Métier** (plombier / électricien / maçon / peintre / carreleur...)
3. **Téléphone** (ex: 06 12 34 56 78)
4. **Email** (ex: contact@gard-electricite.fr)
5. **Département + code** (ex: Gard, 30)
6. **3 villes principales** (ex: Nîmes, Alès, Uzès)
7. **Nom de domaine** (ex: gardelectricite.fr)
8. **Couleur principale** (ex: bleu #0f2640, vert #1a5c2a...) — proposer une couleur adaptée au métier si pas d'avis
9. **Photos disponibles ?** (sinon utiliser des placeholders)

## Étape 2 — Setup

```bash
# 1. Cloner ou dupliquer le template
git clone [url-repo] [nom-projet]
cd [nom-projet]

# 2. Installer les dépendances
npm install
```

## Étape 3 — Remplir src/config.ts

Remplir TOUTES les clés avec les infos du client :
- Identité, contact, zone, domaine
- `hero` : zone, description, descriptionStrong, subDescription
- `badges` : 4 badges hero
- `services` : liste des services (choisir une icône dans la liste ci-dessus)
- `urgences` : types d'urgences + délais
- `zones` : villes couvertes + Google Maps embed URL
- `seoBlock` : 3 arguments "pourquoi nous choisir"
- `photos` : chemins vers les photos dans `public/photos/`
- `avis` : avis clients
- `faq` : questions/réponses
- `legal` : infos mentions légales + hébergeur

## Étape 4 — Photos et assets

```
public/
├── logo.png          ← logo du client (carré, fond transparent de préférence)
├── logo.svg          ← variante SVG (favicon)
└── photos/
    ├── hero.jpg      ← photo principale hero (portrait, min 800×1000px)
    ├── urgence.jpg   ← photo section urgences (paysage, min 800×400px)
    ├── real1.jpg     ← réalisation 1 (featured, tall)
    ├── real2.jpg
    ├── real3.jpg
    ├── real4.jpg     ← avant/après si beforeAfter: true dans config
    ├── real5.jpg
    └── real6.jpg
```

## Étape 5 — index.html

Mettre à jour les balises marquées `<!-- À MODIFIER -->` :
- `<title>` et `<meta name="description">`
- `<meta name="keywords">`
- `<meta name="geo.region">` et `geo.placename`
- `<link rel="canonical">`
- Balises Open Graph (`og:title`, `og:description`, `og:url`, `og:image`)
- Décommenter et remplir le bloc Google Analytics si `googleAnalyticsId` renseigné
- Mettre à jour le bloc `schema.org` (type, name, telephone, areaServed, review, hasOfferCatalog)

## Étape 6 — Build & Deploy

```bash
# Build
npm run build

# Deploy via FTP (modifier deploy.py avec les infos Hostinger du client)
python3 deploy.py
```

## Étape 7 — SEO post-deploy

- [ ] Ajouter `google-site-verification` dans index.html si fourni
- [ ] Soumettre sitemap dans Google Search Console
- [ ] Vérifier og:image visible sur WhatsApp (partager le lien)
- [ ] Vérifier `.htaccess` bien présent sur le serveur (SPA routing)

## Notes techniques importantes

- **FTP Hostinger** : le user FTP atterrit dans `/public_html` mais le vrai path du domaine est `/domains/[domaine]/public_html`
- **Cache Hostinger** : si les modifs n'apparaissent pas → purger cache dans hPanel → LiteSpeed Cache
- **scroll-mt** : toutes les sections utilisent `scroll-mt-20 lg:scroll-mt-24`
- **scrollRestoration** : script inline dans `<head>` de index.html pour revenir en haut au reload
- **BottomNav** : navigation fixe en bas sur mobile (lg:hidden), `touch-manipulation` pour fluidité
- **Polices** : system fonts uniquement (pas Google Fonts) pour compatibilité ad blockers
- **Google Maps** : URL embed dans `config.mapsEmbedUrl` — récupérer depuis Google Maps → Partager → Intégrer
- **SPA routing** : `.htaccess` avec RewriteRule nécessaire sur Hostinger Apache
- **WhatsApp** : tous les liens WA sont construits dynamiquement depuis `CONFIG.phone`
