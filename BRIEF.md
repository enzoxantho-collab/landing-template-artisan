# Brief — Nouveau site artisan

Poser ces questions au client avant de commencer.
Toutes les réponses vont dans `src/config.ts`.

## Questions obligatoires

| Info | Exemple |
|------|---------|
| Nom entreprise | Hérault Plomberie Services |
| Métier | plombier / électricien / maçon / peintre... |
| Téléphone | 07 57 54 54 61 |
| Email | contact@heraultplomberie.fr |
| Département / zone | Hérault (34) |
| Villes principales | Montpellier, Béziers, Sète |
| Domaine | heraultplomberie.fr |

## Questions secondaires

| Info | Exemple |
|------|---------|
| Couleur principale | #0f2640 (bleu marine) |
| Couleur accent | #c62828 (rouge) |
| Google Analytics ID | G-XXXXXXXXXX |
| Google Site Verification | lpvZY6j... |
| FTP host | heraultplomberie.fr |
| FTP user | u915731663 |
| FTP password | ... |

## Checklist démarrage

- [ ] Dupliquer `landing-template-artisan` → nouveau dossier
- [ ] Remplir `src/config.ts`
- [ ] Remplacer les photos dans `public/photos/`
- [ ] `npm install`
- [ ] `npm run build`
- [ ] Upload FTP → `/domains/[domaine]/public_html`
- [ ] Vérifier `.htaccess` bien présent sur le serveur
- [ ] Soumettre sitemap dans Google Search Console
- [ ] Ajouter Google Analytics dans `index.html`
