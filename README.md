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

# 🛣️ Roadmap – FNR-01

FNR-01 is a modular personal budgeting web app, focused on clarity, control, and customization.  
This roadmap defines the key milestones and versions to reach a solid, usable and extensible MVP.

---

## ✅ v0.1.0 — MVP Local (Offline-first)

🎯 Goal: Make the app usable without external services. All data stored locally.

### Features:
- [x] Dashboard with modular widgets
- [x] Income input
- [x] Fixed charges widget
- [x] Budget allocations widget (% / €)
- [x] Summary widget (total expenses, remaining)
- [x] Pie chart visualization
- [x] Persistent data using localStorage
- [x] Basic responsive layout (desktop-first)
- [x] Clean UI with Tailwind CSS

---

## 🚧 v0.2.0 — Settings & History

🎯 Goal: Extend the app with personalization and long-term tracking.

### Features:
- [ ] `/settings` page with:
  - [ ] Custom categories
  - [ ] Display preferences (€, %, decimals)
  - [ ] Widget toggles & layout reset
- [ ] `/history` page with:
  - [ ] Saved months list
  - [ ] Line chart evolution
  - [ ] Option to duplicate or delete a month
- [ ] Month closing/switching logic
- [ ] Export to JSON

---

## 🧪 v0.3.0 — Extras & UI Polish

🎯 Goal: Improve UX and visual appeal.

### Features:
- [ ] Widget resizing / drag & drop with smooth UX
- [ ] Transitions and interactions
- [ ] Light/Dark mode toggle
- [ ] Improved visuals for pie chart & charts
- [ ] Accessibility improvements
- [ ] Add favicon, meta tags, manifest
- [ ] Add real branding (logo, colors)

---

## 🌐 v1.0.0 — Cloud Sync (Optional)

🎯 Goal: Add authentication and cross-device sync.

### Features:
- [ ] Supabase integration
- [ ] User authentication (email/magic link)
- [ ] Save/load data per user in PostgreSQL
- [ ] Restore dashboard layout & categories
- [ ] Conflict resolution
- [ ] Secure access with row-level security

---

## 📌 Future Ideas

- [ ] Budget simulation module (goal saving over months)
- [ ] Income planner for freelancers (variable income)
- [ ] Mobile-first version
- [ ] CSV import/export
- [ ] Family/household mode (multi-user budgeting)
- [ ] PWA support (offline access + installable app)

---

## 🧠 Development Philosophy

- 💡 Simple over complex: each feature must have clear value
- 💾 Start local, then go cloud
- 🧩 Modular and extensible components
- ✨ Polish comes after function
- 📊 Real utility for real people

---

*Last updated: July 2025*

