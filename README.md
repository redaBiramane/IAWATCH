# 📡 IA WATCH — Plateforme de Veille Stratégique IA

![IA WATCH](https://img.shields.io/badge/Status-Premium-009597?style=for-the-badge)
![Tech](https://img.shields.io/badge/Built%20with-React%20%2B%20Supabase-blue?style=for-the-badge)

**IA WATCH** est une plateforme SaaS de veille stratégique conçue pour centraliser et analyser les tendances mondiales de l'intelligence artificielle pour le compte de **Sofinco / MCD**.

## 🚀 Fonctionnalités Clés

### 💎 Expérience Premium
- **Landing Page Immersive** : Présentation des enjeux majeurs de l'IA pour capter l'intérêt.
- **Accès Sécurisé** : Système d'authentification complet via Supabase Auth.
- **Rapport Stratégique Intégral** : Navigation fluide entre les synthèses, les 6 axes thématiques, les perspectives et les sources.

### ⚙️ Console d'Administration Avancée
- **Tableau de Bord Statistique** : Visualisation en temps réel des inscriptions et de l'activité.
- **Gestion des Utilisateurs** : Monitoring des accès et des rôles.
- **Éditeur de Contenu Dynamique** : Mise à jour du rapport stratégique (KPIs, Axes, Sources) via une interface JSON synchronisée avec Supabase.
- **Configuration Globale** : Personnalisation du titre, de l'émoji et des métadonnées du site.

## 🛠️ Stack Technique

- **Frontend** : React 18, HTML5/CSS3 (Vanilla), Babel pour le rendu dynamique.
- **Backend & Auth** : [Supabase](https://supabase.com/) (PostgreSQL + Auth).
- **Déploiement** : [Vercel](https://vercel.com/) avec injection automatique de variables d'environnement.
- **Build System** : Script Node.js personnalisé pour la génération du dossier `public/`.

## 📦 Installation et Déploiement

### 1. Variables d'Environnement
Créez un fichier `.env` à la racine du projet :
```env
SUPABASE_URL=votre_url_supabase
SUPABASE_ANON_KEY=votre_cle_anonyme
```

### 2. Installation des dépendances
```bash
npm install
```

### 3. Build local
Pour générer le fichier `index.html` prêt pour la production dans le dossier `/public` :
```bash
npm run build
```

### 4. Déploiement sur Vercel
Le projet est configuré pour un déploiement automatique. Assurez-vous d'ajouter les variables `SUPABASE_URL` et `SUPABASE_ANON_KEY` dans les paramètres de votre projet Vercel.

## 📂 Structure du Projet

- `index.html` : Coeur de l'application (Frontend React + Logique métier).
- `build.js` : Script de compilation pour l'injection des variables d'environnement.
- `package.json` : Gestion des scripts et dépendances.
- `/public` : Dossier généré contenant la version de production.

---
*Produit pour Sofinco / MCD — Mai 2026*
