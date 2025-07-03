# FNR-01 – Planificateur budgétaire personnel

FNR-01 est une application web moderne permettant de structurer son budget mensuel de manière simple, visuelle et personnalisée.  
L'utilisateur peut saisir ses revenus, gérer ses charges fixes, répartir son budget en catégories (épargne, loisirs, vacances...) et visualiser instantanément sa situation financière.

---

## 🔧 Fonctionnalités principales

- 💰 Déclaration du revenu mensuel
- 🧾 Ajout de charges fixes (loyer, abonnements, etc.)
- 📊 Allocation du budget par **montant (€)** ou **pourcentage (%)**
- 🧮 Calcul automatique du reste à vivre
- 📈 Visualisation dynamique (camemberts, barres, historiques)
- 🧩 Dashboard **modulable** via un système de widgets
- 🛠️ Personnalisation des catégories et préférences utilisateur
- 🕓 Historique mensuel avec export des données
- ☁️ (optionnel) Sauvegarde cloud via Supabase

---

## 🧱 Stack technique

| Élément        | Technologie        |
|----------------|--------------------|
| Framework      | Next.js (React)    |
| UI             | Tailwind CSS       |
| Données (MVP)  | localStorage       |
| Graphiques     | Recharts           |
| Auth (option)  | Supabase Auth      |
| Déploiement    | Vercel             |

---

## 🚀 Structure des pages

- `/` → Dashboard avec widgets personnalisables
- `/settings` → Catégories, préférences, configuration
- `/history` → Visualisation de l’historique des mois précédents
- `/login` → (optionnel) Authentification

# 🌿 Git Branching & Naming Conventions – FNR-01

## 🧭 Branch Strategy

This project uses a **feature-branch workflow** with a **protected `main` branch**.  
All changes must be pushed to dedicated branches and merged via Pull Requests.

---

## 📌 Main Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready, protected. Only merge via PR. |
| `dev` *(optional)* | Staging or test environment (if needed). |

---

## 🔧 Feature Branch Naming

All branches should follow the convention:

<type>/<short-description>

Examples:
feature/income-widget
fix/rounding-error
refactor/widget-layout
hotfix/chart-crash
chore/update-dependencies

---

## ✅ Allowed Branch Types

| Type       | Usage                                               |
|------------|-----------------------------------------------------|
| `feature/` | New functionality (e.g. pages, components)          |
| `fix/`     | Bug fixes                                           |
| `refactor/`| Code restructuring without adding features          |
| `chore/`   | Maintenance tasks (dependencies, config, cleanup)   |
| `hotfix/`  | Urgent patch directly to `main` (use with caution)  |
| `docs/`    | Changes to documentation                            |
| `test/`    | Temporary or experimental branches                  |

---

## 🛠️ Example Workflow

# Create a new feature branch
git checkout -b feature/pie-chart-widget

# Work on your code...

# Add, commit, and push
git add .
git commit -m "Add pie chart widget for allocation view"
git push origin feature/pie-chart-widget

# Open a Pull Request to `main`
