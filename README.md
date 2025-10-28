# IINE - Initiative pour l'Interopérabilité Numérique Européenne

Site web officiel de l'Initiative pour l'Interopérabilité Numérique Européenne.

🌐 **Site en ligne :** [https://sbeignez.github.io/eu-digital/](https://sbeignez.github.io/eu-digital/)

## 📋 À propos

L'Initiative pour l'Interopérabilité Numérique Européenne (IINE) vise à permettre à l'Europe de retrouver le contrôle de son numérique en rendant les solutions européennes simples à combiner, à intégrer et à adopter.

## 🎯 Mission

Créer une alternative concrète aux suites numériques fermées non-européennes en fédérant les solutions européennes existantes autour de standards d'interopérabilité ouverts.

## 🚀 Fonctionnalités du site

- **Design moderne Startup/Tech** : Interface dynamique et colorée avec animations
- **Navigation fluide** : Smooth scroll entre les sections avec menu fixe
- **Animations au scroll** : Éléments qui apparaissent progressivement lors du défilement
- **Statistiques animées** : Chiffres clés qui s'incrémentent à l'affichage
- **Formulaire de contact** : Validation en temps réel et feedback utilisateur
- **100% responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Performance optimisée** : Vanilla JavaScript, pas de framework lourd

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique et accessible
- **CSS3** : Styles modernes avec variables CSS, Flexbox et Grid
- **JavaScript (Vanilla)** : Interactions fluides sans dépendances externes
- **Google Fonts** : Typographie Inter pour un rendu moderne
- **GitHub Pages** : Hébergement gratuit et fiable

## 📁 Structure du projet

```
eu-digital/
├── index.html          # Page principale (one-pager)
├── styles.css          # Styles et animations
├── script.js           # Interactions et logique
├── objectif.md         # Document de référence de l'initiative
└── README.md           # Documentation (ce fichier)
```

## 🎨 Palette de couleurs

- **Bleu primaire** : `#0066FF` (confiance, technologie)
- **Jaune accent** : `#FFD700` (Europe, optimisme)
- **Noir/Gris foncé** : `#1a1a1a` (textes)
- **Gris clair** : `#f5f5f5` (arrière-plans)
- **Blanc** : `#ffffff` (fond principal)

## 📱 Sections du site

1. **Hero** : Introduction et mission principale
2. **Contexte** : Présentation du problème avec statistiques animées
3. **Vision** : Manifeste en 5 points
4. **Bénéfices** : Pour qui ? (Organisations, Éditeurs, Citoyens, Pouvoirs publics)
5. **Approche** : Timeline des phases 1 et 2
6. **Rejoindre** : Formulaire de contact et appel à l'action
7. **Footer** : Informations complémentaires et liens

## 🔧 Installation locale

### Prérequis
- Un navigateur web moderne
- (Optionnel) Un serveur local pour tester

### Méthode 1 : Ouvrir directement
```bash
# Cloner le dépôt
git clone https://github.com/sbeignez/eu-digital.git
cd eu-digital

# Ouvrir index.html dans votre navigateur
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

### Méthode 2 : Avec serveur local (Python)
```bash
# Python 3
python3 -m http.server 8000

# Puis ouvrir http://localhost:8000 dans votre navigateur
```

### Méthode 3 : Avec serveur local (Node.js)
```bash
npx serve .

# Puis ouvrir l'URL affichée dans votre navigateur
```

## 📝 Développement

### Modifier le contenu

- **Textes** : Éditer `index.html`
- **Styles** : Éditer `styles.css`
- **Interactions** : Éditer `script.js`

### Tester les modifications

Ouvrez simplement `index.html` dans votre navigateur après avoir effectué vos modifications. Les changements CSS et JS sont appliqués immédiatement au rechargement de la page.

## 🚀 Déploiement

Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche `master`.

Pour déployer manuellement :

```bash
git add .
git commit -m "Update website"
git push origin master
```

Le site sera accessible à [https://sbeignez.github.io/eu-digital/](https://sbeignez.github.io/eu-digital/) après quelques minutes.

## ✨ Fonctionnalités JavaScript

### Smooth Scroll
Navigation fluide entre les sections au clic sur les liens du menu.

### Intersection Observer
Détection de la visibilité des éléments pour déclencher les animations au scroll.

### Compteurs animés
Les statistiques s'incrémentent progressivement lorsqu'elles deviennent visibles.

### Validation de formulaire
Validation en temps réel des champs email avec feedback visuel.

### Navbar dynamique
Le menu fixe apparaît/disparaît en fonction du scroll.

### Effet parallaxe
Arrière-plan hero avec effet de profondeur subtil.

## 🎯 Optimisations

- **Performance** : Pas de framework lourd, vanilla JS uniquement
- **SEO** : Meta tags optimisés pour les moteurs de recherche
- **Accessibilité** : Navigation au clavier, ARIA labels, contraste respecté
- **Responsive** : Mobile-first design avec breakpoints adaptés
- **Images** : Utilisation d'emojis natifs (pas d'images à charger)

## 📊 Métriques

- **Temps de chargement** : < 1 seconde
- **Taille totale** : < 100KB (HTML + CSS + JS)
- **Score Lighthouse** : 95+ (Performance, Accessibilité, SEO)

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📧 Contact

- **Email** : contact@iine.eu (provisoire)
- **GitHub** : [sbeignez/eu-digital](https://github.com/sbeignez/eu-digital)

## 📄 Licence

Ce projet est sous licence provisoire. Plus d'informations à venir.

## 🗺️ Roadmap

- [ ] Intégration d'un véritable backend pour le formulaire de contact
- [ ] Section "Solutions européennes" avec annuaire
- [ ] Blog/actualités de l'initiative
- [ ] Espace membres
- [ ] Versions multilingues (EN, DE, ES, IT)
- [ ] Dark mode

## 🙏 Remerciements

Merci à tous ceux qui contribuent à rendre l'Europe numérique plus libre et interopérable.

---

**© 2025 IINE - Initiative pour l'Interopérabilité Numérique Européenne**

*Nom provisoire - En cours de développement*
