# Hub Solayia

Espace de travail interne de l'agence **Solayia** : un monorepo qui regroupe trois modules autour d'un socle commun (identité unique, données partagées, design system).

> 📌 Le cadrage complet du projet (stack, structure cible, conventions, méthode de travail) vit dans [`CLAUDE.md`](./CLAUDE.md). Lis-le avant de contribuer.

## Les modules

| Module | Rôle |
| --- | --- |
| **Hub** | Page d'accueil / lanceur. Porte d'entrée unique vers les autres modules. |
| **IA Solayia** | Assistant à agents. L'utilisateur décrit une demande en langage naturel ; un chef de projet répartit le travail sur une équipe d'agents qui agissent sur les outils connectés. Interface ultra-simple. |
| **CRM** | Clients, prospects, contrats. **Socle de données partagé** : les autres modules y lisent/écrivent. |

*(Un quatrième module, « Plateforme de développement », viendra plus tard.)*

## Stack

- **Monorepo** : pnpm workspaces + Turborepo
- **Apps** : Next.js 15 (App Router) + TypeScript strict + Tailwind CSS
- **Données / auth** : Supabase (Postgres, Auth, RLS multi-tenant)
- **Déploiement** : VPS Hostinger derrière nginx partagé · domaines NameSilo · SSL Let's Encrypt
- **CI** : GitHub Actions

## Structure cible

```
solayia-hub/
├── apps/
│   ├── hub/           # lanceur (page d'accueil, 3 tuiles)
│   ├── ia-solayia/    # assistant à agents
│   └── crm/           # CRM (socle de données)
├── packages/
│   ├── ui/            # design system Solayia (tokens + composants partagés)
│   ├── supabase/      # client Supabase + types + helpers RLS
│   └── config/        # config partagée (tsconfig, tailwind, eslint)
├── .claude/skills/    # compétences des agents (voir le README du dossier)
└── CLAUDE.md
```

> ✅ **Phase 1 (socle) en place** : monorepo pnpm + Turborepo, design system `@solayia/ui`, client partagé `@solayia/supabase`, app `hub` (accueil + auth), coquilles `ia-solayia` / `crm`, CI GitHub Actions. Le contenu interne de l'IA et du CRM viendra dans les phases suivantes.

## Démarrage

```bash
pnpm install
cp apps/hub/.env.example apps/hub/.env.local   # renseigner les clés Supabase
pnpm dev                                        # lance les apps (hub :3000, ia-solayia :3001, crm :3002)
```

Vérifs : `pnpm typecheck` · `pnpm lint` · `pnpm build` (doivent passer).

## Design

Toute l'UI suit la **charte Solayia** : fond ivoire, navy `#0e1937` en primaire, or `#cca95b` en accent, titres en *Fraunces*, interface en *Plus Jakarta Sans*. Détails dans [`.claude/skills/charte-solayia/SKILL.md`](./.claude/skills/charte-solayia/SKILL.md).

## Skills

Les compétences chargées automatiquement par Claude Code sont documentées dans [`.claude/skills/`](./.claude/skills/README.md) : `charte-solayia`, `deploiement-hostinger`, `redaction-seo-local`.

## Conventions

- TypeScript strict, composants fonctionnels, hooks.
- Pas de secret en dur : tout passe par `.env` (jamais commité).
- Nommage et commits **en français**, atomiques et explicites.
- Réutilise `packages/ui` plutôt que de redéfinir des styles dans chaque app.
- Accessibilité de base (labels, contrastes, focus visibles).
- Une tâche n'est « terminée » que si **typecheck, lint et build** passent.
