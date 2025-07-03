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